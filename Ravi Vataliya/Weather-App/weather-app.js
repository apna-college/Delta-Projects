// https://api.openweathermap.org/data/2.5/weather?q=germany&appid=e580d50e47b08375f04c37fe66803339&units=metric

const apikey = "e580d50e47b08375f04c37fe66803339";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=Bangalore";

let btn = document.querySelector("button");
let input = document.querySelector("input");
let weathericon = document.querySelector(".weather-icon");
let body = document.querySelector("body");
let h1 = document.querySelector("h1.temp");
let h2 = document.querySelector("h2.city");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");

function events() {
    console.log("btn is click!");
    let inpValu = input.value;
    console.log(inpValu);
    // apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=+inpValu";
    // apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric" + `&q=${inpValu}`;
    let city = apiUrl.replace("Bangalore", `${inpValu}`);
    // apiUrl = apiUrl + `&q=${inpValu}`;
    console.log(city);
    checkWether(city);
}

btn.addEventListener("click", () => {
   events(); 
});

body.addEventListener("keypress", (event) => {
    // console.log(event);
    if(event.key == "Enter") {
        events(); 
    }
 });

async function checkWether(city) {
    const response = await fetch(city + `&appid=${apikey}`);
    console.log(response);
    var data = await response.json();
    console.log(data);

    let icon = data.weather[0].main;
    console.log(icon);
    checkWethericon(icon);

    let cityname = data.name;
    console.log(cityname);
    cityName(cityname);

    let tempinC = data.main.temp;
    console.log(tempinC);
    tempofcity(tempinC);

    let humiditycity = data.main.humidity;
    console.log(humiditycity);
    humidityofcity(humiditycity);

    let windspeed = data.wind.speed;
    console.log(windspeed);
    windspeedofcity(windspeed);

    return data;
}

function checkWethericon(icon) {
    if(icon == "Clouds"){
        weathericon.setAttribute("src", "images/clouds.png");
    }
    else if(icon == "Clear"){
        weathericon.setAttribute("src", "images/clear.png");
    }
    else if(icon == "Drizzle"){
        weathericon.setAttribute("src", "images/drizzle.png");
    }
    else if(icon == "Mist"){
        weathericon.setAttribute("src", "images/mist.png");
    }
    else if(icon == "Smoke"){
        weathericon.setAttribute("src", "images/mist.png");
    }
    else if(icon == "Rain"){
        weathericon.setAttribute("src", "images/rain.png");
    }
    else if(icon == "Snow"){
        weathericon.setAttribute("src", "images/snow.png");
    }
}

function cityName(name) {
    h2.innerText = name;    
}

function tempofcity(temp) {
    h1.innerText = `${Math.ceil(temp)}°C`;
}

function humidityofcity(humiditycity) {
    humidity.innerText = `${humiditycity}%`;
}

function windspeedofcity(windspeed) {
    wind.innerText = Math.ceil(`${windspeed*3.6}`) + " " + "km/h";
}


// checkWether();