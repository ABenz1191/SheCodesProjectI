let now = new Date();

function formatDate() {
  let date = now.getDate();
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let year = now.getFullYear();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[now.getDay()];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[now.getMonth()];

  let newTimeDate = `${day} ${month} ${date}, ${year}, ${hours}:${minutes}`;

  return newTimeDate;
}
let displayLocalTime = document.querySelector("#display-time-date");
let currentTimeDate = new Date();
displayLocalTime.innerHTML = formatDate(currentTimeDate);

function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-text-input");
  let userCity = `${cityInput.value}`;
  let apiKey = "383f7ea53619c38b753cfeb116648163";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayCurrent);
}
function retrieveUserPosition(position) {
  let apiKey = "383f7ea53619c38b753cfeb116648163";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayCurrent);
}

function searchUserPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(retrieveUserPosition);
}

function displayCurrent(response) {
  let updateCurrentCity = document.querySelector("#local-city");
  updateCurrentCity.innerHTML = response.data.name;
  let updateCurrentTemp = document.querySelector("#current-local-temp");
  updateCurrentTemp.innerHTML = Math.round(response.data.main.temp);
  tempFahrenheit = response.data.main.temp;
  let updateCurrentConditions = document.querySelector(
    "#current-local-conditions"
  );
  updateCurrentConditions.innerHTML = response.data.sys.weather.description;
  let updateCurrentCloudCoverage = document.querySelector(
    "#current-local-cloud-coverage"
  );
  updateCurrentCloudCoverage.innerHTML = response.data.clouds.all;
  let updateCurrentHumidity = document.querySelector("#current-local-humidity");
  updateCurrentHumidity.innerHTML = response.data.main.humidity;
  let updateCurrentWind = document.querySelector("#current-local-wind");
  updateCurrentWind.innerHTML = Math.round(response.data.wind.speed);
  windspeedImperial = response.data.wind.speed;
  let updateCurrentHeatIndex = document.querySelector(
    "#current-local-heat-index"
  );
  updateCurrentHeatIndex.innerHTML = Math.round(response.data.main.feels_like);
  heatIndexFahrenheit = response.data.main.feels_like;
  let updateCurrentHigh = document.querySelector("#current-local-high");
  updateCurrentHigh.innerHTML = Math.round(response.data.main.temp_max);
  highFahrenheit = response.data.main.temp_max;
  let updateCurrentLow = document.querySelector("#current-local-low");
  updateCurrentLow.innerHTML = Math.round(response.data.main.temp_min);
  lowFahrenheit = response.data.main.temp_min;
}

function convertToCelsius(event) {
  event.preventDefault();

  let tempCelsius = document.querySelector("#current-local-temp");
  let tempCelsiusConversion = Math.round((tempFahrenheit - 32) / 1.8);
  tempCelsius.innerHTML = `${tempCelsiusConversion}`;

  let tempUnitsCelsius = document.querySelector("#temp-units");
  tempUnitsCelsius.innerHTML = " °C";

  let displayHighCelsius = document.querySelector("#current-local-high");
  let highCelsiusConversion = Math.round((highFahrenheit - 32) / 1.8);
  displayHighCelsius.innerHTML = `${highCelsiusConversion}`;

  let displayLowCelsius = document.querySelector("#current-local-low");
  let lowCelsiusConversion = Math.round((lowFahrenheit - 32) / 1.8);
  displayLowCelsius.innerHTML = `${lowCelsiusConversion}`;

  let displayWindspeedMetric = document.querySelector("#current-local-wind");
  let windspeedMetricConversion = Math.round(windspeedImperial * 0.447);
  displayWindspeedMetric.innerHTML = `${windspeedMetricConversion}`;

  let windspeedUnitsMetric = document.querySelector("#wind-units");
  windspeedUnitsMetric.innerHTML = " m/s";

  let displayHeatIndexCelsius = document.querySelector(
    "#current-local-heat-index"
  );
  let heatIndexCelsiusConversion = Math.round((heatIndexFahrenheit - 32) / 1.8);
  displayHeatIndexCelsius.innerHTML = `${heatIndexCelsiusConversion}`;

  let heatIndexUnitsCelsius = document.querySelector("#heat-index-units");
  heatIndexUnitsCelsius.innerHTML = " °C";
}

function convertToFahrenheit(event) {
  let displayTempFahrenheit = document.querySelector("#current-local-temp");
  displayTempFahrenheit.innerHTML = Math.round(tempFahrenheit);

  let tempUnitsFahrenheit = document.querySelector("#temp-units");
  tempUnitsFahrenheit.innerHTML = " °F";

  let displayWindImperial = document.querySelector("#current-local-wind");
  displayWindImperial.innerHTML = Math.round(windspeedImperial);

  let windspeedUnitsImperial = document.querySelector("#wind-units");
  windspeedUnitsImperial.innerHTML = " mph";

  let displayHeatIndexFahrenheit = document.querySelector(
    "#current-local-heat-index"
  );
  displayHeatIndexFahrenheit.innerHTML = Math.round(heatIndexFahrenheit);

  let displayHighFahrenheit = document.querySelector("#current-local-high");
  displayHighFahrenheit.innerHTML = Math.round(highFahrenheit);

  let displayLowFahrenheit = document.querySelector("#current-local-low");
  displayLowFahrenheit.innerHTML = Math.round(lowFahrenheit);

  let heatIndexUnitsFahrenheit = document.querySelector("#heat-index-units");
  heatIndexUnitsFahrenheit.innerHTML = " °F";
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

let celsiusConversionButton = document.querySelector(
  "#celsius-conversion-button"
);
celsiusConversionButton.addEventListener("click", convertToCelsius);

let fahrenheitConversionButton = document.querySelector(
  "#fahrenheit-conversion-button"
);
fahrenheitConversionButton.addEventListener("click", convertToFahrenheit);

let coordinatesButton = document.querySelector("#current-location-button");
coordinatesButton.addEventListener("click", searchUserPosition);
