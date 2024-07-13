import axios from 'axios';
import { STORAGE_KEY } from './refs';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
const token = localStorage.getItem(STORAGE_KEY);
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export async function createUserService(user) {
  const { data } = await axios.post('/users/signup', user);
  return data;
}

export async function loginUserService(user) {
  const { data } = await axios.post('/users/login', user);
  return data;
}

export async function createContactService(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}
