const APIkey = "0cdf94539eb1afa2b5bcceb5770dfdfb";
const input = document.querySelector("input");


let btn = document.querySelector("button");

let func =  async ()=>{
    let temp = await getWeather(input.value);
    let video = document.querySelector("video");
    let source = document.querySelector("source");
    console.log(temp.data.weather[0].id);
    if(temp.data.weather[0].id>= 200 && temp.data.weather[0].id<=232){//thunderstorm
        source.src = "./thunderstorm.mp4";
        video.load();
        let main = document.querySelector("main");
        main.style.color = "black";
    }else if(temp.data.weather[0].id>= 300 && temp.data.weather[0].id<=321){//drizzle
        source.src = "./rain.mp4";
        video.load();
        let main = document.querySelector("main");
        main.style.color = "black";
    }
    else if(temp.data.weather[0].id>= 500 && temp.data.weather[0].id<=531){//rain
        source.src = "./rain.mp4";
        video.load();
        let main = document.querySelector("main");
        main.style.color = "black";
    }
    else if(temp.data.weather[0].id>= 600 && temp.data.weather[0].id<=622){//snow
        source.src = "./video_of_snowfall (Original).mp4";
        source.type = "video/mp4";
        video.load();
        let main = document.querySelector("main");
        main.style.color = "black";
    }
    else if(temp.data.weather[0].id>= 701 && temp.data.weather[0].id<=780){//atmosphere
        source.src = "./storm-16160.mp4";
        source.type = "video/mp4";
        video.load();
        let main = document.querySelector("main");
        main.style.color = "white";
    }
    else if(temp.data.weather[0].id == 800){
        source.src = "./clear.mp4"
        video.load();
        let main = document.querySelector("main");
        main.style.color = "black";
    }else{
        source.src = "./video (2160p).mp4"
        video.load();
        let main = document.querySelector("main");
        main.style.color = "black";
    }
    let currTemp = document.querySelector(".temp");
    currTemp.innerText = `${Math.floor(temp.data.main.temp-273.15)}°C`;

    let currCity = document.querySelector(".city");
    currCity.innerText = temp.data.name;

    let feelsLike = document.querySelector(".feelsLike");
    feelsLike.innerText = `Feels like ${Math.floor(temp.data.main.feels_like-273.15)}°C`;
    feelsLike.style.fontSize = "1rem";
    let tempDetails = document.querySelector(".temp-details");
    tempDetails.appendChild(feelsLike);
    
    let desc = document.querySelector(".desc");
    desc.innerText = temp.data.weather[0].description;
    desc.style.fontSize = "1rem";

    let humidity = document.querySelector(".humidity");
    humidity.innerText = `Humidity: ${temp.data.main.humidity}%`;

    let pressure = document.querySelector(".pressure");
    pressure.innerText = `Pressure: ${temp.data.main.pressure}mb`;

    let maxTemp = document.querySelector(".max_temp");
    maxTemp.innerText = `Maximum Temperature: ${Math.floor(temp.data.main.temp_max-273.15)}°C`;

    let minTemp = document.querySelector(".min_temp");
    minTemp.innerText = `Minimum Temperature: ${Math.floor(temp.data.main.temp_min-273.15)}°C`;

    let windSpeed = document.querySelector(".wind_speed");
    windSpeed.innerText = `Wind Speed: ${Math.floor(temp.data.wind.speed)}m/s`;

    let windDeg = document.querySelector(".wind_deg");
    windDeg.innerText = `Wind Degree: ${Math.floor(temp.data.wind.deg)}°`;


    let noOfClouds = document.querySelector(".no_of_clouds");
    noOfClouds.innerText = `Number of Clouds: ${Math.floor(temp.data.clouds.all)}`;

    let cCode = document.querySelector(".country_code");
    cCode.innerText = `Country Code: ${(temp.data.sys.country)}`;




};
btn.addEventListener("click", func);

input.addEventListener("keypress",(event) => {//callback
    if (event.key === "Enter") { // Checking if the pressed key is the Enter key
        // Call your function here
        func();
    }
});
async function getWeather(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;
    try{
        let info = await axios.get(url);
        console.log(info);
        return info;
    }catch{
        console.log("sorry");
    }
}