const apiKey = "90234d0deaa87b2e3e74ff129fe88dd5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let inp = document.querySelector(".search input");
let btn = document.querySelector(".search button");
let weather = document.querySelector(".weather-icon");

async function checkWeather(city){
    try{
        const res = await axios.get(apiUrl+ city +`&appid=${apiKey}`);
    
        document.querySelector(".city").innerHTML = res.data.name;
        document.querySelector(".temp").innerHTML = Math.round(res.data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = res.data.main.humidity+" %";
        document.querySelector(".wind").innerHTML = res.data.wind.speed+" Km/hr";

        if(res.data.weather[0].main == "Clouds"){
            weather.src = "Images/clouds.png";
        }
        else if(res.data.weather[0].main == "Clear"){
            weather.src = "Images/clear.png";
        }
        else if(res.data.weather[0].main == "Rain"){
            weather.src = "Images/rain.png";
        }
        else if(res.data.weather[0].main == "Drizzle"){
            weather.src = "Images/drizzle.png";
        }
        else if(res.data.weather[0].main == "Mist"){
            weather.src = "Images/mist.png";
        }
    }
    catch(e){
        inp.value = "Invalid City Name";
    }
    
}


btn.addEventListener("click",() => {
    checkWeather(inp.value);
});