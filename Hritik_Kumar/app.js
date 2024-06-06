const h = "https://api.openweathermap.org/data/2.5/weather?q=germany&appid=3269c9f50a3a9041ec0a0746aa0d1759";
const apikey = "3269c9f50a3a9041ec0a0746aa0d1759";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
   
    const response = await fetch(apiurl + city + `&appid=${apikey}` );
    let data = await response.json();
    console.log(data);

   if(data.cod==404){
       console.log("hrtk");
       document.querySelector(".city").innerHTML = "invalid city name!";
     document.querySelector(".temp").innerHTML = "error";
     document.querySelector(".humi").innerHTML = "xx";
     document.querySelector(".wind-speed").innerHTML = "xx";
     weatherIcon.setAttribute("src", "./Asset/404.jpg");
   }else{
     // input from api
     document.querySelector(".city").innerHTML = data.name;
     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
     document.querySelector(".humi").innerHTML = data.main.humidity +"%";
     document.querySelector(".wind-speed").innerHTML = data.wind.speed + " km/h";
     
     // logo of weather
     if (data.weather[0].main === "Clouds") {
         weatherIcon.setAttribute("src", "./Asset/clear.png");
     } else if (data.weather[0].main === "Clear") {
         weatherIcon.setAttribute("src", "./Asset/clouds.png");
     } else if (data.weather[0].main === "Rain") {
         weatherIcon.setAttribute("src", "./Asset/rain.png");
     } else if (data.weather[0].main === "Drizzle") {
         weatherIcon.setAttribute("src", "./Asset/drizzle.png");
     } else if (data.weather[0].main === "Mist") {
         weatherIcon.setAttribute("src", "./Asset/mist.png");
     }
   }

}

searchBtn.addEventListener("click",()=>{
checkWeather(searchInput.value);

})

