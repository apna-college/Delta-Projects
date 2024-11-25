// //http://api.weatherapi.com/v1/current.json?key=fe6f9c9b97f042e0bd9144143242311&q=Delhi&aqi=no

document.addEventListener("DOMContentLoaded", () => {
  const temperatureField = document.querySelector(".temp");
  const locationField = document.querySelector(".time_location p");
  const dateandtimeField = document.querySelector(".time_location span");
  const conditionField = document.querySelector(".condition p");
  const searchField = document.querySelector(".search_area");
  let form = document.querySelector("form");

  if (
    !temperatureField ||
    !locationField ||
    !dateandtimeField ||
    !conditionField ||
    !form
  ) {
    console.error("Some required elements are missing in the DOM.");
    return;
  }

  form.addEventListener("submit", searchforLocation);

  let target = "Delhi";

  const fetchResults = async (targetLocation) => {
    try {
      let url = `http://api.weatherapi.com/v1/current.json?key=fe6f9c9b97f042e0bd9144143242311&q=${targetLocation}&aqi=no`;

      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await res.json();

      let locationName = data.location.name;
      let time = data.location.localtime;
      let temp = data.current.temp_c;
      let condition = data.current.condition.text;

      updateDetails(temp, locationName, time, condition);
    } catch (error) {
      console.error(error);
      alert("Unable to fetch weather data. Please try again.");
    }
  };

  function updateDetails(temp, locationName, time, condition) {
    let splitDate = time.split(" ")[0];
    let splitTime = time.split(" ")[1];
    let currentDay = getDayName(new Date(splitDate).getDay());

    if (temperatureField) temperatureField.innerText = `${temp}°C`;
    if (locationField) locationField.innerText = locationName;
    if (dateandtimeField)
      dateandtimeField.innerText = `${currentDay} ${splitTime}`;
    if (conditionField) conditionField.innerText = condition;
  }

  function searchforLocation(e) {
    e.preventDefault();
    if (!searchField.value.trim()) {
      alert("Please enter a location.");
      return;
    }
    target = searchField.value.trim();
    fetchResults(target);
  }

  fetchResults(target);

  function getDayName(number) {
    switch (number) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
    }
  }
});
