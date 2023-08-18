let url = "https://v2.jokeapi.dev/joke/Programming?type=single";
let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
   let p = document.querySelector(".para");
    let joke =  await getJokes();
    p.innerText = joke;

});


async function getJokes (){
    try{
        let res = await axios.get(url);
        return res.data.joke;
    } catch (e) {
        console.log("Erroe --- ", e);
        return "NO JOKES FOUND";
    }

}