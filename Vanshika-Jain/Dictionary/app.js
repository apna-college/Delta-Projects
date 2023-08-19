let btn = document.querySelector("button");
let inp = document.querySelector("input");

let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
});

btn.addEventListener("click", async () => {
  // console.dir(inp.value);
  word = inp.value;
  let value = await getMeaning(word);
  // console.dir(value);
  show(value);
});
function show(value) {
  inp.value = [];
  for (data of value) {
    let h1 = document.querySelector("h1");
    let first = data.word.charAt(0).toUpperCase() + data.word.slice(1);
    h1.innerText = first;

    let pos = document.querySelector(".pos");
    pos.innerText = `${data.meanings[0].partOfSpeech}`;
    // for (let i = 0; i < data.meanings.length; i++) {
    //   // console.log(data.meanings[i]);
    //   pos.innerText = `${data.meanings[i].partOfSpeech} | ${data.phonetic}`;
    //   // pos.innerText = data.phonetic;
    // }
    let mean = document.querySelector(".meaning");
    mean.innerText = data.meanings[0].definitions[0].definition;

    let sentence = document.querySelector(".sentence");
    sentence.innerText = data.meanings[0].definitions[0].example;
    console.dir(data.meanings);
  }
}

// let word = "";
let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
async function getMeaning(word) {
  try {
    let res = await axios.get(url + word);
    return res.data;
  } catch (error) {
    console.log(error);
    return "Word Not Found";
  }
}
