
//Openweather api key
const openweatherAPIkey = '5b0aa28acc2c6d6a31d588c9cb20336a';

var searchBtn = document.querySelector('.search-btn');
var citySearchInput = document.querySelector('.search-city');


// Function get forcast weather 
getForcastData = function(location, lat, lon){
    const openWeatherForcastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${openweatherAPIkey}`;
    fetch(openWeatherForcastURL)
    .then(function (response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
    })

    }
console.log(getForcastData);


// Funciton to get city name from search and find Lat and Lon in data 
getCityName = function(){
    cityName = citySearchInput.value.trim();
    console.log(cityName);

    const openWeatherEndPointURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${openweatherAPIkey}`;

    // fetch weather data based on city search 
    fetch(openWeatherEndPointURL)
    .then(function (response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
     const location = data.name;
     const lat = data.coord.lat;
     const lon = data.coord.lon;
     getForcastData(location, lat, lon);
    })




    // var savedCitiesList = "<li>" + cityName + "</li>";
   // document.querySelectorAll('ul').appendChild(savedCitiesList);
}

searchBtn.addEventListener('click', getCityName);

// console.log(getCityName())

