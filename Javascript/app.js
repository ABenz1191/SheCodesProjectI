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
  let updateHourlyTemp0 = document.querySelector("#hourly-card-temp-0");
  updateHourlyTemp0.innerHTML = Math.round(tempFahrenheit) + "°";
  let updateCurrentConditions = document.querySelector(
    "#current-local-conditions"
  );
  updateCurrentConditions.innerHTML = response.data.weather[0].main;
  let updateCurrentCloudCoverage = document.querySelector(
    "#current-local-cloud-coverage"
  );
  updateCurrentCloudCoverage.innerHTML = response.data.clouds.all + "%";
  let updateCurrentHumidity = document.querySelector("#current-local-humidity");
  updateCurrentHumidity.innerHTML = response.data.main.humidity;
  let updateCurrentWindSpeed = document.querySelector(
    "#current-local-wind-speed"
  );
  updateCurrentWindSpeed.innerHTML = Math.round(response.data.wind.speed);
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
  updateCurrentVisibility = document.querySelector("#current-local-visibility");
  updateCurrentVisibility.innerHTML = response.data.visibility + "m";

  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let updateHourlyTimeCard0 = document.querySelector("#hourly-cardheader-0");
  updateHourlyTimeCard0.innerHTML = `${hours}00`;
  let updateHourlyTimeCard1 = document.querySelector("#hourly-cardheader-1");
  let hourlyTimeCard1Conversion = now.getHours() + 1;
  if (hourlyTimeCard1Conversion < 10) {
    hourlyTimeCard1Conversion = `0${hourlyTimeCard1Conversion}`;
  }
  updateHourlyTimeCard1.innerHTML = `${hourlyTimeCard1Conversion}00`;

  let updateHourlyTimeCard2 = document.querySelector("#hourly-cardheader-2");
  let hourlyTimeCard2Conversion = now.getHours() + 2;
  if (hourlyTimeCard2Conversion < 10) {
    hourlyTimeCard2Conversion = `0${hourlyTimeCard2Conversion}`;
  }
  updateHourlyTimeCard2.innerHTML = `${hourlyTimeCard2Conversion}00`;

  let updateHourlyTimeCard3 = document.querySelector("#hourly-cardheader-3");
  let hourlyTimeCard3Conversion = now.getHours() + 3;
  if (hourlyTimeCard3Conversion < 10) {
    hourlyTimeCard3Conversion = `0${hourlyTimeCard3Conversion}`;
  }
  updateHourlyTimeCard3.innerHTML = `${hourlyTimeCard3Conversion}00`;

  let updateHourlyTimeCard4 = document.querySelector("#hourly-cardheader-4");
  let hourlyTimeCard4Conversion = now.getHours() + 4;
  if (hourlyTimeCard4Conversion < 10) {
    hourlyTimeCard4Conversion = `0${hourlyTimeCard4Conversion}`;
  }
  updateHourlyTimeCard4.innerHTML = `${hourlyTimeCard4Conversion}00`;

  let updateHourlyTimeCard5 = document.querySelector("#hourly-cardheader-5");
  let hourlyTimeCard5Conversion = now.getHours() + 5;
  if (hourlyTimeCard5Conversion < 10) {
    hourlyTimeCard5Conversion = `0${hourlyTimeCard5Conversion}`;
  }
  updateHourlyTimeCard5.innerHTML = `${hourlyTimeCard5Conversion}00`;

  let updateHourlyTimeCard6 = document.querySelector("#hourly-cardheader-6");
  let hourlyTimeCard6Conversion = now.getHours() + 6;
  if (hourlyTimeCard6Conversion < 10) {
    hourlyTimeCard6Conversion = `0${hourlyTimeCard6Conversion}`;
  }
  updateHourlyTimeCard6.innerHTML = `${hourlyTimeCard6Conversion}00`;

  let updateHourlyTimeCard7 = document.querySelector("#hourly-cardheader-7");
  let hourlyTimeCard7Conversion = now.getHours() + 7;
  if (hourlyTimeCard7Conversion < 10) {
    hourlyTimeCard7Conversion = `0${hourlyTimeCard7Conversion}`;
  }
  updateHourlyTimeCard7.innerHTML = `${hourlyTimeCard7Conversion}00`;

  let displayMainIcon = document.querySelector("#current-main-image");

  displayMainIcon.setAttribute("alt", response.data.weather[0].description);
  displayMainIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  let displayCurrentHourIcon = document.querySelector("#hour-current-image");
  displayMainIcon.setAttribute("alt", response.data.weather[0].description);
  displayCurrentHourIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  let displayOneHourIcon = document.querySelector("#hour-one-image");
  displayOneHourIcon.setAttribute("alt", response.data.weather[0].description);
  displayOneHourIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  let displayTwoHourIcon = document.querySelector("#hour-two-image");
  displayTwoHourIcon.setAttribute("alt", response.data.weather[0].description);
  displayTwoHourIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  let displayThreeHourIcon = document.querySelector("#hour-three-image");
  displayThreeHourIcon.setAttribute(
    "alt",
    response.data.weather[0].description
  );
  displayThreeHourIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  let displayFourHourIcon = document.querySelector("#hour-four-image");
  displayFourHourIcon.setAttribute("alt", response.data.weather[0].description);
  displayFourHourIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  let displayFiveHourIcon = document.querySelector("#hour-five-image");
  displayFiveHourIcon.setAttribute("alt", response.data.weather[0].description);
  displayFiveHourIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  let displaySixHourIcon = document.querySelector("#hour-six-image");
  displaySixHourIcon.setAttribute("alt", response.data.weather[0].description);
  displaySixHourIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  let displaySevenHourIcon = document.querySelector("#hour-seven-image");
  displaySevenHourIcon.setAttribute(
    "alt",
    response.data.weather[0].description
  );
  displaySevenHourIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );

  getCoordinates(response.data.coord);
}
function getCoordinates(coordinates) {
  let apiKey = "383f7ea53619c38b753cfeb116648163";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  let forecastTempOne = document.querySelector("#hourly-card-temp-1");
  let forecastTempOneDisplay = Math.round(response.data.hourly[0].temp);
  forecastTempOne.innerHTML = `${forecastTempOneDisplay}°`;
  forecastHourOne = Math.round(response.data.hourly[0].temp);

  let forecastTempTwo = document.querySelector("#hourly-card-temp-2");
  let forecastTempTwoDisplay = Math.round(response.data.hourly[1].temp);
  forecastTempTwo.innerHTML = `${forecastTempTwoDisplay}°`;
  forecastHourTwo = Math.round(response.data.hourly[1].temp);

  let forecastTempThree = document.querySelector("#hourly-card-temp-3");
  let forecastTempThreeDisplay = Math.round(response.data.hourly[2].temp);
  forecastTempThree.innerHTML = `${forecastTempThreeDisplay}°`;
  forecastHourThree = Math.round(response.data.hourly[2].temp);

  let forecastTempFour = document.querySelector("#hourly-card-temp-4");
  let forecastTempFourDisplay = Math.round(response.data.hourly[3].temp);
  forecastTempFour.innerHTML = `${forecastTempFourDisplay}°`;
  forecastHourFour = Math.round(response.data.hourly[3].temp);

  let forecastTempFive = document.querySelector("#hourly-card-temp-5");
  let forecastTempFiveDisplay = Math.round(response.data.hourly[4].temp);
  forecastTempFive.innerHTML = `${forecastTempFiveDisplay}°`;
  forecastHourFive = Math.round(response.data.hourly[4].temp);

  let forecastTempSix = document.querySelector("#hourly-card-temp-6");
  let forecastTempSixDisplay = Math.round(response.data.hourly[5].temp);
  forecastTempSix.innerHTML = `${forecastTempSixDisplay}°`;
  forecastHourSix = Math.round(response.data.hourly[5].temp);

  let forecastTempSeven = document.querySelector("#hourly-card-temp-7");
  let forecastTempSevenDisplay = Math.round(response.data.hourly[6].temp);
  forecastTempSeven.innerHTML = `${forecastTempSevenDisplay}°`;
  forecastHourSeven = Math.round(response.data.hourly[6].temp);

  let displayForecastAlerts = document.querySelector(
    "#forecast-alerts-description"
  );
  displayForecastAlerts.innerHTML = response.data.alerts.description;

  callForecastIcons(response.data.coord);
}

function callForecastIcons(coordinates) {
  let apiKey = "383f7ea53619c38b753cfeb116648163";
  let apiUrl = `pro.openweathermap.org/data/2.5/forecast/hourly?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayForecastIcons);
}

function displayForecastIcons(response) {
  let displayHourOneIcon = document.querySelector("#hour-one-image");
  displayHourOneIcon.setAttribute(
    "alt",
    response.data.list[0].weather.description
  );
  displayHourOneIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.list[0].weather.icon}@2x.png`
  );
}

function convertToCelsius(event) {
  event.preventDefault();

  let tempCelsius = document.querySelector("#current-local-temp");
  let tempCelsiusConversion = Math.round((tempFahrenheit - 32) / 1.8);
  tempCelsius.innerHTML = `${tempCelsiusConversion}`;

  let tempUnitsCelsius = document.querySelector("#temp-units");
  tempUnitsCelsius.innerHTML = " °C";

  let displayHourlyTemp0Celsius = document.querySelector("#hourly-card-temp-0");
  displayHourlyTemp0Celsius.innerHTML = `${tempCelsiusConversion}°`;

  let displayHighCelsius = document.querySelector("#current-local-high");
  let highCelsiusConversion = Math.round((highFahrenheit - 32) / 1.8);
  displayHighCelsius.innerHTML = `${highCelsiusConversion}`;

  let displayLowCelsius = document.querySelector("#current-local-low");
  let lowCelsiusConversion = Math.round((lowFahrenheit - 32) / 1.8);
  displayLowCelsius.innerHTML = `${lowCelsiusConversion}`;

  let displayWindspeedMetric = document.querySelector(
    "#current-local-wind-speed"
  );
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

  let forecastHourOneCelsius = document.querySelector("#hourly-card-temp-1");
  let forecastHourOneConversion = Math.round((forecastHourOne - 32) / 1.8);
  forecastHourOneCelsius.innerHTML = `${forecastHourOneConversion}°`;

  let forecastHourTwoCelsius = document.querySelector("#hourly-card-temp-2");
  let forecastHourTwoConversion = Math.round((forecastHourTwo - 32) / 1.8);
  forecastHourTwoCelsius.innerHTML = `${forecastHourTwoConversion}°`;

  let forecastHourThreeCelsius = document.querySelector("#hourly-card-temp-3");
  let forecastHourThreeConversion = Math.round((forecastHourThree - 32) / 1.8);
  forecastHourThreeCelsius.innerHTML = `${forecastHourThreeConversion}°`;

  let forecastHourFourCelsius = document.querySelector("#hourly-card-temp-4");
  let forecastHourFourConversion = Math.round((forecastHourFour - 32) / 1.8);
  forecastHourFourCelsius.innerHTML = `${forecastHourFourConversion}°`;

  let forecastHourFiveCelsius = document.querySelector("#hourly-card-temp-5");
  let forecastHourFiveConversion = Math.round((forecastHourFive - 32) / 1.8);
  forecastHourFiveCelsius.innerHTML = `${forecastHourFiveConversion}°`;

  let forecastHourSixCelsius = document.querySelector("#hourly-card-temp-6");
  let forecastHourSixConversion = Math.round((forecastHourSix - 32) / 1.8);
  forecastHourSixCelsius.innerHTML = `${forecastHourSixConversion}°`;

  let forecastHourSevenCelsius = document.querySelector("#hourly-card-temp-7");
  let forecastHourSevenConversion = Math.round((forecastHourSeven - 32) / 1.8);
  forecastHourSevenCelsius.innerHTML = `${forecastHourSevenConversion}°`;
}

function convertToFahrenheit(event) {
  let displayTempFahrenheit = document.querySelector("#current-local-temp");
  displayTempFahrenheit.innerHTML = Math.round(tempFahrenheit);

  let tempUnitsFahrenheit = document.querySelector("#temp-units");
  tempUnitsFahrenheit.innerHTML = " °F";

  let displayHourlyTemp0Fahrenheit = document.querySelector(
    "#hourly-card-temp-0"
  );
  displayHourlyTemp0Fahrenheit.innerHTML = Math.round(tempFahrenheit) + "°";

  let displayWindImperial = document.querySelector("#current-local-wind-speed");
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

  let forecastHourOneFahrenheit = document.querySelector("#hourly-card-temp-1");
  forecastHourOneFahrenheit.innerHTML = `${forecastHourOne}°`;

  let forecastHourTwoFahrenheit = document.querySelector("#hourly-card-temp-2");
  forecastHourTwoFahrenheit.innerHTML = `${forecastHourTwo}°`;
  let forecastHourThreeFahrenheit = document.querySelector(
    "#hourly-card-temp-3"
  );
  forecastHourThreeFahrenheit.innerHTML = `${forecastHourThree}°`;
  let forecastHourFourFahrenheit = document.querySelector(
    "#hourly-card-temp-4"
  );
  forecastHourFourFahrenheit.innerHTML = `${forecastHourFour}°`;
  let forecastHourFiveFahrenheit = document.querySelector(
    "#hourly-card-temp-5"
  );
  forecastHourFiveFahrenheit.innerHTML = `${forecastHourFive}°`;
  let forecastHourSixFahrenheit = document.querySelector("#hourly-card-temp-6");
  forecastHourSixFahrenheit.innerHTML = `${forecastHourSix}°`;
  let forecastHourSevenFahrenheit = document.querySelector(
    "#hourly-card-temp-7"
  );
  forecastHourSevenFahrenheit.innerHTML = `${forecastHourSeven}°`;
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
