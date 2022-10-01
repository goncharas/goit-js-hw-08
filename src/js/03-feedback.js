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

  if (lenghtFormData < 2) {
    alert('please fill in the field');
  }
  console.log(formData);
  evt.currentTarget.reset();
  localStorage.removeItem('formData');
  for (var key in formData) {
    delete formData[key];
  }
}

function setFormData() {
  const savedMessage = localStorage.getItem('formData');
  const formSavedMessage = JSON.parse(savedMessage);
  console.log(formSavedMessage);
  if (savedMessage) {
    console.log(savedMessage);
    textarea.value = formSavedMessage.message;
    inputArea.value = formSavedMessage.email;
  }
}