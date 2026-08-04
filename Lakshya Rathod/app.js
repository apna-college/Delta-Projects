let btn = document.querySelector("button");
let countryInput = document.querySelector("#country");
let stateInput = document.querySelector("#state");
let ul = document.querySelector("ul");

let url = "http://universities.hipolabs.com/search?country=";

// Show or hide state input
countryInput.addEventListener("input", () => {
    if (countryInput.value.trim().toLowerCase() === "india") {
        stateInput.disabled=false;
    } else {
        stateInput.disabled=true;
        stateInput.value = "";
    }
});

btn.addEventListener("click", async () => {

    let country = countryInput.value.trim();
    let state = stateInput.value.trim();

    ul.innerHTML = "";

    try {

        let res = await axios.get(url + country);
        let collist = res.data;

        for (let col of collist) {

            // If country is India, filter by state
            if (country.toLowerCase() === "india") {

                if (
                    col["state-province"] &&
                    col["state-province"].toLowerCase() === state.toLowerCase()
                ) {
                    let li = document.createElement("li");
                    li.innerText = col.name;
                    ul.appendChild(li);
                }

            }

            // For all other countries
            else {

                let li = document.createElement("li");
                li.innerText = col.name;
                ul.appendChild(li);

            }

        }

    } catch (err) {
        console.log(err);

        let li = document.createElement("li");
        li.innerText = "Something went wrong!";
        ul.appendChild(li);
    }

});