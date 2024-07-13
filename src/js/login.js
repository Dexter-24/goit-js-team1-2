import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { loginUserService } from './api';
import { STORAGE_KEY } from './refs';

const instanceLogin = basicLightbox.create(document.querySelector('#login'));

export function handlerLogin() {
  instanceLogin.show();
  const loginForm = document.querySelector('.login-form');
  loginForm.addEventListener('submit', loginUser);
}

function loginUser(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  loginUserService({
    email: email.value,
    password: password.value,
  }).then(data => {
    localStorage.setItem(STORAGE_KEY, data.token);
    location.replace('/contacts.html');
    instanceLogin.close();
  });
}
