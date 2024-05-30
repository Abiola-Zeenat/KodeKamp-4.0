"use strict";

// //Dark- theme toggle
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

//update back button
document.addEventListener("DOMContentLoaded", () => {
  const backButton = document.getElementById("back");
  backButton.addEventListener("click", () => {
    window.history.back();
  });
});

//Detailed page fetch
document.addEventListener("DOMContentLoaded", () => {
  const countryDetailsContainer = document.getElementById("country-detail");

  const urlParams = new URLSearchParams(window.location.search);
  const countryName = urlParams.get("name");

  if (countryName) {
    const encodedCountryName = encodeURIComponent(countryName);
    const apiUrl = `https://restcountries.com/v3.1/name/${encodedCountryName}`;

    console.log(`Fetching data from URL: ${apiUrl}`);

    fetch(apiUrl)
      .then((response) => {
        console.log("Response status:", response.status);
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response data:", data);
        if (!data || data.length === 0) {
          throw new Error("No data found for the specified country");
        }
        const country = data[0];
        countryDetailsContainer.innerHTML = "";
        const countryFlag = document.createElement("img");
        countryFlag.src = country.flags.png;
        countryFlag.alt = `Flag of ${country.name.common}`;

        const countryDetailRight = document.createElement("div");
        countryDetailRight.classList.add("detail-right");

        const countryName = document.createElement("h3");
        countryName.textContent = country.name.common;

        const countryDetailSplit = document.createElement("div");
        countryDetailSplit.classList.add("detail-split");

        const split1 = document.createElement("div");
        const split2 = document.createElement("div");

        const countryNativeName = document.createElement("p");
        countryNativeName.textContent = `Native Name: ${
          Object.values(country.name.nativeName)[0].common
        }`;

        const countryPopulation = document.createElement("p");
        countryPopulation.textContent = `Population: ${country.population.toLocaleString()}`;

        const countryRegion = document.createElement("p");
        countryRegion.textContent = `Region: ${country.region}`;

        const countrySubregion = document.createElement("p");
        countrySubregion.textContent = `Subregion: ${country.subregion}`;

        const countryCapital = document.createElement("p");
        countryCapital.textContent = `Capital: ${
          country.capital ? country.capital[0] : "N/A"
        }`;

        const countryTopLevelDomain = document.createElement("p");
        countryTopLevelDomain.textContent = `Top Level Domain: ${country.tld.join(
          ", "
        )}`;

        const countryCurrencies = document.createElement("p");
        countryCurrencies.textContent = `Currencies: ${Object.values(
          country.currencies
        )
          .map((currency) => currency.name)
          .join(", ")}`;

        const countryLanguages = document.createElement("p");
        countryLanguages.textContent = `Languages: ${Object.values(
          country.languages
        ).join(", ")}`;

        const countryBorders = document.createElement("div");
        countryBorders.classList.add("border");

        const borderDiv = document.createElement("div");
        const heading = document.createElement("h6");
        heading.textContent = `Border Countries: ${country.borders.join(",")}`;

        const borderCountriesContainer = document.createElement("div");
        borderCountriesContainer.classList.add("border");
        const borderHeading = document.createElement("h3");
        borderHeading.textContent = "Border Countries:";
        borderCountriesContainer.appendChild(borderHeading);

        if (country.borders && country.borders.length > 0) {
          const borderCountriesList = document.createElement("ul");

          country.borders.forEach((borderCountryCode) => {
            fetch(`https://restcountries.com/v3.1/alpha/${borderCountryCode}`)
              .then((response) => response.json())
              .then((borderCountryData) => {
                const borderCountry = borderCountryData[0];
                const borderCountryItem = document.createElement("li");
                borderCountryItem.classList.add("border-btn");
                const borderCountryLink = document.createElement("a");
                borderCountryLink.href = `detail.html?name=${encodeURIComponent(
                  borderCountry.name.common
                )}`;
                borderCountryLink.textContent = borderCountry.name.common;
                borderCountryItem.appendChild(borderCountryLink);
                borderCountriesList.appendChild(borderCountryItem);
              })
              .catch((error) => {
                console.error(
                  `Error fetching data for border country (${borderCountryCode}):`,
                  error
                );
              });
          });

          borderCountriesContainer.appendChild(borderCountriesList);
        } else {
          const noBordersMessage = document.createElement("p");
          noBordersMessage.textContent =
            "This country has no border countries.";
          borderCountriesContainer.appendChild(noBordersMessage);
        }

        countryDetailsContainer.appendChild(countryFlag);
        countryDetailsContainer.appendChild(countryDetailRight);
        countryDetailRight.appendChild(countryName);
        countryDetailRight.appendChild(countryDetailSplit);
        countryDetailSplit.appendChild(split1);
        split1.appendChild(countryNativeName);
        split1.appendChild(countryPopulation);
        split1.appendChild(countryRegion);
        split1.appendChild(countrySubregion);
        split1.appendChild(countryCapital);
        countryDetailSplit.appendChild(split2);
        split2.appendChild(countryTopLevelDomain);
        split2.appendChild(countryCurrencies);
        split2.appendChild(countryLanguages);
        countryDetailRight.appendChild(borderCountriesContainer);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
        countryDetailsContainer.textContent =
          "Error fetching country data. Please try again later.";
      });
  } else {
    countryDetailsContainer.textContent = "No country selected";
  }
});
