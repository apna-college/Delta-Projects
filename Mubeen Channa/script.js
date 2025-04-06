let tempDisplay = document.getElementById("temp");
let cityDisplay = document.getElementById("city");
let searchInput = document.getElementById("search-bar");
let btnSearch = document.getElementById("search-icon");

// Your WeatherAPI Key
let apiKey = "b1000ee5532b4e868ff111448251401";

btnSearch.addEventListener("click", async () => {
    let city = searchInput.value.trim();
    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    // Construct API URL
    let api = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    try {
        let response = await fetch(api);  // Wait for API response
        if (!response.ok) {
            throw new Error("City not found or invalid API key.");
        }

        let data = await response.json();  // Convert Promise into JSON format
        tempDisplay.innerHTML = `${data.current.temp_c}°C`;  // Display temperature
        cityDisplay.innerHTML = data.location.name;  // Display city name
        
    } catch (error) {
        alert(error.message);  // Handle errors (e.g., invalid city or network issues)
    }
});
