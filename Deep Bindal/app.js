const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=delhi%20india';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3b5414bc6fmshda777bc6da9d3e7p118295jsnf6f50bf67488',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
window.addEventListener("load", getWeather("delhi"));
async function getWeather(query){
    const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}%20india`, options);
	const result = await response.json();
	display(result);
}

function display(res){
    let city = document.querySelector(".w-card-city");
    let temp = document.querySelector(".w-card-temp");
    let feelTemp = document.querySelector(".feel-temp");
    let infoIcon = document.querySelector(".w-card-icon");
    let time = document.querySelector(".w-card-time");
    let windSpeed = document.querySelector(".w-card-speed");
    let humidity = document.querySelector(".w-humidity");
    let vis = document.querySelector(".w-card-vis");

    city.innerText = res.location.name;
    temp.innerHTML = `<p>${res.current.temp_c}°<span>c</span></p>`;
    feelTemp.innerHTML = `<p>Feel's Like ${res.current.feelslike_c}°<span>c</span></p>`;
    // infoIcon.setAttribute("src", res.current.condition.icon);
    time.innerText = res.location.localtime;
    windSpeed.innerHTML = `${res.current.wind_kph} KM/H`;
    humidity.innerHTML = ` <p>${res.current.humidity} %</p>`;
    let str = res.current.condition.text;
    if(res.current.condition.text == "Mist"){
        infoIcon.src = "/images/mist.png"
    }
    if(res.current.condition.text == "Clear"){
        infoIcon.src = "/images/clear.png"
    }
    if(res.current.condition.text == "Cloudy"){
        infoIcon.src = "/images/clouds.png"
    }
    if(res.current.condition.text == "Cloudy"){
        infoIcon.src = "/images/clouds.png"
    }
    if(res.current.condition.text == "Light rain"){
        infoIcon.src = "/images/drizzle.png"
    }
    if(str.includes("rain")){
        infoIcon.src = "/images/rain.png"
    }
    if(str.includes("snow")){
        infoIcon.src = "/images/snow.png"
    }
    vis.innerHTML = `${res.current.vis_km} KM`
}

let btn = document.querySelector("#search-btn");
let inp = document.querySelector("#city-search");
btn.addEventListener("click", ()=>{
    let city = inp.value;
    getWeather(city);
})

let brand = document.querySelector(".navbar-brand");
brand.addEventListener("click", ()=>{
    location.reload();
})