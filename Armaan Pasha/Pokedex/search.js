let searchResultContainer = document.querySelector('#searchResults')
let searchInput = document.querySelector('#search');
let body = document.querySelector('body');
let visibleList = [];

searchInput.addEventListener('keydown', (e)=> {
    if(e.key == "Enter") {
        let resultList = document.querySelectorAll('.results');
        // console.log(resultList)
        currentPokeIndex = parseInt(resultList[0].id);
        searchInput.value = "";
        searchResultContainer.innerHTML = "";
        pokeData()
    }
})

searchInput.addEventListener('input', (event) => {
    value = event.target.value;
    visibleList = [];
    nameList.forEach(name => {
        const isVisible = name.includes(value)
        if(isVisible) {
            visibleList.push(name)
        }
    })

    searchResultContainer.innerHTML = "";

    for(i=0;i<=3;i++) {
        newElement = document.createElement("div");
        indexOfSearchPoke = nameList.indexOf(visibleList[i]);
        currentPokeId = indexOfSearchPoke + 1 + "";
        newElement.setAttribute("class", "results")
        newElement.setAttribute("id", indexOfSearchPoke)
        if(currentPokeId!=0) {
            newElement.innerHTML = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentPokeId}.png" alt="picture" class="pokeImgSmall"><p>${nameList[indexOfSearchPoke]}</p>`
            searchResultContainer.append(newElement)
        }
        // console.log(currentPokeId)
      }

    visibleList.sort()
})

body.addEventListener("click", (e) => {
    if(e.target.className != "results" && e.target.id != "search") {
        searchResultContainer.innerHTML = "";
    } 
    else {
        if (e.target.className == "results") {
            currentPokeIndex = parseInt(e.target.id);
            searchInput.value = "";
            pokeData()
            searchResultContainer.innerHTML = "";
        }
    }
})