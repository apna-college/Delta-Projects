let form = document.querySelector("form");
let input = document.querySelector("input");

form.addEventListener("submit", (event) => {
    event.preventDefault();
})

let button = document.querySelector("button");
button.addEventListener("click", () => {
    let value = input.value;
    showFacts(value);
})

let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

let getFacts = async (value) => {
    try {
        let res = await fetch(url + value);
        let data = await res.json();
        return data[0].meanings;
    }
    catch (e) {
        console.log("error: ", e);
        return 0;
    }
}

let showFacts = async (value) => {
    let h5 = document.querySelector("h5");
    h5.innerText = "";
    h5.classList.add("styling");
    data = await getFacts(value);
    if (data){
        let ul1 = document.createElement("ul");
    for (data1 of data) {
        let li1 = document.createElement("li");
        li1.innerText = data1.partOfSpeech;
        ul1.insertAdjacentElement("beforeend", li1)
        data2 = data1.definitions;
        let ul2 = document.createElement("ul");
        for (data3 of data2) {
            let li2 = document.createElement("li");
            li2.innerText = data3.definition;
            ul2.insertAdjacentElement("beforeend", li2)
        }
        ul1.insertAdjacentElement("beforeend", ul2);
    }
    h5.insertAdjacentElement("beforeend", ul1);
    } else {
        h5.innerText = "No meanings found for the entered word. Please try another word.";
    }
}