let cityInput = document.querySelector(".input");
let search = document.querySelector(".search-icon");

let notFoundSection = document.querySelector(".not-found-section");
let SearchSection = document.querySelector(".search-section");
let WeatherInfoSection = document.querySelector(".weather-info");

let cityText = document.querySelector(".city-text");
let date = document.querySelector(".current-date");
let degree = document.querySelector(".deg");
let weatherCodn = document.querySelector(".weather-condn");
let humidityvalue = document.querySelector("#humidity-value");
let WindSpeed = document.querySelector("#Wind-value");
let WeatherImg = document.querySelector(".getImages");

let forecastBoxes = document.querySelectorAll(".forecast");

showDisplaySection(SearchSection);

search.addEventListener("click",()=>{
    if(cityInput.value.trim() != ""){

        weatherInfo(cityInput.value);

        // console.log(cityInput.value);
        cityInput.value=""  

    }
    
})

cityInput.addEventListener("keydown",(event)=>{
    if(event.key =="Enter" && cityInput.value.trim() != ""){

      weatherInfo(cityInput.value);

      cityInput.value="" 
    }
})


// 972495807cca4253aac163723250508


let apiKey = 'e2ad3d409d36196604edb85bbf7c2df1';
async function getData(weather,city){

   let url = `https://api.openweathermap.org/data/2.5/${weather}?q=${city}&appid=${apiKey}&units=metric`;

    try {                                                                                       
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
    
}



async function weatherInfo(city){

    const weatherData = await getData("weather",city);
    // console.log(weatherData.cod);
    if(weatherData.cod != 200){
        showDisplaySection(notFoundSection);
        // console.log("wrong input");
        return
    }else{
        console.log(weatherData);

        const {
            name:cityName,
            main:{humidity,temp},
            wind:{speed},
            weather:[{id,main}]
        } = weatherData;

        cityText.textContent = cityName;

        date.textContent = currentDate();

        degree.textContent = Math.round(temp)+ " °C";        
        weatherCodn.textContent = main;
        humidityvalue.textContent = humidity + " %";
        WindSpeed.textContent = speed + " M/s";

        WeatherImg.src = WeatherImgSrc(id);

        await forecastSectionInfo(city);


        showDisplaySection(WeatherInfoSection);
    }

}


function showDisplaySection(section){
    let sectionArr = [notFoundSection,SearchSection,WeatherInfoSection];
    sectionArr.forEach((show)=>{
        if(show===section){
            show.style.display = "block";
        }else{
            show.style.display = "none";
        }
    })
}


function currentDate(){
    let currDate = new Date().toDateString().split(' ').slice(0,3);
    // console.log(currDate);//['Thu', 'Aug', '07']
    let formatDate = `${currDate[0]}, ${currDate[2]} ${currDate[1]} `
    // console.log(formatDate);
    return formatDate;
}




function WeatherImgSrc(id){
    console.log(id);
    if(id<=232) return 'assets/thunderstorm.png';
    if(id<=321) return 'assets/drizzle.png';
    if(id<=531) return 'assets/rain.png';
    if(id<=622) return 'assets/snow.png';
    if(id<=781) return 'assets/atmosphere.png';
    if(id===800) return 'assets/sun.png';
    if(id===801) return 'assets/few-cloud.png';
    if(id===802||id===803||id===804) return 'assets/clouds.png';
    else return 'assets/few-cloud.png';
}



async function forecastSectionInfo(city){
    let forecastData = await getData('forecast',city);
    console.log(forecastData);

    let dailyForecast = forecastData.list.filter(forecst=>
        forecst.dt_txt.includes("12:00:00")
    ).slice(1);
    // console.log(dailyForecast);

    forecastBoxes.forEach((forecastCard,index)=>{
        if(index<dailyForecast.length){
            let forecast = dailyForecast[index];
            let forecastdate = new Date(forecast.dt_txt).toDateString().split(" ").slice(0,3);
            let formattedDate = `${forecastdate[2]} ${forecastdate[1]} `
            // console.log(formattedDate);
            forecastCard.querySelector(".forecast-date").textContent = formattedDate;


            let foreTemp = Math.round((dailyForecast[index].main.temp));
            // console.log(foreTemp);
            forecastCard.querySelector(".forecast-temp").textContent = `${foreTemp}°C`
        
        
            let forecastId = dailyForecast[index].weather[0].id;
            // console.log(forecastId);
            forecastCard.querySelector(".forecast-img").src = WeatherImgSrc(forecastId);
            
        }
    });
    

}





