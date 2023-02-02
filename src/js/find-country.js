const countries = document.getElementById('countries');

const fetchData = url => fetch(url);

const getCountries = countryName => {
  const request = fetchData(
    'https://restcountries.com/v3.1/name/' + countryName
  );
  request.then(response => response.json()).then(data => createCard(data));
};

const createCard = data => {
  countries.innerHTML = '';
  const container = document.createElement('div');
  container.classList.add('country-info-container');

  const flag = document.createElement('img');
  flag.src = data[0].flags.svg;
  flag.alt = data[0].flags.alt;
  container.append(flag);

  const countryName = document.createElement('h2');
  countryName.textContent = data[0].name.common;
  container.append(countryName);

  const populationTitle = document.createElement('h3');
  populationTitle.textContent = 'Population: ';
  const populationNumber = document.createElement('span');
  populationNumber.textContent = data[0].population;
  populationNumber.classList.add('text-info');
  populationTitle.append(populationNumber);
  container.append(populationTitle);

  const regionTitle = document.createElement('h3');
  regionTitle.textContent = 'Region: ';
  const regionInfo = document.createElement('span');
  regionInfo.textContent = data[0].region;
  regionInfo.classList.add('text-info');
  regionTitle.append(regionInfo);
  container.append(regionTitle);

  const capitalTitle = document.createElement('h3');
  capitalTitle.textContent = 'Capital: ';
  const capitalInfo = document.createElement('span');
  capitalInfo.textContent = data[0].capital;
  capitalInfo.classList.add('text-info');
  capitalTitle.append(capitalInfo);
  container.append(capitalTitle);

  countries.append(container);
};

export { createCard, getCountries };
