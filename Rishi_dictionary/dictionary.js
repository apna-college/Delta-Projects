let body = document.querySelector("body");
let btn = document.querySelector("button");
let ol = document.querySelector(".list");
let text = document.querySelector(".inpBox");

btn.addEventListener("click", () => {
    const word = text.value;
    detail(word);
});

let meaningurl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
async function detail(word) {
    console.log(word);
    let res = await fetch(meaningurl + word);
    let info = await res.json();
    let defList = await info[0].meanings[0];
    showData(defList);
}


text.addEventListener("keypress", async(event)=>{
if(event.key === "Enter") {
    event.preventDefault();
    btn.click();
}
})

function showData(defList) {
    try {
        ol.innerText ="";
        let infos = defList.definitions;
        for (info of infos) {
            let li = document.createElement("li");
             li.innerText = info.definition;
            li.classList.add("list-group-item");
            li.classList.add("itemColor");
            ol.appendChild(li);
        }
        console.log("we successfully find the result");
    } catch {
        console.log("Not recognize the data");
    }
}




