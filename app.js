let url="https://api.openweathermap.org/data/2.5/weather?units=metric&appid=76bd1fce4d33d3d2759bd39e0b96faad&q=";
let inp=document.querySelector("#inp");
let weatherIcon=document.querySelector(".weather-icon");
let btn=document.querySelector("#ans");

btn.addEventListener("click",()=> {
    checkWeather(inp.value);
        
})
async function checkWeather(city) {
    
        let res=await fetch(url+city);
    
        
        
        if(res.status==404) {
            document.querySelector(".error").style.display="block";
            document.querySelector(".weather").style.display="none";
                                                                                                                        
        } else {                                                                                                 
            let data=await res.json();
            console.log(data);
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed +" m/s";
        
        if (data.weather[0].main=="Clouds") {
          weatherIcon.src="images/clouds.png";    
        } else if (data.weather[0].main=="Clear") {
          weatherIcon.src="images/clear.png";  
        } else if(data.weather[0].main=="Rain") {
          weatherIcon.src="images/rain.png"  
        } else if(data.weather[0].main=="Drizzle") {
            weatherIcon.src="images/drizzle.png"  
        } else if(data.weather[0].main=="Snow") {
            weatherIcon.src="images/snow.png"  
        } else if(data.weather[0].main=="Mist") {
            weatherIcon.src="images/mist.png"  
        }
       
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
        }
    }
  
