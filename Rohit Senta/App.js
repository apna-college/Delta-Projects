// API Project 

console.log("API Project \n\n");
console.log("RandomJokes.com \n\n");
console.log("\n");


let url = "https://v2.jokeapi.dev/joke/Any?safe-mode";

let btn = document.querySelector('button');
btn.addEventListener("click", async () => {
    // btn.classList.add("shadow");
    let theJoke = await getJoke();
    console.log(theJoke);    
    let p2 = document.querySelector('#p2');
    p2.innerText = theJoke;
});

async function getJoke() {
    try {
        let resp = await axios.get(url);
        
        let joke = "";
        if(resp.data.joke != undefined){
            joke = resp.data.joke;
        }

        let setupDel = "";
        if ((resp.data.setup != undefined) && (resp.data.delivery != undefined)){
            setupDel = (resp.data.setup + "\n" + resp.data.delivery);
        }

        let finalJoke = "";
        if(joke == ""){
            finalJoke = setupDel;
        } else {
            finalJoke = joke;
        }

        return finalJoke;
        // console.log(finalJoke);
        // console.log(setupDel);
        // console.log(joke);
        // console.log(resp);
    } catch(err) {
        console.log("Error -", err);
    }
}
