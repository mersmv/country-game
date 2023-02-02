// El styles lo importamos aquí, ya se carga después al compilar todo

import '../scss/styles.scss';
import { createCard } from './find-country.js';
import { getCountries } from './find-country.js';

const form = document.getElementById('form');

form.addEventListener('submit', e => {
  e.preventDefault();

  getCountries(e.target.country.value);
});
