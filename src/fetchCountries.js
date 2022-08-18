

const BASE_URL = 'https://restcountries.com/v3.1';
// const countryDivEl = document.querySelector('.country-info');

function fetchCountries(name){
  const search = new URLSearchParams({
      fields: 'name,capital,population,flags,languages',
  });
  
  return fetch(`${BASE_URL}/name/${name}?${search}`).then(response => {
        if(!response.ok){
          throw new Error(response.status);
        }
          return response.json();
      });
    }
// if(!inputResult){
//     countryDivEl.innerHTML = '';
//     countryListEl.innerHTML = '';
// Notiflix

// }
export default {fetchCountries} ;

// const inputEl = document.querySelector('[id="search-box"]')

// inputEl.addEventListener('input', fetchCountries);
// fetchCountries(peru)

// fetch('https://restcountries.com/v3.1/lang/{lang}')
// .then(response=>{
//   return response.json();
// })
// .then(data=>{
//   console.log(data)
// })
// fetchCountries()
// .then(renderCountry)
// .catch(error=> console.log(error))


    
    

    
    // .then(country =>{
    //   console.log(country);
    //   const markup = countryCard(country)
    //   console.log(markup)
    // })


    // }

// fetchCountries(peru)
// .then(renderCountryParams)
// .catch(error => console.log(error))


// function renderCountryParams(country){
// const marcup = {
    
// }

// }
// inputEl.textContent
