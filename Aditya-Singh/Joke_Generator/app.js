let jokes = document.getElementById("joke");
let btn = document.getElementById("btn");

let url = "https://v2.jokeapi.dev/joke/Any?type=single";

async function getJoke(){
    try{
        let res = await axios.get(url);
        return (res.data.joke) ;
    } catch(e){
        console.log("Error - ", e);
        return "No fact found";
    }
}

btn.addEventListener("click", async() =>{
    let joke = await getJoke();
    console.log(joke);
   
    let p = document.getElementById("joke");
    p.innerText = joke;
})
ō