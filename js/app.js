const loadContriesInfo = (all) => {
  fetch(`https://restcountries.com/v3.1/${all}`)
    .then((res) => res.json())
    .then((data) => getCountryDetails(data));
};

const getCountryDetails = (countries) => {
  // console.log(countries)
  const section = document.getElementById("country-container");
  section.innerHTML = "";
  countries.forEach((country) => {
    // console.log(country);
    const postDiv = document.createElement("div");
    postDiv.classList.add("border", "p-5", "rounded-lg");
    postDiv.innerHTML = `
            <img class="h-48" src="${country.flags.svg}" alt="${
      country.flags.alt
    }" >
            <h3 class="font-bold my-5">Name : ${country.name.common}</h3>
            <h5>Capital : ${
              country.capital ? country.capital[0] : "no-capital"
            }</h5>
            <p class="my-5">Population : ${country.population}</p>
            <button onclick="loadContryDetails('${
              country.cca2
            }')" class="bg-sky-200 font-medium px-5 py-2 rounded-lg hover:bg-sky-300">Details</button>
        `;
    section.appendChild(postDiv);
    // regionalDetails(country.region);
  });
};

const loadContryDetails = (code) => {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showCountryDetails(data));
};

const showCountryDetails = (country) => {
  // console.log(country)
  const detailsContainer = document.getElementById("country-details");
  const showDiv = document.createElement("div");
  showDiv.innerHTML = `
    <img class="h-48" src= "${country[0].flags.png}" >
    <p class="my-2">Official Name : <span class="font-medium">${country[0].name.official}</span></p>
    
    <p class="my-2">Continents : <span class="font-medium">${country[0].continents[0]}</span></p>
    <p class="my-2">Continents : <span class="font-medium">${country[0].region}</span></p>
    <p class="my-2">Subregion : <span class="font-medium">${country[0].subregion}</span></p>
    `;
  detailsContainer.appendChild(showDiv);
};

// const regionalDetails = region =>{
//     const url = `https://restcountries.com/v3.1/region/${region}`;
//     console.log(url)
// }

document.getElementById("all").addEventListener("click", function () {
  loadContriesInfo("all");
});

const regionName = (id) => {
    const regionText = document.getElementById(id).innerText;
    // console.log(regionText);
    regionalDetails(regionText);
}

const regionalDetails = async (regionText) => {
  const url = `https://restcountries.com/v3.1/region/${regionText}`;
//   console.log(url);
  const res = await fetch(url);
  const data = await res.json();
  getCountryDetails(data);
};

loadContriesInfo("all");
