// Openweather api key
const openweatherAPIkey = '5b0aa28acc2c6d6a31d588c9cb20336a';

var searchBtn = document.querySelector('.search-btn');
var citySearchInput = document.querySelector('.search-city');

// Function to get forecast weather
getForcastData = function (location, lat, lon) {
    const openWeatherForcastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&lat=${lat}&lon=${lon}&appid=${openweatherAPIkey}&units=imperial`;
    fetch(openWeatherForcastURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            // Clear existing forecast data
            clearForecastData();

            // Loop through the forecast data
            for (let i = 0; i < data.list.length; i++) {
                const forecast = data.list[i];
                const wind = forecast.wind.speed;
                const humid = forecast.main.humidity;
                const temp = forecast.main.temp;
                const description = forecast.weather[0].description;
                const date = forecast.dt_txt;

                // Update forecast elements here
                updateForecastEl(wind, humid, temp, description, date, i);
            }
        });
}

// Function to clear existing forecast data
function clearForecastData() {
    // Clear existing forecast data
    document.querySelector('#forcast-weather').innerHTML = '';
}

// Function to update forecast elements
function updateForecastEl(wind, humid, temp, description, date, index) {
    // Create a new card for each forecast item
    const forecastCard = document.createElement('div');
    forecastCard.className = 'card';

    const forecastCardBody = document.createElement('div');
    forecastCardBody.className = 'card-body';

    // Add elements to the card
    const title = document.createElement('h5');
    title.className = 'card-title date';
    title.textContent = date;

    const tempElement = document.createElement('p');
    tempElement.textContent = `Temp: ${temp}`;

    const descElement = document.createElement('p');
    descElement.textContent = `Description: ${description}`;

    const windElement = document.createElement('p');
    windElement.textContent = `Wind Speed: ${wind}`;

    const humidElement = document.createElement('p');
    humidElement.textContent = `Humidity: ${humid}`;

    // Append elements to the card body
    forecastCardBody.appendChild(title);
    forecastCardBody.appendChild(tempElement);
    forecastCardBody.appendChild(descElement);
    forecastCardBody.appendChild(windElement);
    forecastCardBody.appendChild(humidElement);

    // Append the card body to the card
    forecastCard.appendChild(forecastCardBody);

    // Append the card to the forecast container
    document.querySelector('#forcast-weather').appendChild(forecastCard);
}

// Function to get city name from search and find Lat and Lon in data
getCityName = function () {
    const cityName = citySearchInput.value.trim();
    console.log(cityName);

    const openWeatherEndPointURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${openweatherAPIkey}&units=imperial`;

    // fetch weather data based on city search
    fetch(openWeatherEndPointURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            const location = data.name;
            const lat = data.coord.lat;
            const lon = data.coord.lon;
            getForcastData(location, lat, lon);
        })
}

// Event listener for the search button
searchBtn.addEventListener('click', getCityName);
