// Selecting Element

const navLogo = document.querySelector(".nav-logo");
const headNav = document.querySelector(".navigation");
const backgroundVideo = document.querySelector(".bg-video");
const searchBox = document.querySelector(".search-box");
const recent = document.querySelector(".recent-search");
const cardsContainer = document.querySelector(".cards-container");
const weatherDetailsCard = document.querySelector(".weather-details-card");
const modal = document.querySelector(".modal");
const crossbtn = document.querySelector(".cross");
const mainSection = document.querySelector(".mainSection");
// const tempIcon =

let sunriseClock = 0;
let sunsetClock = 0;
let time = "";
let _history = [];

searchBox.focus();

const date = new Date();

//Getting the map

const getMap = function () {
  try {
    const mapApi = async function () {
      const response = await fetch(
        `https://tile.openweathermap.org/map/temp_new/13/85/25.png?appid=7eb439df663903ee6feeff2b058bb57d`
      );

      const data = response.json();

      console.log(data);
    };

    mapApi();
  } catch {
    console.log("error");
  }
};

//Selecting The api keys

const apiKey = "7eb439df663903ee6feeff2b058bb57d";
const api =
  "https://api.openweathermap.org/data/2.5/weather?q=patna&units=metric&appid=7eb439df663903ee6feeff2b058bb57d";

const changeVideo = function (type) {
  if (type === "Clear") {
    backgroundVideo.src =
      "https://player.vimeo.com/external/210744044.sd.mp4?s=2c321f5fb693e9b7d0048e00930f9455a1d06bdf&profile_id=164&oauth2_token_id=57447761";
    document.querySelector(".temp-icon").src =
      "https://cdn-icons-png.flaticon.com/128/6974/6974833.png";
  }
  if (type === "Rain") {
    backgroundVideo.src =
      "https://player.vimeo.com/external/205660426.sd.mp4?s=6dbe7c3f739497ec41a426301dafbd2a3b977555&profile_id=164&oauth2_token_id=57447761";
    document.querySelector(".temp-icon").src =
      "https://cdn-icons-png.flaticon.com/128/2948/2948175.png";
  }
  if (type === "Clouds") {
    backgroundVideo.src =
      "https://player.vimeo.com/external/393023076.sd.mp4?s=08c94b98d29ca44cf2a65a194af7c0c82ed1cb67&profile_id=164&oauth2_token_id=57447761";
    document.querySelector(".temp-icon").src =
      "https://cdn-icons-png.flaticon.com/128/9139/9139832.png";
  }

  if (type === "Haze") {
    backgroundVideo.src =
      "https://player.vimeo.com/external/480266369.sd.mp4?s=d340fb3fd94d53540936b854d1f4453ccc39ef40&profile_id=164&oauth2_token_id=57447761";
    document.querySelector(".temp-icon").src =
      "https://cdn-icons-png.flaticon.com/128/1197/1197102.png";
  }

  if (type === "Smoke") {
    backgroundVideo.src =
      "https://player.vimeo.com/external/455165700.sd.mp4?s=186476b109a6c5f8b851a0a53ff766e75cb7405d&profile_id=164&oauth2_token_id=57447761";
    document.querySelector(".temp-icon").src =
      "https://cdn-icons-png.flaticon.com/128/1197/1197102.png";
  }

  if (type === "Fog") {
    backgroundVideo.src =
      "https://player.vimeo.com/external/195912468.sd.mp4?s=4fdf320d5912bcfc67fcdb40d85a75ed38c2285a&profile_id=164&oauth2_token_id=57447761";
    document.querySelector(".temp-icon").src =
      "https://cdn-icons-png.flaticon.com/128/1197/1197102.png";
  }
};

const getTime = function () {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, 0);
  const minute = String(date.getMinutes()).padStart(2, 0);
  time = `${hour}:${minute} ${hour < 12 ? "AM" : "PM"}`;
};

const showResult = function (data) {
  getTime();
  weatherDetailsCard.classList.remove("hidden");

  const html = `<!-- Top Section -->

  <div class="top">
    <div class="current-text">
      <p>Current Weather</p>
    </div>

    <div class="timing">
      <p>${time}</p>
    </div>
  </div>

  <hr />

  <!-- Middle Section -->

  <div class="middle">
    <!-- Temperature Showing section -->
    <div class="middle-left">
      <img
        src="https://cdn-icons-png.flaticon.com/128/2930/2930014.png"
        alt="" class ="temp-icon"
      />
      <span>${Math.round(data.main.temp)}&#8451;</span>
    </div>

    <div class="middle-right">
      <p class="feelslike">RealFeel ${Math.round(
        data.main.feels_like
      )}&#8451;</p>
      <p class="type">${data.weather[0].main}</p>
    </div>
  </div>

  <div class="main-section">
    <div class="detail">
      <span>Max Temp:</span>
      <span class="value">${Math.round(data.main.temp_max)}&#8451;</span>
      <hr />
    </div>

    <div class="detail">
      <span>Min Temp:</span>
      <span class="value">${Math.round(data.main.temp_min)}&#8451;</span>
      <hr />
    </div>

    <div class="detail">
      <span>Humidity:</span>
      <span class="value">${Math.round(data.main.humidity)}%</span>
      <hr />
    </div>

    <div class="detail">
      <span>Pressure:</span>
      <span class="value">${Math.round(data.main.pressure)}mb</span>
      <hr />
    </div>

    <div class="detail">
      <span>Wind Speed:</span>
      <span class="value">${Math.round(data.wind.speed)}km/h</span>
      <hr />
    </div>

    <div class="detail">
      <span>Wind Degree:</span>
      <span class="value">${Math.round(data.wind.deg)}</span>
      <hr />
    </div>

 

  </div>`;

  weatherDetailsCard.innerHTML = "";

  weatherDetailsCard.insertAdjacentHTML("beforeend", html);
};

const displayHistory = function (data) {
  const html = `  <div class="cards">
  <div class="cityName">${data[0].name}</div>
  <p class="countryName">${data[0].sys.country}</p>
  <div class="temp">
    <img
      src="https://cdn-icons-png.flaticon.com/128/3222/3222791.png"
      alt=""
    />
    <span>${Math.round(data[0].main.temp)}&#8451;</span>
  </div>
  <div class="feelsLike">
    <p>realFeel ${Math.round(data[0].main.feels_like)}&#8451;</p>
  </div>
</div>`;

  cardsContainer.insertAdjacentHTML("afterbegin", html);
};

const getWeather = function () {
  city = searchBox.value;

  const getWeatherDeatils = async function (city) {
    try {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );

      const response = await data.json();

      showResult(response);
      changeVideo(response.weather[0].main);
      _history.unshift(response);
      searchBox.value = "";
      _storeData();
      getData();
    } catch {
      errorMessage();
    }
  };
  getWeatherDeatils(city);
};

const _storeData = function () {
  localStorage.setItem("weatherdata", JSON.stringify(_history));
};

const getData = function () {
  const dataToDisplay = JSON.parse(localStorage.getItem("weatherdata"));
  console.log(dataToDisplay);

  if (dataToDisplay.length > 4) {
    cardsContainer.innerHTML = "";
    cardsContainer.insertAdjacentHTML(
      "afterbegin",
      `<div class="cards">
    <div class="cityName">${dataToDisplay[0].name}</div>
    <p class="countryName">${dataToDisplay[0].sys.country}</p>
    <div class="temp">
      <img
        src="https://cdn-icons-png.flaticon.com/128/3222/3222791.png"
        alt=""
      />
      <span>${Math.round(dataToDisplay[0].main.temp)}&#8451;</span>
    </div>
    <div class="feelsLike">
      <p>realFeel ${Math.round(dataToDisplay[0].main.feels_like)}&#8451;</p>
    </div>
  </div>
  
  <div class="cards">
    <div class="cityName">${dataToDisplay[1].name}</div>
    <p class="countryName">${dataToDisplay[1].sys.country}</p>
    <div class="temp">
      <img
        src="https://cdn-icons-png.flaticon.com/128/3222/3222791.png"
        alt=""
      />
      <span>${Math.round(dataToDisplay[1].main.temp)}&#8451;</span>
    </div>
    <div class="feelsLike">
      <p>realFeel ${Math.round(dataToDisplay[1].main.feels_like)}&#8451;</p>
    </div>
  </div>
  
  <div class="cards">
  <div class="cityName">${dataToDisplay[2].name}</div>
  <p class="countryName">${dataToDisplay[2].sys.country}</p>
  <div class="temp">
    <img
      src="https://cdn-icons-png.flaticon.com/128/3222/3222791.png"
      alt=""
    />
    <span>${Math.round(dataToDisplay[2].main.temp)}&#8451;</span>
  </div>
  <div class="feelsLike">
    <p>realFeel ${Math.round(dataToDisplay[2].main.feels_like)}&#8451;</p>
  </div>
</div>

<div class="cards">
<div class="cityName">${dataToDisplay[3].name}</div>
<p class="countryName">${dataToDisplay[3].sys.country}</p>
<div class="temp">
  <img
    src="https://cdn-icons-png.flaticon.com/128/3222/3222791.png"
    alt=""
  />
  <span>${Math.round(dataToDisplay[3].main.temp)}&#8451;</span>
</div>
<div class="feelsLike">
  <p>realFeel ${Math.round(dataToDisplay[3].main.feels_like)}&#8451;</p>
</div>
</div>`
    );
  } else displayHistory(dataToDisplay);
};

const deleteData = function () {
  localStorage.clear("weatherdata");
};

//Hitting the enter key

document.documentElement.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    getWeather();
    getMap();
  }
});

//Creating the error model
const errorMessage = function () {
  modal.classList.remove("modal-hidden");
  headNav.style.filter = "blur(10px)";
  backgroundVideo.style.filter = "blur(10px)";
  mainSection.style.filter = "blur(10px)";
  weatherDetailsCard.style.filter = "blur(10px)";
  searchBox.style.filter = "blur(10px)";
  navLogo.style.filter = "blur(10px)";
  recent.style.filter = "blur(10px)";
  searchBox.value = "";
  searchBox.focus();
};

//Modal cutting feature

crossbtn.addEventListener("click", function () {
  modal.classList.add("modal-hidden");
  headNav.style.filter = "blur(0px)";
  backgroundVideo.style.filter = "blur(0px)";
  mainSection.style.filter = "blur(0px)";
  weatherDetailsCard.style.filter = "blur(0px)";
  searchBox.style.filter = "blur(0px)";
  navLogo.style.filter = "blur(0px)";
  recent.style.filter = "blur(0px)";
  searchBox.value = "";
  searchBox.focus();
});
