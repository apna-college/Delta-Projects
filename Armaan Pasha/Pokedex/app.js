let pokemon = ["pichu", "pikachu", "ditto", "charizard", "charmander", "bulbasaur"];
let api;
let nameList = [];
let pokId;
let evolution;
let currentPokeName;
let pokemonData;
let evolvesToName;
let evolvedPokeId;
let halfDamageFromValue = "";
let doubleDamageToValue = "";
let doubleDamageFromValue = "";
let halfDamageToValue = ""
let img = document.querySelector('#pokemonImg');
let btn = document.querySelector('button');
let pokeName = document.querySelector('#name');
let type = document.querySelector('#type');
let evolutionNum = document.querySelector('#evolutionNum');
let HPVal = document.querySelector('#HPVal');
let atkVal = document.querySelector('#atkVal');
let defVal = document.querySelector('#defVal');
let spdVal = document.querySelector('#spdVal');
let sDefVal = document.querySelector('#sDefVal');
let sAtkVal = document.querySelector('#sAtkVal');
let HPBar = document.querySelector('#HPBar');
let atkBar = document.querySelector('#atkBar');
let defBar = document.querySelector('#defBar');
let spdBar = document.querySelector('#spdBar');
let sDefBar = document.querySelector('#sDefBar');
let sAtkBar = document.querySelector('#sAtkBar');
let dummyBar = document.querySelector('.barContainer')
let pokeHolder = document.querySelector('#pokemonHolder');
let miniColorLineOnName = document.querySelector('#miniColorLineOnName');
let miniColorLineOnInfo = document.querySelector('#miniColorLineOnInfo');
let strength = document.querySelector('#strengths');
let weakness = document.querySelector('#weakness');
let resistant = document.querySelector('#resistant');
let vulnerable = document.querySelector('#vulnerable');
let detailBars = [HPBar, atkBar, defBar, spdBar, sDefBar, sAtkBar, miniColorLineOnName, miniColorLineOnInfo]
let evolutionNumValue = 1;
let currentPokeIndex = 24;
let pokeTypes = {
    fire: "#FF3331",
    grass: "#0bff75",
    water: "#37B5FF",
    rock: "#A6A5A6",
    psychic: "#CB6CE3",
    electric: "#FFDF59",
    fairy: "#ee99ac",
    normal: "#a8a878",
    flying: "#a890f0",
    dark: "#705848",
    poison: "#A040A0",
    ghost: "#705898",
    bug: "#a8b820",
    ground: "#e0c068",
    fighting: "#c03028",
    ice: "#98d8d8",
    steel: "#b8b8d0",
    dragon: "#7038f8",
}

//assigning random value to currentPokeIndex
function newPokeOnReload() {
    currentPokeIndex = Math.floor(Math.random()*1000) + 9;
}
newPokeOnReload()

//pokemon data
function pokeData() {
    const pokemonDataUrl = `https://pokeapi.co/api/v2/pokemon/${currentPokeIndex + 1}`;
    axios.get(pokemonDataUrl)
        .then((res)=> {
            pokemonData = res.data
            // console.log(pokemonData)
            pokId = pokemonData.id + ""
            //parsing the value of pokemon ID correctly
            if(pokId.length==1) {
                pokId = `00${pokId}`
            } else if(pokId.length==2) {
                pokId = `0${pokId}`
            }
            imgURL = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokId}.png`
            img.setAttribute("src", imgURL);

            const pokeSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonData.id}`
            axios.get(pokeSpeciesUrl)
            .then((res) => {
                return pokeSpecies = res.data
            })
            .then(()=> {
                const pokeEvolutionChainUrl = pokeSpecies.evolution_chain.url
                axios.get(pokeEvolutionChainUrl)
                .then((res) => {
                    return pokeEvolutionChain = res.data;
                })
                .then(() => {
                    try {if (pokeEvolutionChain.chain.species.name == currentPokeName) {
                        evolutionNumValue = 1
                        try {
                            evolvesToName = pokeEvolutionChain.chain.evolves_to[0].species.name;
                        }
                        catch {
                            evolvesToName = currentPokeName
                            console.log("Final evolution reached")
                        }
                    } else if (pokeEvolutionChain.chain.evolves_to[0].species.name == currentPokeName) {
                        evolutionNumValue = 2
                        try {
                            evolvesToName = pokeEvolutionChain.chain.evolves_to[0].evolves_to[0].species.name
                        }
                        catch {
                            console.log("Final evolution reached")
                        }
                    } else if (pokeEvolutionChain.chain.evolves_to[0].evolves_to[0].species.name == currentPokeName) {
                        evolutionNumValue = 3
                        try {
                            evolvesToName = pokeEvolutionChain.chain.evolves_to[0].evolves_to[0].evolves_to[0].species.name;
                        }
                        catch {
                            console.log("Final evolution reached")
                        }
                        
                    }}
                    catch {
                        console.log("no evolution")
                    }
                    evolutionNum.innerText = evolutionNumValue
                })
                .then(() => {
                    const evolvedPokeUrl = `https://pokeapi.co/api/v2/pokemon/${evolvesToName}`
                    axios.get(evolvedPokeUrl)
                    .then((res) => {
                        evolvedPokeData = res.data
                        evolvedPokeId = evolvedPokeData.id
                    })
                    .catch(() => {
                        console.log("final evolution")
                    })
                    
                })
                
            })
            


            function colorChange(color) {
                for(i=0; i<=detailBars.length-1; i++) {
                    detailBars[i].style.backgroundColor = pokeTypes[color];
                }
                pokeHolder.setAttribute("src", `./assets/${color}.png`)
                btn.style.border = `3px solid ${pokeTypes[color]}`;
            }
            colorChange(pokemonData.types[0].type.name.toLowerCase())


            function pokeTypeDetails() {
                pokeTypeUrl = pokemonData.types[0].type.url;
                axios.get(pokeTypeUrl)
                .then((res) => {
                    pokeType = res.data
                    pokeDamageInfo = pokeType.damage_relations
                })
                .then(() => {
                    halfDamageFrom = pokeDamageInfo.half_damage_from;
                    doubleDamageTo = pokeDamageInfo.double_damage_to;
                    doubleDamageFrom = pokeDamageInfo.double_damage_from
                    halfDamageTo = pokeDamageInfo.half_damage_to
                })
                .then(() => {
                    halfDamageFromValue = "";
                    halfDamageToValue = "";
                    doubleDamageFromValue = ""; 
                    doubleDamageToValue = "";
                    for(i=0;i<=halfDamageFrom.length-1;i++) {
                        halfDamageFromValue += `${halfDamageFrom[i].name}, `;
                    }
                    for(i=0;i<=doubleDamageTo.length-1;i++) {
                        doubleDamageToValue += `${doubleDamageTo[i].name}, `;
                    }
                    for(i=0;i<=doubleDamageFrom.length-1;i++) {
                        doubleDamageFromValue += `${doubleDamageFrom[i].name}, `;
                    }
                    for(i=0;i<=halfDamageTo.length-1;i++) {
                        halfDamageToValue += `${halfDamageTo[i].name}, `;
                    }
                })
                .then(() => {
                    //assigning resistant values
                    halfDamageFromInnerText = halfDamageFromValue.slice(0,halfDamageFromValue.length-2);
                    resistant.innerText = halfDamageFromInnerText;

                    //assigning strength values
                    doubleDamageToInnerText = doubleDamageToValue.slice(0, doubleDamageToValue.length-2);
                    strength.innerText = doubleDamageToInnerText;

                    //assigning vulnerable values
                    doubleDamageFromInnerText = doubleDamageFromValue.slice(0, doubleDamageFromValue.length-2);
                    vulnerable.innerText = doubleDamageFromInnerText;

                    //assigning weakness values
                    halfDamageToInnerText = halfDamageToValue.slice(0, halfDamageToValue.length-2)
                    weakness.innerText = halfDamageToInnerText;
                })
            }
            pokeTypeDetails()


            pokeName.innerText = pokemonData.name.toUpperCase();
            currentPokeName = pokemonData.name;
            HPVal.innerText = pokemonData.stats[0].base_stat
            atkVal.innerText = pokemonData.stats[1].base_stat
            defVal.innerText = pokemonData.stats[2].base_stat
            sAtkVal.innerText = pokemonData.stats[3].base_stat
            sDefVal.innerText = pokemonData.stats[4].base_stat
            spdVal.innerText = pokemonData.stats[5].base_stat
            HPBar.style.width = `${((parseInt(getComputedStyle(dummyBar).width) * pokemonData.stats[0].base_stat)/100)+10}px`;
            atkBar.style.width = `${((parseInt(getComputedStyle(dummyBar).width) * pokemonData.stats[1].base_stat)/100)+10}px`;
            defBar.style.width = `${((parseInt(getComputedStyle(dummyBar).width) * pokemonData.stats[2].base_stat)/100)+10}px`;
            sAtkBar.style.width = `${((parseInt(getComputedStyle(dummyBar).width) * pokemonData.stats[3].base_stat)/100)+10}px`;
            sDefBar.style.width = `${((parseInt(getComputedStyle(dummyBar).width) * pokemonData.stats[4].base_stat)/100)+10}px`;
            spdBar.style.width = `${((parseInt(getComputedStyle(dummyBar).width) * pokemonData.stats[5].base_stat)/100)+10}px`;
            type.innerText = pokemonData.types[0].type.name.toUpperCase();
        })
}

//retrieve name list of pokemons and getting and assigning pokemon values
async function nameListRetrieve() {
    // const nameListUrl = "https://pokeapi.co/api/v2/pokemon?limit=1010"
    const nameListUrl = './api.json'
        axios.get(nameListUrl)
        .then((res) => {
            nameListObject = res.data.results;
            nameListObject.forEach(name => {
                nameList.push(name.name)
            })
        })
        .then(() => {
            pokeData()
        })
        .catch(() => {
            console.log("final evolution")
        })
}
nameListRetrieve()

//removing default behaviour of form
form.addEventListener('submit', (event)=> {
    event.preventDefault();
})

//next evolution button
btn.addEventListener("click", ()=> {
    const evolutionUrl = `https://pokeapi.co/api/v2/pokemon-species/${evolvedPokeId}/`
    axios.get(evolutionUrl)
        .then (async (res) => {
            evolution = await res.data;
            return evolution
        })
        .then(async () => {
            evolveFromName = await evolution.evolves_from_species.name
            evolveToName = evolution.name
            return evolveToName, evolveFromName;
        })
        .then(() => {
            if(currentPokeName == evolveFromName) {
                currentPokeIndex = evolvedPokeId - 1;
                pokeData()
            } else {
                console.log("Final evolution reached")
            }
        })
        .catch(() => {
            console.log("Final evolution reached")
        })
})
