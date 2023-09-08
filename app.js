
let pokeName = document.querySelector(".name");
let btn = document.getElementById("btn");
let pokeHp = document.querySelector(".hp")
let pokeImg = document.querySelector("img");
let pokeAttack = document.querySelector(".attack-stat");
let pokeDefence = document.querySelector(".defence-stat");
let pokeSpeed = document.querySelector(".speed-stat");
let card = document.querySelector(".card")

async function getPokemon(){

    try{
        let randomId = Math.floor(Math.random() * 150) + 1;
        let url = (`https://pokeapi.co/api/v2/pokemon/${randomId}`)
        let pokemon = await axios.get(url);
        pokemonInfo(pokemon);
    }
    catch(e){
        console.log(e)
    }
}

function pokemonInfo(pokemon){
    let randomClr = Math.floor(Math.random() *255);

    let hp = pokemon.data.stats[0].base_stat;
    let pImg = pokemon.data.sprites.other.dream_world.front_default;
    let pName = pokemon.data.name;
    let statAttack = pokemon.data.stats[1].base_stat;
    let statDefence = pokemon.data.stats[2].base_stat;
    let statSpeed = pokemon.data.stats[5].base_stat;

    pokeImg.setAttribute("src", pImg)
    pokeName.innerHTML = `${pName}`;
    pokeHp.innerText = `${hp}`;
    pokeAttack.innerHTML = `${statAttack}`;
    pokeDefence.innerHTML = `${statDefence}`;
    pokeSpeed.innerHTML = `${statSpeed}`;
    card.style.background = `radial-gradient(circle at 50% 0%, rgb(${randomClr}, ${randomClr}, ${randomClr}) 41%, #ffffff 36%)`

    appendTypes(pokemon.data.types)
}

function appendTypes(types){
    types.forEach(type =>{
        let span = document.createElement("SPAN")
        span.textContent = type.type.name;
        document.querySelector(".types").appendChild(span)
    })
}



btn.addEventListener("click", getPokemon);
// window.addEventListener("load", getPokemon);

