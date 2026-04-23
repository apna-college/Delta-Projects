let searchbtn = document.querySelector('#searchBtn')

searchbtn.addEventListener('click', async () => {
    
    let cityname = document.querySelector("#cityInput").value

    console.log("cityname", cityname)

    let geocodes = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${cityname}`)

    console.log("geocodes" , geocodes.data.results[0].latitude)
    console.log("geocodes" , geocodes.data.results[0].longitude)

    let weather_response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${geocodes.data.results[0].latitude}&longitude=${geocodes.data.results[0].longitude}&current_weather=true`)

    console.log("weather_response" , weather_response.data);

    document.getElementById("cityName").innerText = cityname.toUpperCase();
    document.getElementById("temperature").innerText = weather_response.data.current_weather.temperature + "°C";
    document.getElementById("wind").innerText = weather_response.data.current_weather.windspeed  + "km/h";
    document.getElementById("date").innerText = weather_response.data.current_weather.time;

    
})