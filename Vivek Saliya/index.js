let message = document.querySelector(".text-container");
let btn = document.querySelector("button");
let url ="https://v2.jokeapi.dev/joke/Any?type=single";


function adder(){
    setTimeout(()=>{
        message.classList.add("animation");
    },0);
    setTimeout(()=>{
        message.classList.remove("animation")
    },1000)
};


btn.addEventListener("click",async()=>{
    let audio = document.querySelector("audio");
    audio.play();
    let res = await axios(url);
    message.innerText = res.data.joke;
    adder();
})


