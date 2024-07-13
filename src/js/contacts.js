import { createContactService, getContactService, logOutService } from './api';
import { markupContact } from './markup';
import { btnLogOut, contactForm, contactList, logBtn, STORAGE_KEY } from './refs';

const token = localStorage.getItem(STORAGE_KEY);
if (token === null) {
  location.replace('/');
}
contactForm.addEventListener('submit', createContact);
btnLogOut.addEventListener('click', logOut)

function createContact(evt) {
  evt.preventDefault();
  const { name, number } = evt.currentTarget.elements;
  createContactService({
    name: name.value,
    number: number.value,
  }).then(data => {
    contactList.insertAdjacentHTML('beforeend', markupContact(data));
    contactForm.reset();
  });
}

function reloadPage() {
  getContactService().then((data) => contactList.insertAdjacentHTML('beforeend', data.map(markupContact).join('')))
}

reloadPage();

function logOut() {
  logOutService().then(() => {
    localStorage.removeItem(STORAGE_KEY); 
    location.replace("/")
  })
}