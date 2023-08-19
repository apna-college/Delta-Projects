let p = document.querySelector('p');
let button = document.querySelector('.btn');

button.addEventListener("click", generateJoke);


let url = "https://v2.jokeapi.dev/joke/Programming?type=single";

async function generateJoke(){
    try {
        let responce = await axios.get(url);
        let joke = responce.data.joke
        p.innerText = joke;
    } catch (error) {
        p.innerText = "joke not found"
    }
    
}