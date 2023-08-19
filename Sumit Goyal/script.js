//api's
let dictURL = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let wordURL = "https://random-word-api.herokuapp.com/word";
// random word
async function rWordFun() {
    let rword = await axios.get(wordURL);
    rword = rword.data[0];
    return rword;
}
// audio element
let audio = document.querySelector("#myAudio");
// meaning container
let mContanier = document.querySelector(".meanings-container");
// search box
let txtSearch = document.querySelector("#txtSearch");
txtSearch.addEventListener("keyup", async (event) => {
    if (event.key === "Enter") {
        let q = txtSearch.value;
        let res = await getWord(q);
        document.querySelector("#word").style.display = "none";
        await show(res);
    }
});
let btnSearch = document.querySelector("#btnSearch");
btnSearch.addEventListener("click", async () => {
    let q = txtSearch.value;
    let res = await getWord(q);
    document.querySelector("#word").style.display = "none";
    await show(res);
});
async function getWord(word) {
    try {
        console.log(word);
        let dict = await axios.get(dictURL + word);
        console.log(dict.data[0]);
        return dict.data[0];
    } catch (e) {
        // alert("there was some error with fetching of word");
        console.log(e);
        return "";
    }
}
//to display result
async function show(...args) {
    let data;
    if (args.length == 0) {
        data = await getWord(await rWordFun());
        if (data === "") location.reload();
    } else {
        data = args[0];
        if (data === "") alert("Enter Correct Word");
    }
    let word = document.querySelector("#randowWord");
    word.innerHTML = data.word.toUpperCase();
    for (let a of data.phonetics) {
        if (a.audio != "") {
            audio.src = a.audio;
        }
    }
    mContanier.innerHTML = "";
    for (let meaning of data.meanings) {
        let pos = document.createElement("p");
        pos.classList.add("part-of-speech");
        pos.innerHTML = meaning.partOfSpeech;
        mContanier.appendChild(pos);
        let def = document.createElement("p");
        def.classList.add("meaning");
        def.innerHTML = meaning.definitions[0].definition;
        mContanier.appendChild(def);
        if (
            meaning.definitions[0].example != "" &&
            meaning.definitions[0].example != undefined
        ) {
            let eg = document.createElement("p");
            eg.classList.add("example");
            eg.innerHTML = "Eg:-" + meaning.definitions[0].example;
            mContanier.appendChild(eg);
        }
    }
}
//audio button
function play() {
    audio.play();
}
