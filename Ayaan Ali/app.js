const options = {
	headers: {
		"Transfer-Encoding": "chunked",
		"Connection": "keep-alive",
		"Vary": "Accept-Encoding",
		"CDN-PullZone": "93447",
		"CDN-Uid": "8fa3a04a-75d9-4707-8056-b7b33c8ac7fe",
		"CDN-RequestCountryCode": "GB",
		"Age": "0",
		"x-weatherapi-qpm-left": "5000000",
		"CDN-ProxyVer": "1.04",
		"CDN-RequestPullSuccess": "True",
		"CDN-RequestPullCode": "200",
		"CDN-CachedAt": "12/22/2023 18:34:32",
		"CDN-EdgeStorageId": "874",
		"CDN-Status": "200",
		"CDN-RequestId": "0c432c62200644cf3d57a07bb3c7b2ad",
		"CDN-Cache": "EXPIRED",
		"Cache-Control": "public, max-age=180",
		"Content-Type": "application/json",
		"Date": "Fri, 22 Dec 2023 18:34:32 GMT",
		"Server": "BunnyCDN-DE1-723",
		"Via": "1.1 varnish (Varnish/6.0)"
	  }
};

let inp = document.querySelector(".form-control");
let btn = document.querySelector("#search");
let city = document.querySelector("#name");
let currTemp = document.querySelector("#temp_c");
let feelsLike = document.querySelector("#feelslike_c");
let maxTemp = document.querySelector("#maxtemp_c");
let minTemp = document.querySelector("#mintemp_c");
let T = document.querySelector("#temp");
let img = document.querySelector("#conditionIcon");
let cT = document.querySelector("#conditionText");

function getWeather(c){
	try{
		fetch("https://api.weatherapi.com/v1/forecast.json?key=52af0bfc972c4147aab82637232212&q="+c+"&days=1&aqi=yes&alerts=no",options)
		.then((response)=>(response.json()))
		.then((data)=>{
			console.log(data);
			city.innerText = `Weather of ${data.location.name}, ${data.location.region}, ${data.location.country}`;
			T.innerHTML = `${data.current.temp_c}<small>°C</small>`;
	        currTemp.innerHTML = `${data.current.temp_c}<small>°C</small>`;
	        feelsLike.innerHTML = `${data.current.feelslike_c}<small>°C</small>`;
	        maxTemp.innerHTML = `${data.forecast.forecastday[0].day.maxtemp_c}<small>°C</small>`;
	        minTemp.innerHTML = `${data.forecast.forecastday[0].day.mintemp_c}<small>°C</small>`;
			cT.innerText = data.current.condition.text;
			document.querySelector("#humidity").innerHTML = `<b>Humidity:</b> ${data.current.humidity}`;
			document.querySelector("#pptn").innerHTML = `<b>Precipitation:</b> ${data.current.precip_mm} mm`;
			document.querySelector("#ws").innerHTML = `<b>Wind Speed:</b> ${data.current.wind_kph} km/hr`;
			document.querySelector("#wd").innerHTML = `<b>Wind Direction:</b> ${data.current.wind_dir}`;
			document.querySelector("#uv").innerHTML = `<b>UV:</b> ${data.current.uv}`;
			document.querySelector("#aqi").innerHTML = `<b>AQI:</b> ${data.current.air_quality.pm10}`;
			document.querySelector("#sunr").innerHTML = `<b>Sunrise:</b> ${data.forecast.forecastday[0].astro.sunrise}`;
			document.querySelector("#suns").innerHTML = `<b>Sunset:</b> ${data.forecast.forecastday[0].astro.sunset}`;
			document.querySelector("#moonr").innerHTML = `<b>Moonrise:</b> ${data.forecast.forecastday[0].astro.moonrise}`;
			document.querySelector("#moons").innerHTML = `<b>Moonset:</b> ${data.forecast.forecastday[0].astro.moonset}`;
			document.querySelector("#moonp").innerHTML = `<b>Moon Phase:</b> ${data.forecast.forecastday[0].astro.moon_phase}`;
		})
		.catch((e)=>{
			console.log(e);
		})
	}
	catch(err){
		console.log(err);
	}
}

btn.addEventListener("click",(event)=>{
	event.preventDefault();
	getWeather(inp.value);
})

function getaddWeather(c,i){
	try{
		fetch("https://api.weatherapi.com/v1/forecast.json?key=52af0bfc972c4147aab82637232212&q="+c+"&days=1&aqi=yes&alerts=no", options)
		.then((response)=>(response.json()))
		.then((data)=>{
			console.log(data);
			document.querySelector(`#${i}Condition`).innerText = data.current.condition.text;
			document.querySelector(`#${i}MaxTemp`).innerText = data.forecast.forecastday[0].day.maxtemp_c;
			document.querySelector(`#${i}MinTemp`).innerText = data.forecast.forecastday[0].day.mintemp_c;
			document.querySelector(`#${i}AQI`).innerText = data.current.air_quality.pm10;
			document.querySelector(`#${i}Hum`).innerText = data.current.humidity;
		})
		.catch((e)=>{
			console.log(e);
		})
	}
	catch(err){
		console.error(err);
	}
}
getaddWeather("New York","ny");
getaddWeather("London","lon");
getaddWeather("Paris","p");
getaddWeather("Dubai","db");
getaddWeather("Tokyo","tk");
getaddWeather("Bangkok","bkk");