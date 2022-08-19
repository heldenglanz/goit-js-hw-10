import './css/styles.css';
import Notiflix from 'notiflix';
import {fetchCountries} from './fetchCountries'
import countrycard from './templates/countrycard.hbs'
const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;


const inputEl = document.querySelector('[id="search-box"]')
const countryDivEl = document.querySelector('.country-info');
const countryListEl = document.querySelector('.country-list')

inputEl.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange(e){
    countryDivEl.innerHTML = '';
    countryListEl.innerHTML = '';
    const inputResult = e.target.value.trim();

fetchCountries(inputResult)
.then(response =>{
    if (response.length > 10){
        countryDivEl.innerHTML = '';
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name');
    }
    else if (response.length === 1){
        renderCountryInfo(response[0])
    }
    else if(response.length>1&&response.length<=10){
        renderCountryList(response)
    }
})
.catch(onError)

}
function renderCountryInfo(search){
    const markup = countrycard(search)
    countryDivEl.innerHTML = markup;
}
function renderCountryList(arr){
    const markup = arr.reduce((acc, {name, flags})=>{
        return (acc +
            `<li class="country-list-item">
        <img class="country-list-flag" src="${flags.svg}" alt="${name.official}" width="20" heigth="10">
        <p class="country-list-name">${name.official}</p>
        </li>`
        );
    }, '');
    countryListEl.innerHTML = markup;
    // countryDivEl.innerHTML = '';
    }
function onError(error){
    Notiflix.Notify.failure('Oops, there is no country with that name');
}

// console.log(searchQuery)
// const searchCountry = form.textContent;

// function renderCountry(search){
//     // console.log(data);
//     // countryDivEl.textContent = arr;
//   const markup = search.reduce((acc, item)=>{
//   return (acc +
//   `<div class="card">
//   <div class="card-img">
//      <img src="${item.flags.svg}" alt="${item.name.common.official}", width=180px>
//   </div>
//   <div>
//      <h2 class="card-title">${item.name.official}</h2>
//      <p class="card-capital"><span>Capital:</span> ${item.capital}</p>
//      <p class="card-population"><span>Population:</span> ${item.population}</p>
//      <p class="card-languages"><span>Languages:</span>
//          <span class="language-item">${item.languages}</span>
//      </p>
//   </div>
//   </div>`
//       );
//   },
//   '');
//   countryDivEl.innerHTML = markup;
//   }
