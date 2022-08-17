// import countryCard from '//'
export  {fetchCountries} 
const countryDivEl = document.querySelector('.country-info');
// const inputEl = document.querySelector('[id="search-box"]')

// inputEl.addEventListener('input', fetchCountries);
// fetchCountries(peru)
// function fetchCountries(name){
fetch('https://restcountries.com/v3.1/lang/{lang}')
.then(response=>{
  return response.json();
})
.then(data=>{
  console.log(data)
})



fetch(`https://restcountries.com/v3.1/all`)
    .then(response => {
        return response.json();
    })
    .then(data =>{
      console.log(data);
      // console.log()
      return data;
    })
    .then(renderCountry)
    
     
    // }
   
    // .catch(error=> console.log(error))


    // .then(country =>{
    //   console.log(country);
    //   const markup = countryCard(country)
    //   console.log(markup)
    // })


    function renderCountry(data){
      console.log(data)
      
      // countryDivEl.textContent = arr;
  const markup = data.reduce((acc, item)=>{
   
   return (acc +
    //  `<p>${item.languages}</p>`
   `<div class="card">
   <div class="card-img">
       <img src="${item.flags.svg}" alt="${item.name.common.official}">
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

    // }

// fetchCountries(peru)
// .then(renderCountryParams)
// .catch(error => console.log(error))


// function renderCountryParams(country){
// const marcup = {
    
// }

// }
// inputEl.textContent
