let now = new Date();

function formatDate() {
  let date = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();
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

function convertToCelsius(event) {
  event.preventDefault();
  let tempCelsius = document.querySelector("#current-local-temp");
  tempCelsius.innerHTML = 18;
}
function convertToFahrenheit(event) {
  event.preventDefault();
  let tempFahrenheit = document.querySelector("#current-local-temp");
  tempFahrenheit.innerHTML = 65;
}

function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-text-input");
  let userCity = `${cityInput.value}`;
  let apiKey = "383f7ea53619c38b753cfeb116648163";
  let apiUrl = `api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayCurrent);
}

function displayCurrent(response) {
  let updateCurrentCity = document.querySelector("#local-city");
  updateCurrentCity.innerHTML = response.data.name;
  let updateCurrentTemp = document.querySelector("#current-local-temp");
  updateCurrentTemp.innerHTML = Math.round(response.data.main.temp);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

let celsiusConversionButton = document.querySelector("#btnradio2");
celsiusConversionButton.addEventListener("click", convertToCelsius);

let fahrenheitConversionButton = document.querySelector("#btnradio1");
fahrenheitConversionButton.addEventListener("click", convertToFahrenheit);
