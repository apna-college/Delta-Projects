let currentDate = document.getElementById('currentDate');
const now = new Date;
let month = now.getMonth() + 1;
let day = now.getDate();
let year = now.getFullYear();
currentDate.textContent = ` ${day.toString().padStart(2,"0")} / ${month.toString().padStart(2,"0")} / ${year.toString().padStart(2,"0")}`;
document.addEventListener("DOMContentLoaded", function () {
    // Digital Clock
    const digitalClock = document.getElementById("digitalClock");
    const btn12 = document.getElementById("btn12");
    const btn24 = document.getElementById("btn24");

    let is24Hour = true;

    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let ampm = "";

        if (!is24Hour) {
            ampm = hours >= 12 ? "PM" : "AM";
            hours = hours % 12 || 12;
        }

        digitalClock.textContent = `${hours.toString().padStart(2, "0")} :
                                    ${minutes.toString().padStart(2, "0")} :
                                    ${seconds.toString().padStart(2, "0")} ${ampm}`;
    }

    btn12.addEventListener("click", () => {
        is24Hour = false;
        btn12.disabled = true;
        btn24.disabled = false;
        updateClock();
    });

    btn24.addEventListener("click", () => {
        is24Hour = true;
        btn24.disabled = true;
        btn12.disabled = false;
        updateClock();
    });

    setInterval(updateClock, 1000);
    updateClock();

    // Timer
    let timerTime = 0, timerRunning = false, timerInterval;
    const timerDisplay = document.getElementById("timerDisplay");
    const startTimer = document.getElementById("startTimer");
    const pauseTimer = document.getElementById("pauseTimer");
    const resetTimer = document.getElementById("resetTimer");

    function updateTimerDisplay() {
        let minutes = Math.floor(timerTime / 60);
        let seconds = timerTime % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
        timerDisplay.classList.remove("time-up");
    }

    startTimer.addEventListener("click", () => {
        if (!timerRunning) {
            let min = parseInt(document.getElementById("timerMinutes").value) || 0;
            let sec = parseInt(document.getElementById("timerSeconds").value) || 0;
            timerTime = min * 60 + sec;

            if (timerTime <= 0) return;

            timerRunning = true;
            timerDisplay.classList.remove("time-up");
            timerInterval = setInterval(() => {
                if (timerTime > 0) {
                    timerTime--;
                    updateTimerDisplay();
                } else {
                    clearInterval(timerInterval);
                    timerRunning = false;
                    timerDisplay.textContent = "TIME'S UP!";
                    timerDisplay.classList.add("time-up");
                }
            }, 1000);

            startTimer.disabled = true;
            pauseTimer.disabled = false;
            resetTimer.disabled = false;
        }
    });

    pauseTimer.addEventListener("click", () => {
        clearInterval(timerInterval);
        timerRunning = false;
        startTimer.disabled = false;
        pauseTimer.disabled = true;
    });

    resetTimer.addEventListener("click", () => {
        clearInterval(timerInterval);
        timerRunning = false;
        timerTime = 0;
        updateTimerDisplay();
        startTimer.disabled = false;
        pauseTimer.disabled = true;
        resetTimer.disabled = true;
    });

    updateTimerDisplay();

    // Stopwatch
    let stopwatchTime = 0, stopwatchRunning = false, stopwatchInterval;
    const stopwatchDisplay = document.getElementById("stopwatchDisplay");
    const startStopwatch = document.getElementById("startStopwatch");
    const pauseStopwatch = document.getElementById("pauseStopwatch");
    const resetStopwatch = document.getElementById("resetStopwatch");
    const lapStopwatch = document.getElementById("lapStopwatch");
    const stopwatchLaps = document.getElementById("stopwatchLaps");

    function updateStopwatchDisplay() {
        let minutes = Math.floor(stopwatchTime / 6000);
        let seconds = Math.floor((stopwatchTime % 6000) / 100);
        let milliseconds = stopwatchTime % 100;
        stopwatchDisplay.textContent = `${minutes.toString().padStart(2, "0")} : 
                                        ${seconds.toString().padStart(2, "0")} : 
                                        ${milliseconds.toString().padStart(2, "0")}`;
    }

    startStopwatch.addEventListener("click", () => {
        if (!stopwatchRunning) {
            stopwatchRunning = true;
            stopwatchInterval = setInterval(() => {
                stopwatchTime++;
                updateStopwatchDisplay();
            }, 10);

            startStopwatch.disabled = true;
            pauseStopwatch.disabled = false;
            resetStopwatch.disabled = false;
            lapStopwatch.disabled = false;
        }
    });

    pauseStopwatch.addEventListener("click", () => {
        clearInterval(stopwatchInterval);
        stopwatchRunning = false;
        startStopwatch.disabled = false;
        pauseStopwatch.disabled = true;
    });

    resetStopwatch.addEventListener("click", () => {
        clearInterval(stopwatchInterval);
        stopwatchRunning = false;
        stopwatchTime = 0;
        updateStopwatchDisplay();
        startStopwatch.disabled = false;
        pauseStopwatch.disabled = true;
        resetStopwatch.disabled = true;
        lapStopwatch.disabled = true;
        stopwatchLaps.innerHTML = "";
    });

    lapStopwatch.addEventListener("click", () => {
        if (stopwatchRunning) {
            const lapItem = document.createElement("li");
            lapItem.textContent = stopwatchDisplay.textContent;
            stopwatchLaps.appendChild(lapItem);
        }
    });

    updateStopwatchDisplay();
});
