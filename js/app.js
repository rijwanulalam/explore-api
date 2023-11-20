const loadContriesInfo = () => {
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => getCountryDetails(data))
}

const getCountryDetails = countries => {
    // console.log(countries)
    const section = document.getElementById("country-container");
    countries.forEach( country => {
        // console.log(country);
        const postDiv = document.createElement("div");
        postDiv.classList.add("border", "p-5", "rounded-lg")
        postDiv.innerHTML = `
            <img class="h-48" src="${country.flags.svg}" alt="${country.flags.alt}" >
            <h3 class="font-bold my-5">Name : ${country.name.official}</h3>
            <h5>Capital : ${country.capital ?country.capital[0] : "no-capital"}</h5>
            <p class="my-5">Population : ${country.population}</p>
            <button onclick="loadContryDetails()" class="bg-sky-200 font-medium px-5 py-2 rounded-lg hover:bg-sky-300">Details</button>
        `
        section.appendChild(postDiv);
    });
}

function loadContryDetails(){
    console.log("clicked")
}

loadContriesInfo();


