const app = document.querySelector('.weather-app'); 
const temp = document.querySelector('.temp');
const dateOutput = document.querySelector('.date');
const timeOutput = document.querySelector('.time');
const conditionOutput = document.querySelector('.condition');
const nameOutput = document.querySelector('.name');
const icon = document.querySelector('.icon');
const cloudOutput = document.querySelector('.cloud');
const humidityOutput = document.querySelector('.humidity');
const windOutput = document.querySelector('.wind');
const form = document.getElementById('locationInput');
const search = document.querySelector('.search');
const btn = document.querySelector('.submit');
const cities = document.querySelectorAll('.city');

let cityInput = "Ahmedabad";

cities.forEach((city) => {
    city.addEventListener('click', (e) => {
        cityInput = e.target.innerHTML;
        fetchWeatherData();
        app.style.opacity = "0";
    });
})

form.addEventListener('submit', (e) => {
    if(search.value.length == 0) {
        alert("Please type in a city name");
    } else {
        cityInput = search.value;
        fetchWeatherData();
        search.value = "";
        app.style.opacity = "0";
    }

    e.preventDefault();
});

function dayOfTheWeek(day, month, year) {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thurday",
        "Friday",
        "Saturday"
    ];
    return weekday[new Date(`${day}/${month}/${year}`).getDay()];
};

function fetchWeatherData() {
    fetch(`https://api.weatherapi.com/v1/current.json?q=${cityInput}&key=c3415d10242b46d48b0125021240202`)

    .then(response => response.json())
    .then(data => {
        console.log(data);
        temp.innerHTML = data.current.temp_c + "&#176;";
        conditionOutput.innerHTML = data.current.condition.text;

        const date = data.location.localtime;
        const y = parseInt(date.substr(0, 4));
        const m = parseInt(date.substr(5, 2));
        const d = parseInt(date.substr(8, 2));
        const time = date.substr(11); 

        dateOutput.innerHTML = `${dayOfTheWeek(d, m, y)} ${d}, ${m} ${y}`;
        timeOutput.innerHTML = time;
        nameOutput.innerHTML = data.location.name;
        const iconId = data.current.condition.icon.substr(
            "//cdn.weatherapi.com/weather/64x64/".length
        );  
        icon.src = "./icons/" + iconId;


        cloudOutput.innerHTML = data.current.cloud + "%";
        humidityOutput.innerHTML = data.current.humidity + "%";
        windOutput.innerHTML = data.current.wind_kph + "km/h";

        let timeOfDay = "day";
        const code = data.current.condition.code;

        if(!data.current.is_day){
            timeOfDay = "night";
        }

        if(code == 1000) {
            app.style.backgroundImage = `url(./images/${timeOfDay}/clear.jpg)`;
            btn.style.background = "#e5ba92";
            if(timeOfDay == "night") {
                btn.style.background = "#181e27";
            }
        }

        else if (
            code == 1003 ||
            code == 1006 ||
            code == 1009 ||
            code == 1030 ||
            code == 1069 ||
            code == 1087 ||
            code == 1135 ||
            code == 1273 ||
            code == 1276 ||
            code == 1279 ||
            code == 1282
        ) {
            app.style.backgroundImage = `url(./images/${timeOfDay}/cloudy.jpg)`;
            btn.style.background = "#fa6d1b";
            if(timeOfDay == "night") {
                btn.style.background = "#181e27";
            }
            // rain
        } else if (
            code == 1063 ||
            code == 1069 ||
            code == 1072 ||
            code == 1150 ||
            code == 1153 ||
            code == 1180 ||
            code == 1183 ||
            code == 1186 ||
            code == 1189 ||
            code == 1192 ||
            code == 1195 ||
            code == 1204 ||
            code == 1207 ||
            code == 1240 ||
            code == 1243 ||
            code == 1246 ||
            code == 1249 ||
            code == 1252
        ) {
            app.style.backgroundImage = `url(./images/${timeOfDay}/rainy.jpg)`;
            btn.style.background = "#647d75";
            if(timeOfDay == "night") {
                btn.style.background = "#325c80";
            }
            // snow
        } else {
            app.style.backgroundImage = `url(./images/${timeOfDay}/snowy.jpg)`;
            btn.style.background = "#4d72aa";
            if(timeOfDay == "night") {
                btn.style.background = "#1b1b1b";
            }
        }

        app.style.opacity = "1";
    })

    .catch(() => {
        alert("City not found, please try again");
        app.style.opacity = "1";
    });
}

fetchWeatherData();

app.style.opacity = "1";