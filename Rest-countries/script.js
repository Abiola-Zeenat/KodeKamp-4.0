"use strict";

//Dark- theme toggle

document.addEventListener("DOMContentLoaded", () => {
  // Initialize the currentThemeSetting variable
  let currentThemeSetting = "dark";

  const toggleButton = document.querySelector(".toggle");

  toggleButton.addEventListener("click", () => {
    // Determine the new theme
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

    // Update the toggleButton text
    const newCta =
      newTheme === "dark"
        ? `<i class="fa fa-sun-o" aria-hidden="true"></i> Light Mode`
        : `<i class="fa fa-moon-o" aria-hidden="true"></i> Dark Mode`;
    toggleButton.innerHTML = newCta;

    // Update theme attribute on HTML to switch theme in CSS
    document.querySelector("html").setAttribute("data-theme", newTheme);

    // Update the currentThemeSetting in memory
    currentThemeSetting = newTheme;
  });
});

//fetch country info from Api
document.addEventListener("DOMContentLoaded", () => {
  const countryContainer = document.getElementById("country-container");
  const searchInput = document.getElementById("search");
  const regionFilter = document.getElementById("region-filter");
  let countriesData = [];

  const fetchCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        countriesData = data;
        displayCountries(data.slice(0, 8)); // Display only 8 countries initially
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
  };

  const displayCountries = (countries) => {
    countryContainer.innerHTML = ""; // Clear the container

    countries.forEach((country) => {
      const countryCard = document.createElement("div");
      countryCard.classList.add("country");

      const countryFlag = document.createElement("img");
      countryFlag.src = country.flags.png;
      countryFlag.alt = `Flag of ${country.name.common}`;
      countryFlag.addEventListener("click", () => {
        window.location.href = `detail.html?name=${country.name.common}`;
      });

      const countryInfo = document.createElement("div");
      countryInfo.classList.add("country-info");

      const countryName = document.createElement("h4");
      countryName.textContent = country.name.common;

      const countryPopulation = document.createElement("p");
      countryPopulation.innerHTML = `<span>Population: </span>${country.population.toLocaleString()}`;

      const countryRegion = document.createElement("p");
      countryRegion.innerHTML = `<span>Region:</span> ${country.region}`;

      const countryCapital = document.createElement("p");
      countryCapital.textContent = `Capital: ${
        country.capital ? country.capital[0] : "N/A"
      }`;

      countryCard.appendChild(countryFlag);
      countryInfo.appendChild(countryName);
      countryInfo.appendChild(countryPopulation);
      countryInfo.appendChild(countryRegion);
      countryInfo.appendChild(countryCapital);
      countryCard.appendChild(countryInfo);

      countryContainer.appendChild(countryCard);
    });
  };

  const filterCountries = () => {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedRegion = regionFilter.value;

    let filteredCountries = countriesData;

    if (searchTerm) {
      filteredCountries = filteredCountries.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm)
      );
    }

    if (selectedRegion) {
      filteredCountries = filteredCountries.filter(
        (country) => country.region === selectedRegion
      );
    }

    displayCountries(filteredCountries.slice(0, 8)); // Display only 8 filtered countries
  };

  // Fetch countries when the page loads
  fetchCountries();

  // Add event listeners for search and filter
  searchInput.addEventListener("input", filterCountries);
  regionFilter.addEventListener("change", filterCountries);
});
