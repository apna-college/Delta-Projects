const head = document.querySelector(".head");
window.addEventListener("scroll", function() {
    head.classList.toggle("sticky", this.window.scrollY > 0)
});
let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.nav-menu');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

const cityInput = document.querySelector(".city");
const searchButton = document.querySelector(".search2");

const API_KEY = "ecfffcd364412e648f1e5a8f7c8d3d1a";

const currentWeatherDiv = document.querySelector(".current");
const weatherCardsDiv = document.querySelector(".container");

const createWeatherCard = (cityName, weatherItem, index) => {
    if (index === 0) {
        return `   <h2>${cityName}</h2>
                    <div class="details">
                    <h4>Temperature: ${(weatherItem.main.temp - 273.15).toFixed(2)}°C</h4>
                    <h4>Wind: ${weatherItem.wind.speed} M/S</h4>
                    <h4>Humidity: ${weatherItem.main.humidity}%</h4>
                </div>
                <div class="img">
                    <img  src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png" alt="weather-icon">
                    <h4>${weatherItem.weather[0].description}</h4>
                </div>`; //tofixed() limits the numbers after decimals
    } else {
        return `<div class="card">
                    <h3>(${weatherItem.dt_txt.split(" ")[0]})</h3>
                    <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png" alt="weather-icon">
                    <h4>Temp: ${(weatherItem.main.temp - 273.15).toFixed(2)}°C</h4>
                    <h4>Wind: ${weatherItem.wind.speed} M/S</h4>
                    <h4>Humidity: ${weatherItem.main.humidity}%</h4>
                </div>`;
        //split khe jathe jathe ' ' nazar endi ote ote string khe split kndi wendi

    }
}

const WeatherDetails = (cityName, latitude, longitude) => {
    const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

    fetch(WEATHER_API_URL).then(response => response.json()).then(data => {
        const uniqueForecastDays = [];
        const fiveDaysForecast = data.list.filter(forecast => {
            const forecastDate = new Date(forecast.dt_txt).getDate();
            if (!uniqueForecastDays.includes(forecastDate)) {
                return uniqueForecastDays.push(forecastDate);
            }
        });
        cityInput.value = "";
        currentWeatherDiv.innerHTML = "";
        weatherCardsDiv.innerHTML = "";
        fiveDaysForecast.forEach((weatherItem, index) => {
            const html = createWeatherCard(cityName, weatherItem, index);
            if (index === 0) {
                currentWeatherDiv.insertAdjacentHTML("beforeend", html);
            } else {
                weatherCardsDiv.insertAdjacentHTML("beforeend", html);
            }
        });
    }).catch(() => {
        alert("An error occurred");
    });
}


const Coordinates = () => {
    const cityName = cityInput.value.trim();
    if (cityName === "") return;
    const API_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;
    fetch(API_URL).then(response => response.json()).then(data => {
        if (!data.length) return alert(`No coordinates found`);
        const { lat, lon, name } = data[0];
        WeatherDetails(name, lat, lon);
    }).catch(() => {
        alert("An error occurred");
    });
}
searchButton.addEventListener("click", Coordinates);