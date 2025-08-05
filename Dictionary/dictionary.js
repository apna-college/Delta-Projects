let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
    let searchWord = document.querySelector("input").value;
    let word = await getWord(searchWord);
    console.log(word);
    showDefinition(word);
} )

function showDefinition(word){
    let list = document.querySelector("#mainList");
    list.innerText = "";
    for(trueDefinition of word){
        console.log(trueDefinition);
        console.log(trueDefinition.definition);
        let li = document.createElement("li");
        li.innerText = trueDefinition.definition;
        mainList.appendChild(li);
    }
}
async function getWord(searchWord){
    try {
    let res = await axios.get(url+searchWord);
    console.log(res);
    let allDefinition = res.data[0].meanings[0].definitions;
    console.log(allDefinition);
    return allDefinition;
    } catch (e) {
        console.log("error:", e);
    }
}