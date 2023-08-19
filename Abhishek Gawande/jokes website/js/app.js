let darkMode = document.querySelector(".toggle");

let joke = document.querySelector("#joke");
let ans = document.querySelector("#ans");
let ansBtn = document.querySelector("#ans-btn");

darkMode.addEventListener("click", function () {
    darkMode.classList.toggle("light-mode");
    document.querySelector("body").classList.toggle("light-theme");
    ansBtn.classList.toggle("lightMode");
    document.querySelector("header").classList.toggle("light-header");
});

const url = "https://v2.jokeapi.dev/joke/Programming?safe-mode";


async function getJokes() {
    try {

        let res = await axios.get(url);
        if(res.data.type == "single") {
            ansBtn.classList.remove("d-flex");
            ansBtn.classList.add("d-none");
            joke.innerText = res.data.joke;
            ans.innerText = "";

        } else {
            ans.innerText = "";
            ansBtn.classList.remove("d-none");
            ansBtn.classList.add("d-flex");
            joke.innerText = res.data.setup;
            ansBtn.addEventListener("click", function () {
                ans.innerText = res.data.delivery;
            });
        }
        

        console.log(res.data);

    } catch(err) {
        ans.innerText = "";
        joke.innerText = "Something went wrong. Please try again."
        console.log(err);

    }
}

let moreBtn = document.querySelector("#more-btn");

moreBtn.addEventListener("click", getJokes);

getJokes();