
// Get weather api key
const openweatherAPIkey = '5b0aa28acc2c6d6a31d588c9cb20336a';

// Other global variables  
const searchBtnElement = document.getElementById('#search-btn');
const searchFormElement = document.getElementById('#search-city');
const displayCurrentWeatherElement = document.getElementById('todays-weather');
const displayForcastWeatherElement = document.getElementById('todays-weather');
const displaySavedCitiesList = document.getElementById('saved-cities');

// Call API to get weather data 
function getWeatherData(city) {
    const openWeatherEndPointURL = '`https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=5b0aa28acc2c6d6a31d588c9cb20336a';
    fetch(openWeatherEndPointURL)
    .then(function (response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
    })

    displayWeatherData(data);
}

// Function add weather data to page and create weather card elements 

function displayWeatherData(data) {
    var temp = (data.main.temp);
    var windSpeed = data.wind.speed;
    var humid = data.humid.speed;


    var weatherCards = document.createElement('card');

    weatherCards.innerHTML = `
    `
}

console.log(getWeatherData('Denver'));

searchBtnElement.addEventListener('click', getWeatherData,)

