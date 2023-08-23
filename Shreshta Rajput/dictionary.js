let srch_box = document.querySelector("#searchbox");
let btn = document.querySelector("#searchbtn");
let wor = document.querySelector("#word");
let word_desc = document.querySelector("#word_desc");

let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

async function getWord(word) {
  let new_url = url + word;
  wor.innerHTML = "Meaning of: " + word;
  console.log(new_url);

  let req = await axios.get(new_url);

  let arr = req.data[0].meanings[0].definitions;
  let arr2 = [];
  for (let j = 0; j < arr.length; j++) {
    arr2.push(arr[j].definition);
  }

  let len_arr = arr2.length;
  let str = "";

  for (let k = 0; k < len_arr; k++) {
    str = str + " " + arr2[k];
    word_desc.innerHTML = str;
  }
}

btn.addEventListener("click", async function (e) {
  e.preventDefault();
  await getWord(srch_box.value);
});
