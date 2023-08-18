let input = document.querySelector("input");
let Blur = document.querySelector(".Blur");
let tblur = document.querySelector(".tBlur");
let card = document.querySelector(".card");
let button = document.querySelector("button");

let delhiTemp = document.querySelector(".dtemp");
let delhiHumidity = document.querySelector(".dhumidity");
let delhiWind = document.querySelector(".dwind");

let mumbaiTemp = document.querySelector(".mtemp");
let mumbaiHumidity = document.querySelector(".mhumidity");
let mumbaiWind = document.querySelector(".mwind");

let hydTemp = document.querySelector(".htemp");
let hydHumidity = document.querySelector(".hhumidity");
let hydWind = document.querySelector(".hwind");

let kolTemp = document.querySelector(".ktemp");
let kolHumidity = document.querySelector(".khumidity");
let kolWind = document.querySelector(".kwind");

let bengTemp = document.querySelector(".btemp");
let bengHumidity = document.querySelector(".bhumidity");
let bengWind = document.querySelector(".bwind");

let tempVal = document.querySelector(".card-title");
let cardHeading = document.querySelector("h4");
let url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
let li1 = document.querySelector(".feels_like");
let li2 = document.querySelector(".humidity");
let li3 = document.querySelector(".wind_speed");

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c60d20dae4mshe18ee98aa329ed8p184bc1jsn915a498436aa',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

async function wtherData() {
    try {
        card.classList.add("Blur");
        let url2 = url + input.value;
        cardHeading.innerText = `Weather for ${input.value}`;
        const response = await fetch(url2, options);
        const result = await response.json();
        tempVal.innerHTML = `${result.temp} &degC`;
        li1.innerHTML = `Feels like: ${result.feels_like} &degC`;
        li2.innerText = `Humidity: ${result.humidity}%`;
        li3.innerText = `Wind speed: ${Math.floor(result.wind_speed * 3.6)} Km/h`;
        card.classList.remove("Blur");
    } catch (error) {
        console.error(error);
    }
}

async function wther(event) {
    event.preventDefault();
    wtherData();
}

async function pcDelhi() {
    try {
        let url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
        const response = await fetch(url, options);
        const result = await response.json();
        delhiTemp.innerHTML = `${result.temp} &degC`;
        delhiHumidity.innerHTML = `${result.humidity}%`;
        delhiWind.innerText = `${Math.floor(result.wind_speed * 3.6)} Km/h`;
    } catch (error) {
        console.error(error);
    }
}

async function pcMumbai() {
    try {
        let url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai';
        const response = await fetch(url, options);
        const result = await response.json();
        mumbaiTemp.innerHTML = `${result.temp} &degC`;
        mumbaiHumidity.innerHTML = `${result.humidity}%`;
        mumbaiWind.innerText = `${Math.floor(result.wind_speed * 3.6)} Km/h`;
    } catch (error) {
        console.error(error);
    }
}

async function pcHyderabad() {
    try {
        let url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad';
        const response = await fetch(url, options);
        const result = await response.json();
        hydTemp.innerHTML = `${result.temp} &degC`;
        hydHumidity.innerHTML = `${result.humidity}%`;
        hydWind.innerText = `${Math.floor(result.wind_speed * 3.6)} Km/h`;
    } catch (error) {
        console.error(error);
    }
}

async function pcKolkata() {
    try {
        let url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata';
        const response = await fetch(url, options);
        const result = await response.json();
        kolTemp.innerHTML = `${result.temp} &degC`;
        kolHumidity.innerHTML = `${result.humidity}%`;
        kolWind.innerText = `${Math.floor(result.wind_speed * 3.6)} Km/h`;
    } catch (error) {
        console.error(error);
    }
}

async function pcBengaluru() {
    try {
        let url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bengaluru';
        const response = await fetch(url, options);
        const result = await response.json();
        bengTemp.innerHTML = `${result.temp} &degC`;
        bengHumidity.innerHTML = `${result.humidity}%`;
        bengWind.innerText = `${Math.floor(result.wind_speed * 3.6)} Km/h`;
    } catch (error) {
        console.error(error);
    }
}

wtherData();

async function tData() {
    tblur.classList.add("Blur");
    pcDelhi();
    pcMumbai();
    pcHyderabad();
    pcKolkata();
    await pcBengaluru();
    tblur.classList.remove("Blur");
}
tData();

button.addEventListener("click", wther);