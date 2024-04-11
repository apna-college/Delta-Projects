const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6e0f12a205msh286b6ae08806954p16e055jsne3ef622dbb36",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = async(city) => {
  cityName.innerHTML = city;
  await fetch(url + city, options)
    .then((response) => response.json())
    .then((response) => {
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed2.innerHTML = response.wind_speed;
      sunrise.innerHTML = convert(response.sunrise);
      sunset.innerHTML = convert(response.sunset);

      console.log(response);
    })
    .catch((err) => console.log(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Bangalore");

const Shanghai = async() => {
  await fetch(url+"Shanghai", options)
    .then((response) => response.json())
    .then((response) => {
		console.log(response);
      shang_feels_like.innerHTML=response.feels_like;
      shang_humidity.innerHTML=response.humidity;
      shang_min_temp.innerHTML=response.min_temp;
      shang_max_temp.innerHTML=response.max_temp;
      shang_wind_speed.innerHTML=response.wind_speed;
      shang_wind_degrees.innerHTML=response.wind_degrees;
	  shang_temp.innerHTML=response.temp; 	
      shang_sunrise.innerHTML=convert(response.sunrise);
      shang_sunset.innerHTML=convert(response.sunset);
    })
    .catch((err) => console.log(err));
};

Shanghai();

const Lucknow = async() => {
	await fetch(url+"Lucknow", options)
	  .then((response) => response.json())
	  .then((response) => {
		  console.log(response);
		lucknow_feels_like.innerHTML=response.feels_like;
		lucknow_humidity.innerHTML=response.humidity;
		lucknow_min_temp.innerHTML=response.min_temp;
		lucknow_max_temp.innerHTML=response.max_temp;
		lucknow_wind_speed.innerHTML=response.wind_speed;
		lucknow_wind_degrees.innerHTML=response.wind_degrees;
		lucknow_temp.innerHTML=response.temp; 	
		lucknow_sunrise.innerHTML=convert(response.sunrise);
		// lucknow_sunset.innerHTML=response.sunset;
	  })
	  .catch((err) => console.log(err));
  };
  
  Lucknow();

  const London = async() => {
	await fetch(url+"London", options)
	  .then((response) => response.json())
	  .then((response) => {
		  console.log(response);
		london_feels_like.innerHTML=response.feels_like;
		london_humidity.innerHTML=response.humidity;
		london_min_temp.innerHTML=response.min_temp;
		london_max_temp.innerHTML=response.max_temp;
		london_wind_speed.innerHTML=response.wind_speed;
		london_wind_degrees.innerHTML=response.wind_degrees;
		london_temp.innerHTML=response.temp; 	
		london_sunrise.innerHTML=convert(response.sunrise);
		// london_sunset.innerHTML=response.sunset;
	  })
	  .catch((err) => console.log(err));
  };
  
  London();

  const NewYork = async() => {
	await fetch(url+"New York", options)
	  .then((response) => response.json())
	  .then((response) => {
		  console.log(response);
		york_feels_like.innerHTML=response.feels_like;
		york_humidity.innerHTML=response.humidity;
		york_min_temp.innerHTML=response.min_temp;
		york_max_temp.innerHTML=response.max_temp;
		york_wind_speed.innerHTML=response.wind_speed;
		york_wind_degrees.innerHTML=response.wind_degrees;
		york_temp.innerHTML=response.temp; 	
		york_sunrise.innerHTML=convert(response.sunrise);
		// york_sunset.innerHTML=response.sunset;
	  })
	  .catch((err) => console.log(err));
  };
  
  NewYork();

  const convert = (timestamp) => {
    // Create a new Date object with the timestamp
    var date = new Date(timestamp * 1000); // JavaScript timestamps are in milliseconds, so we multiply by 1000 to convert to milliseconds

    // Get the components of the date
    var hours = ("0" + date.getHours()).slice(-2); // Pad with leading zeros
    var minutes = ("0" + date.getMinutes()).slice(-2); // Pad with leading zeros
    var seconds = ("0" + date.getSeconds()).slice(-2); // Pad with leading zeros

    // Construct the formatted time string
    var formattedTime = hours + ":" + minutes + ":" + seconds;

    return formattedTime;
}
