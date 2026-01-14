let ageUrl = "https://api.agify.io?name=";
let nationUrl = "https://api.nationalize.io?name=";
let genderUrl = "https://api.genderize.io?name=";
let countriesUrl = "https://restcountries.com/v3.1/all?fields=name,cca2";

let countryMap = {};

async function fetchCountries() {
    try {
        let res = await axios.get(countriesUrl);
        res.data.forEach(country => {
            countryMap[country.cca2] = country.name.common;
        });
    } catch (err) {
        console.log("Error fetching countries:", err);
    }
}
fetchCountries();

let agePara = document.querySelector("#ageBox .value");
let ageProbab = document.querySelector("#ageBox .probability");

let genderPara = document.querySelector("#genderBox .value");
let genderProbab = document.querySelector("#genderBox .probability");

let nationBox = document.querySelector("#nationalityBox");
let nationalityPara = document.querySelector("#nationalityBox .value");
let nationalityProbab = document.querySelector("#nationalityBox .probability");

let input = document.querySelector("input");
let button = document.querySelector("button");


async function ageFn(name) {
    try {
        let res = await axios.get(ageUrl + name);
        return res.data.age;
    } catch (err) {
        console.log("Error : ", err);
        return "Error";
    }
}

async function genderFn(name) {
    try {
        let res = await axios.get(genderUrl + name);
        return res.data;
    } catch (err) {
        console.log("Error : ", err);
        return "Error";
    }
}

async function nationFn(name) {
    try {
        let res = await axios.get(nationUrl + name);
        return res.data.country;
    } catch (err) {
        console.log("Error : ", err);
        return "Error";
    }
}


input.addEventListener("keydown", (event) => {
    if(event.code === "Enter") {
        button.click();
    }
})


input.addEventListener("input", () => {
    input.value = input.value.replace(/[^a-zA-Z]/g, "");
});

button.addEventListener("click", async () => {
    let name = input.value;
    if(name === "") {
        alert("Cannot be empty.");
    } else {
        agePara.innerText = await ageFn(name);

        let genderObj = await genderFn(name);
        genderPara.innerText = genderObj.gender.charAt(0).toUpperCase() + genderObj.gender.slice(1);
        genderProbab.innerText = `Probability ${genderObj.probability.toFixed(2)}`;

        let country = await nationFn(name);
        if (country.length > 0) {
            let containerDiv = document.querySelector("#nationalityBox .nation-container");
            containerDiv.innerHTML = ""; // Clear existing

            country.forEach(c => {
                let itemDiv = document.createElement("div");
                itemDiv.setAttribute("class", "nation-item");
                
                let para1 = document.createElement("p");
                let para2 = document.createElement("p");

                para1.setAttribute("class", "value");
                para1.style.display = "flex";
                para1.style.alignItems = "center";
                para1.style.justifyContent = "center";
                para1.style.gap = "0.5rem";

                para2.setAttribute("class", "probability");

                let img = document.createElement("img");
                img.src = `https://flagsapi.com/${c.country_id}/flat/64.png`;
                img.alt = c.country_id;
                img.style.height = "1.5rem";
                
                let countryName = countryMap[c.country_id] || c.country_id;
                para1.innerText = countryName;
                para1.appendChild(img);

                para2.innerText = `Probability: ${c.probability.toFixed(2)}`;

                itemDiv.appendChild(para1);
                itemDiv.appendChild(para2);
                containerDiv.appendChild(itemDiv);
            });
        }
    }
});
