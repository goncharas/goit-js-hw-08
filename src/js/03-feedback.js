import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const inputArea = document.querySelector('input');
const formData = {};

setFormData()

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 1000));

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('formData', JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const lenghtFormData = Object.keys(formData).length;

  if (!form.elements.email.value || !form.elements.message.value) {
    return alert('please fill in the field');
  }
  
  console.log(formData);
  evt.currentTarget.reset();
  localStorage.removeItem('formData');
}

function setFormData() {
  const savedMessage = localStorage.getItem('formData');
  const formSavedMessage = JSON.parse(savedMessage);
  // console.log(formSavedMessage);
  if (savedMessage) {
    console.log(savedMessage);
    if (formSavedMessage.message) {
      textarea.value = formSavedMessage.message;
      formData.message = formSavedMessage.message;
    }
    if (formSavedMessage.email) {
      inputArea.value = formSavedMessage.email;
      formData.email = formSavedMessage.email;
    }
  }
}