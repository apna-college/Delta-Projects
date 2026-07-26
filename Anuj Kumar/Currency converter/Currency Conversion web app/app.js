const BASE_URL = "https://open.er-api.com/v6/latest";

const fromSelect = document.querySelector("#from-select");
const toSelect = document.querySelector("#to-select");
const amountInput = document.querySelector("#amount");
const rateText = document.querySelector(".exchange-rate");
const convertBtn = document.querySelector("button[type='submit']");
const swapIcon = document.querySelector(".swap-icon");

const dropdowns = [fromSelect, toSelect];

// 1. Populate options dynamically using your country_list object
dropdowns.forEach((select) => {
  // Clear any placeholder hardcoded HTML options first
  select.innerHTML = "";

  for (let currCode in country_list) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;

    // Set initial defaults
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }

    select.append(newOption);
  }

  // Update flags on dropdown change
  select.addEventListener("change", (e) => {
    updateFlag(e.target);
  });
});

// 2. Dynamic Flag Swapping
function updateFlag(element) {
  let currCode = element.value;
  let countryCode = country_list[currCode]; // Looks up 2-letter code (e.g. "US")
  
  if (!countryCode) return;

  let flagSpan = element.parentElement.querySelector("span[class*='fi-']");
  if (flagSpan) {
    flagSpan.className = `fi fi-${countryCode.toLowerCase()}`;
  }
}

// 3. Fetch Exchange Rate via Axios
async function getExchangeRate() {
  let amountVal = amountInput.value;

  if (amountVal === "" || amountVal < 1) {
    amountVal = 1;
    amountInput.value = "1";
  }

  rateText.innerText = "Getting exchange rate...";

  try {
    const fromCurr = fromSelect.value;
    const toCurr = toSelect.value;

    const response = await axios.get(`${BASE_URL}/${fromCurr}`);
    const rates = response.data.rates;

    if (rates && rates[toCurr]) {
      const exchangeRate = rates[toCurr];
      const totalAmount = (amountVal * exchangeRate).toFixed(2);

      rateText.innerText = `${amountVal} ${fromCurr} = ${totalAmount} ${toCurr}`;
    } else {
      rateText.innerText = "Rate unavailable";
    }
  } catch (error) {
    console.error("Error fetching rate:", error);
    rateText.innerText = "Failed to fetch rate. Try again.";
  }
}

// 4. Swap currencies on click
if (swapIcon) {
  swapIcon.addEventListener("click", () => {
    let temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;

    updateFlag(fromSelect);
    updateFlag(toSelect);
    getExchangeRate();
  });
}

// 5. Submit event listener
convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getExchangeRate();
});

// 6. Initialize flags and rate on page load
window.addEventListener("load", () => {
  updateFlag(fromSelect);
  updateFlag(toSelect);
  getExchangeRate();
});