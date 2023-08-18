const jokeque = document.querySelector(".joke-que");
const jokeans = document.querySelector(".joke-ans");
const btn = document.querySelector(".btn");

let retweet = document.querySelector("#retweets");
let likes = document.querySelector("#likes");



async function getJoke() {
  let url = fetch(
    "https://official-joke-api.appspot.com/jokes/programming/random"
  );
  let res = await url;
  let jsonData = await res.json();
  let strData = JSON.stringify(jsonData);
  let objData = JSON.parse(strData);
  console.log(objData)
  return objData;
}
async function getUser() {
  let url = fetch(
    "url: 'https://randomuser.me/api'"
  );
}

setInterval(() => {
    retweet.innerText ++;
}, 2000);

setInterval(() => {
    likes.innerText ++;
}, 3500);

// btn.addEventListener("click", () => {
//   let data = getJoke();
//   printJoke(data);
// });

function printJoke(data) {
  data.then((result) => {
    joke = result[0];
    // console.log(joke);
    document.querySelector('img').src="https://i.pravatar.cc/150";
    jokeque.innerText = joke.setup;
    jokeans.innerText = joke.punchline;

    retweet.innerText = getRandom();
    likes.innerText = getRandom();
  });
}

function getRandom(){
    return Math.floor(Math.random()*1000)+200;
}