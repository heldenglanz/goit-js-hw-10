import './css/styles.css';
import fetchCountries from './fetchCountries'
// const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('[id="search-box"]')
const countryDivEl = document.querySelector('.country-info');
const countryListEl = document.querySelector('.country-list')

inputEl.addEventListener('input', onInputChange);


function onInputChange(e){
    // e.preventDefault()

const form = e.currentTarget;
const inputResult = form.value.trim()
console.log(inputResult)
// const searchCountry = form.textContent;


fetchCountries(inputResult)
.then(renderCountry)
.catch(error=> console.log(error))

// if(!inputResult){
//     countryDivEl.innerHTML = '';
//     countryListEl.innerHTML = '';
// Notiflix

// }




}





function renderCountry(data){
    console.log(data)
    // countryDivEl.textContent = arr;
const markup = data.reduce((acc, item)=>{
 
 return (acc +
  //  `<p>${item.languages}</p>`
 `<div class="card">
 <div class="card-img">
     <img src="${item.flags.svg}" alt="${item.name.common.official}", width=180px>
 </div>
 <div>
     <h2 class="card-title">${item.name.official}</h2>
     <p class="card-capital"><span>Capital:</span> ${item.capital}</p>
     <p class="card-population"><span>Population:</span> ${item.population}</p>
     <ul class="card-languages"><span>Languages:</span>
         <li class="language-item">${item.languages}</li>
     </ul>
 </div>
 
 </div>`
      );
},
'');
countryDivEl.innerHTML = markup;
}