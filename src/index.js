import './css/styles.css';
const DEBOUNCE_DELAY = 300;
import Notiflix from 'notiflix';
import API from './fetchCountries'
const debounce = require('lodash.debounce');



const inputEl = document.querySelector('[id="search-box"]')
const countryDivEl = document.querySelector('.country-info');
const countryListEl = document.querySelector('.country-list')

inputEl.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange(e){
    const inputResult = e.target.value;


if(!inputResult){
    countryDivEl.innerHTML = '';
    countryListEl.innerHTML = '';
    return
}
API.fetchCountries(inputResult)
.then(response =>{
    if (response.length > 10){
        countryDivEl.innerHTML = '';
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name');
    }
    else if (response.length === 1){
        renderCountry(response[0]);
        renderCountryInfo()
    }
    else if(response.length>1&&response.length<=10){
        renderCountry(response);
        renderCountryList()
    }
})
.catch(onError)
}
function renderCountryInfo(search){
    renderCountry(search)
    countryListEl.innerHTML = '';
    countryDivEl.innerHTML = markup;
}
function renderCountryList(arr){
    const markup = arr.reduce((acc, {name, flag})=>{
        return (acc+ `<li class="country-list-item">
        <img class="country-list-flag" src="${flag.svg})" alt="${name.official}" width="80" heigth="60">
        <p class="country-list-name">${name.official}</p>
        </li>`
        );
    }, '');
    countryListEl.innerHTML = markup;
    countryDivEl.innerHTML = '';
    }
function onError(error){
    countryDivEl.innerHTML = '';
    countryListEl.innerHTML = '';
}
// console.log(searchQuery)
// const searchCountry = form.textContent;

function renderCountry(data){
    // console.log(data);
    // countryDivEl.textContent = arr;
  const markup = data.reduce((acc, country)=>{
  return (acc +
  `<div class="card">
  <div class="card-img">
     <img src="${country.flags.svg}" alt="${country.name.common.official}", width=180px>
  </div>
  <div>
     <h2 class="card-title">${country.name.official}</h2>
     <p class="card-capital"><span>Capital:</span> ${country.capital}</p>
     <p class="card-population"><span>Population:</span> ${country.population}</p>
     <p class="card-languages"><span>Languages:</span>
         <span class="language-item">${country.languages}</span>
     </p>
  </div>
  </div>`
      );
  },
  '');
  countryDivEl.innerHTML = markup;
  }
