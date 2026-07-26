# Currency Converter Application

A lightweight, responsive web app that converts currencies in real-time. Built with vanilla JavaScript, CSS Flexbox, and the ExchangeRate API.

## Features

* **Real-time exchange rates:** Fetches live market conversion data via Axios.
* **Dynamic country flags:** Updates flag icons instantly when selecting a new currency.
* **Currency swap button:** Quick one-click toggle between "From" and "To" currencies.
* **Responsive dark UI:** Styled with a clean, dark-mode card layout using CSS Flexbox.

## Tech Stack

* **HTML5 / CSS3:** Modern layouts with Flexbox.
* **JavaScript (ES6):** DOM manipulation and event handling.
* **Axios:** Handles asynchronous API requests.
* **Flag CDN:** Displays SVG flag icons for matching country codes.
* **Google Material Symbols:** Clean icon sets.

## Project Structure

```text
├── index.html        # Main HTML layout
├── style.css         # Card styles and responsive layout
├── country-list.js   # Object mapping 3-letter currency codes to 2-letter country codes
└── app.js           # API calls, flag swapping, and event listeners

How to Run Locally


Clone or download this repository to your local machine.

Ensure all four files (index.html, style.css, country-list.js, app.js) are in the same folder.

Open index.html directly in any browser (or use Live Server in VS Code).

API Used
This project uses the free tier of Open Exchange Rate API to fetch up-to-date conversion rates without needing an API key setup.