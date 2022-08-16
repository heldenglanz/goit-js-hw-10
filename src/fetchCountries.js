export  {fetchCountries} 

const inputEl = document.querySelector('[id="search-box"]')

inputEl.addEventListener('input', fetchCountries);

function fetchCountries(name){

  return fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => {
        return response.json();
    })
    .then(console.log)
    }

fetchCountries(peru)


