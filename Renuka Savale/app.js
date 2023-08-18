const inputBox = document.querySelector('.input-box');
const searchBtn = document.querySelector('#searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.querySelector('#humidity');
const wind_speed = document.querySelector('#wind-speed');
const pressure = document.getElementById('pressure');
const empty_input = document.querySelector(".empty-input");


const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

async function checkWeather(city) {
    const api_key = `cc93a660923d21ee0419f3e3c1ce3869`;
    const url =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`)
    .then(response => response.json());

    if(inputBox.value == ""){
        empty_input.style.display = "flex";
        weather_body.style.display= "none";
        location_not_found.style.display = "none";
        console.log("location empty");
        return;
    }

    if(weather_data.cod === '404'){
        location_not_found.style.display = "flex";
        weather_body.style.display= "none";
        console.log('error');
        return;
    }

    empty_input.style.display = "none";
    location_not_found.style.display = "none";
    weather_body.style.display= "flex";
    temperature.innerText =`${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}`;
    wind_speed.innerHTML = `${weather_data.wind.speed}`;
    pressure.innerText = `${weather_data.main.pressure}hPa`;

    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "/assets/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "/assets/clear.png";
            break;
        case 'Mist':
            weather_img.src = "/assets/mist.png";
            break;
        case 'Rain':
            weather_img.src = "/assets/rain.png";
            break;
        case 'Snow':
            weather_img.src = "/assets/snow.png";
            break;
        case 'Haze':
            weather_img.src = "/assets/haze.png";
            break;
    }
}
searchBtn.addEventListener('click', ()=>{
    console.log("Search icon clicked");
    checkWeather(inputBox.value);
})

inputBox.addEventListener("keyup", (event)=>{
    if(event.key == "Enter"){
        console.log("Enter key pressed");
        checkWeather(inputBox.value);
    }
})