import { createContactService } from './api';
import { markupContact } from './markup';
import { contactForm, contactList, STORAGE_KEY } from './refs';

const token = localStorage.getItem(STORAGE_KEY);
if (token === null) {
  location.replace('/');
}
contactForm.addEventListener('submit', createContact);

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
