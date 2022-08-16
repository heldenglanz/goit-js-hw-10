function e(e){return fetch(`https://restcountries.com/v3.1/name/${e}`).then((e=>e.json())).then(console.log)}document.querySelector('[id="search-box"]').addEventListener("input",e),e(peru);
//# sourceMappingURL=index.78794c61.js.map
