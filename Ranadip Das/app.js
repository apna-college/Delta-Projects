
let weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
let apiKey = "&appid=06df933933cbb343dc32767e32d1a864&units=metric"

let inputPlace = document.querySelector(".city_name_input");
let searchBtn = document.querySelector(".search-btn");

let cityName = document.querySelector(".city-name-show");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let weatherIcon = document.querySelector(".weather-icon");
let errorMsg = document.querySelector(".error");

searchBtn.addEventListener("click" , ()=>{
    if(inputPlace.value == ""){
        errorMsg.style.display = "block"
        errorMsg.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>City name required`
        setTimeout(()=>{
            errorMsg.style.display = "none"
        },1500)
    }else{
        getWeatherData();
    }
    
})
inputPlace.addEventListener("keypress" , (event)=>{
    if(event.code == "Enter"){
        if(inputPlace.value == ""){
            errorMsg.style.display = "block"
            errorMsg.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>City name required`
            setTimeout(()=>{
                errorMsg.style.display = "none"
            },1500)
        }else{
            getWeatherData();
        }
    }
})

async function getWeatherData(){
    // let res = await axios.get(`${weatherUrl+inputPlace.value+apiKey}`);
    let response = await fetch(`${weatherUrl+inputPlace.value+apiKey}`);
    let res = await response.json();
    let data = res;
    console.log(res) 

    if(response.status == 404){
        errorMsg.style.display = "block"
        errorMsg.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>Invalid city name`
        inputPlace.value = "";
        cityName.innerHTML = "Location"
        temp.innerHTML = "°c";
        humidity.innerHTML = "%";
        wind.innerHTML = "km/h";
        setTimeout(()=>{
            errorMsg.style.display = "none"
        },1500)
    }else{
        errorMsg.style.display = "none"
        inputPlace.value = "";
        cityName.innerHTML = data.name;
        temp.innerHTML = Math.round(data.main.temp) + "°c";
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.setAttribute("src", "images/clouds.png")
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.setAttribute("src", "images/clear.png")
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.setAttribute("src", "images/drizzle.png")
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.setAttribute("src", "images/mist.png")
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.setAttribute("src", "images/snow.png")
        }
    }

    
}