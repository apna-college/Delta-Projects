
 const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'eef8c2bc6emsh61d9e5b3ae13e18p1ef243jsn8d0c4f8899e6',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityName.innerHTML = city

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {



			console.log(response)



			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_degrees.innerHTML = response.wind_degrees
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			








		})
		.catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Delhi")

const getWeather1 = (Boston) => {
	boston1.innerHTML = Boston
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+Boston, options)
		.then(response => response.json())
		.then((response) => {



			console.log(response)
			cloud_pct2.innerHTML = response.cloud_pct
			feels_like2.innerHTML = response.feels_like
			humidity3.innerHTML = response.humidity
			max_temp2.innerHTML = response.max_temp
			min_temp2.innerHTML = response.min_temp
			temp3.innerHTML = response.temp
			wind_degrees2.innerHTML = response.wind_degrees
			wind_speed3.innerHTML = response.wind_speed
		})
		.catch(err => console.error(err));
}
getWeather1("Boston")




const getWeather2 = (Shanghai) => {
	shanghai1.innerHTML = Shanghai
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+Shanghai, options)
		.then(response => response.json())
		.then((response) => {



			console.log(response)
			cloud_pct3.innerHTML = response.cloud_pct
			feels_like3.innerHTML = response.feels_like
			humidity4.innerHTML = response.humidity
			max_temp3.innerHTML = response.max_temp
			min_temp3.innerHTML = response.min_temp
			temp4.innerHTML = response.temp
			wind_degrees3.innerHTML = response.wind_degrees
			wind_speed4.innerHTML = response.wind_speed
		})
		.catch(err => console.error(err));
}
getWeather2("Shanghai")






const getWeather3 = (London) => {
	london1.innerHTML = London
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+London,options)
		.then(response => response.json())
		.then((response) => {



			console.log(response)
			cloud_pct4.innerHTML = response.cloud_pct
			feels_like4.innerHTML = response.feels_like
			humidity5.innerHTML = response.humidity
			max_temp4.innerHTML = response.max_temp
			min_temp4.innerHTML = response.min_temp
			temp5.innerHTML = response.temp
			wind_degrees4.innerHTML = response.wind_degrees
			wind_speed5.innerHTML = response.wind_speed
		})
		.catch(err => console.error(err));
}
getWeather3("London")






const getWeather4 = (Mumbai) => {
	mumbai1.innerHTML = Mumbai
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+Mumbai,options)
		.then(response => response.json())
		.then((response) => {



			console.log(response)
			cloud_pct5.innerHTML = response.cloud_pct
			feels_like5.innerHTML = response.feels_like
			humidity6.innerHTML = response.humidity
			max_temp5.innerHTML = response.max_temp
			min_temp5.innerHTML = response.min_temp
			temp6.innerHTML = response.temp
			wind_degrees5.innerHTML = response.wind_degrees
			wind_speed6.innerHTML = response.wind_speed
		})
		.catch(err => console.error(err));
}
getWeather4("Mumbai")





