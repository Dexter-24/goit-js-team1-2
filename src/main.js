import { handlerLogin } from './js/login';
import { regBtn, logBtn, STORAGE_KEY } from './js/refs';
import { handlerReg } from './js/reg';

regBtn.addEventListener('click', handlerReg);

logBtn.addEventListener('click', handlerLogin);

const token = localStorage.getItem(STORAGE_KEY);
if (token !== null) {
  location.replace('/contacts.html');
}
