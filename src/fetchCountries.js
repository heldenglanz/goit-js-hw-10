export  {fetchCountries} 

// const inputEl = document.querySelector('[id="search-box"]')

// inputEl.addEventListener('input', fetchCountries);

// function fetchCountries(name){

 fetch(`https://restcountries.com/v3.1/name/peru`)
    .then(response => {
        return response.json();
    })
    .then(languages =>{
      console.log(languages)
    })
    .catch (error =>{
      console.log(error);
    })
    // }

// fetchCountries(peru)
// .then(renderCountryParams)
// .catch(error => console.log(error))


// function renderCountryParams(country){
// const marcup = {
    
// }

// }
// inputEl.textContent
