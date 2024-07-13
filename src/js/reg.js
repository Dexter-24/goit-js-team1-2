import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { createUserService } from './api';
import { STORAGE_KEY } from './refs';

const instanceRegister = basicLightbox.create(
  document.querySelector('#register')
);

export function handlerReg() {
  instanceRegister.show();
  const regForm = document.querySelector('.register-form');
  regForm.addEventListener('submit', createUser);
}

function createUser(evt) {
  evt.preventDefault();
  const { name, email, password } = evt.currentTarget.elements;
  createUserService({
    name: name.value,
    email: email.value,
    password: password.value,
  }).then(data => {
    localStorage.setItem(STORAGE_KEY, data.token);
    location.replace('/contacts.html');
    instanceRegister.close();
  });
}
