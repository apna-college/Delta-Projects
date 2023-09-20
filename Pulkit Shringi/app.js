const searchButton = document.querySelector(".search-btn");
const locationButton = document.querySelector(".location-btn");
const cityInput = document.querySelector(".city-input");
const weatherCards = document.querySelector(".weather-cards");
const currentWeatherCard = document.querySelector(".current-weather");
const API_KEY ="e60f5cb54447854537c19bc5c0fa1688";
const loadingIcon = document.querySelectorAll("i");
const celc = document.querySelector(".celcius");
const fahren = document.querySelector(".fahren");
const body = document.querySelector("body");
const headcolor = document.querySelectorAll(".bgheadingcolor");
let city="";
let flag = 1;
let flag2=1;
headcolor[2].style.color="white";
let defaultImage = new Image();
defaultImage.src="./images/plain.jpeg";
defaultImage.onload=()=>{
    body.style.backgroundImage=`url(${defaultImage.src})`;
}


const addCurrWeather = (weatherInfo)=>{
    if(flag==1){
    return `<div class="details">
    <h2>${city}</h2>
    <h4>${(weatherInfo.main.temp - 273.15).toFixed(2)}°C</h4>
    <h4>${weatherInfo.wind.speed} M/S</h4>
    <h4>Humidity: ${weatherInfo.main.humidity}%</h4>
</div>
<div class="icon">
    <img src="https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png" alt="weather-icon">
    <h4>${weatherInfo.weather[0].description}</h4>
</div>`
    }
    else if(flag==0){
        return `<div class="details">
    <h2>${city}</h2>
    <h4>${((weatherInfo.main.temp - 273.15)*1.8+32).toFixed(2)}°F</h4>
    <h4>${weatherInfo.wind.speed} M/S</h4>
    <h4>Humidity: ${weatherInfo.main.humidity}%</h4>
</div>
<div class="icon">
    <img src="https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png" alt="weather-icon">
    <h4>${weatherInfo.weather[0].description}</h4>
</div>`
    }
}
const addWeatherDetails = (weatherInfo)=>{
    if(flag==1){
return `<li class="card">
<h3>(${weatherInfo.dt_txt.split(" ")[0].split("-")[2]+"/"+ weatherInfo.dt_txt.split(" ")[0].split("-")[1]+"/"+weatherInfo.dt_txt.split(" ")[0].split("-")[0]})</h3>
<img src="https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png" alt="weather-icon">
<h4>Temperature : ${(weatherInfo.main.temp - 273.15).toFixed(2)}°C</h4>
<h4>Wind: ${weatherInfo.wind.speed} M/S</h4>
<h4>Humidity: ${weatherInfo.main.humidity}%</h4>
</li>` 
}
else if(flag==0){
    return `<li class="card">
<h3>(${weatherInfo.dt_txt.split(" ")[0].split("-")[2]+"/"+ weatherInfo.dt_txt.split(" ")[0].split("-")[1]+"/"+weatherInfo.dt_txt.split(" ")[0].split("-")[0]})</h3>
<img src="https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png" alt="weather-icon">
<h4>Temperature : ${((weatherInfo.main.temp - 273.15)*1.8+32).toFixed(2)}°F</h4>
<h4>Wind: ${weatherInfo.wind.speed} M/S</h4>
<h4>Humidity: ${weatherInfo.main.humidity}%</h4>
</li>` 
}
}


const getCityCoordinates = () =>{
    if(cityInput.value!=""){
    city=cityInput.value.trim();
    }   
    if(cityInput.value=="" && city==""){
    alert("City name cannot be empty");
        return;
    }
    loadingIcon[0].setAttribute("class","fa fa-spinner fa-spin");
const cityName = cityInput.value.trim();
if(flag2==0){
if(!cityName) {alert("Error! CityName cannot be empty.");
loadingIcon[0].setAttribute("class","");
    return;
}
}


const GEOCODING_API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;
fetch(GEOCODING_API_URL)
.then((res)=> res.json()).then(data=>{
    if(data.length==0){
       return alert(`Your City Name : ${city} is not valid.`);
    }
    else{
    const uniqueForecastDays = [];
    const uniqueForecastHours = [];
const fiveDaysForecast = data.list.filter(forecast => {
const forecastDate = new Date (forecast.dt_txt).getDate();
const forecastTime = new Date (forecast.dt_txt).getHours();
if(uniqueForecastHours[0]===undefined)
    uniqueForecastHours[0] = forecastTime;
if(!uniqueForecastDays.includes(forecastDate)&& forecastTime==uniqueForecastHours[0]){
    uniqueForecastHours.push(forecastTime);
return uniqueForecastDays.push(forecastDate);
}
});
cityInput.value = "";
cityInput.setAttribute("placeholder","Enter another city");
weatherCards.innerHTML="";
currentWeatherCard.innerHTML="";
fiveDaysForecast.forEach((weatherInfo,index) => {
    if(index==0){
        let image = new Image();
        if(weatherInfo.weather[0].main==="Clouds"){
            image.src="./images/clouds.jpeg"
            image.onload=()=>{
                body.style.backgroundImage=`url(${image.src})`;
                headcolor[0].style.color="black";
                headcolor[1].style.color="black";
                headcolor[2].style.color="white";
            }
        }
        else if(weatherInfo.weather[0].main==="Snow"){
            image.src="./images/snow.jpeg";
            image.onload=()=>{
        body.style.backgroundImage=`url(${image.src})`;
        headcolor[0].style.color="white";
        headcolor[1].style.color="white";
        headcolor[2].style.color="black";
            };
        }
        else if(weatherInfo.weather[0].main==="Rain"){
            image.src="./images/rain.jpeg";
            image.onload=()=>{
        body.style.backgroundImage=`url(${image.src})`;
        headcolor[0].style.color="white";
        headcolor[1].style.color="white";
        headcolor[2].style.color="white";
        }
    }
        else if(weatherInfo.weather[0].main==="Thunderstorm"){
            image.src="./images/thunderstorm.jpeg";
            image.onload=()=>{
        body.style.backgroundImage=`url(${image.src})`;
        headcolor[0].style.color="white";
        headcolor[1].style.color="white";
        headcolor[2].style.color="black";
        }
    }
        else if(weatherInfo.weather[0].main==="clear sky")
        {
            image.src="./images/sunny.jpeg";
            image.onload=()=>{
        body.style.backgroundImage=`url(${image.src})`;
        headcolor[0].style.color="white";
        headcolor[1].style.color="black";
        headcolor[2].style.color="white";
        }
    }
    currentWeatherCard.insertAdjacentHTML("afterbegin",addCurrWeather(weatherInfo));
    }
    weatherCards.insertAdjacentHTML("beforeend",addWeatherDetails(weatherInfo));
});
loadingIcon[0].setAttribute("class","");
loadingIcon[1].setAttribute("class","");
    }
})
.catch(()=>{
    alert("Please enter the correct city name.");
    cityInput.value="";
    loadingIcon[0].setAttribute("class","");
    loadingIcon[1].setAttribute("class","");
});
}
const getUserCoordinates = () => { 
    cityInput.value="";
    loadingIcon[1].setAttribute("class","fa fa-spinner fa-spin");
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const { latitude , longitude } = position.coords;
             const Reverse_Geocoding_URL = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`;
             fetch(Reverse_Geocoding_URL)
             .then((res)=>{
                return res.json();
             })
             .then((data)=>{
               cityInput.value=data[0].name;
                getCityCoordinates();
             })
             .catch(()=>{
                alert("An error occured while fetching the city!");
             })
        },
        (error) => {
           if(error.code == 1){
            alert("Geolocation request denied. Please reset location permission to grant access again.");
           }
        }
    )
};
const celcselect = ()=>{
    celc.style.color="gold";
    fahren.style.color="black";
    flag = 1;
    flag2=1;
    getCityCoordinates();
};
const fahrenselect = ()=>{
    fahren.style.color="gold";
    celc.style.color="black";
    flag = 0;
    flag2=1;
    getCityCoordinates();
};
celc.addEventListener("click",celcselect);
fahren.addEventListener("click",fahrenselect);
locationButton.addEventListener("click",getUserCoordinates);
searchButton.addEventListener("click",()=>{flag2=0});
searchButton.addEventListener("click",getCityCoordinates);
cityInput.addEventListener("keyup",(keyname)=>{
    if(keyname.key=="Enter")
        getCityCoordinates();
})
