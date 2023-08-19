let btn = document.querySelector("Button");
let select = document.querySelector("select");
// let ul = document.querySelector("ul");

let div0 = document.querySelector(".op");
div0.classList.add("output");

let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
});

btn.addEventListener("click", async () => {
  let value = select.value.toLowerCase();
  let output = await getData(value);
  console.dir(output.data);
  let x = output.data;
  if (value == "books") {
    div0.innerHTML = "";
    showBooks(x);
  } else if (value == "characters") {
    div0.innerHTML = "";
    showCharacters(x);
  } else if (value == "movies") {
    div0.innerHTML = "";
    showMovies(x);
  } else if (value == "potions") {
    div0.innerHTML = "";
    showPotions(x);
  } else if (value == "spells") {
    div0.innerHTML = "";
    showSpells(x);
  } else {
    div0.innerHTML = "";
  }
});

function showBooks(list) {
  // select.innerText = "Select the Option";
  for (let i = 0; i < list.length; i++) {
    let card = `<div style="width: 280px" class="cards card">
    <img class="card-img-top image" id="image" src=${list[i].attributes.cover}/>
    <div class="card-body info" style="opacity:1">
      <h4 class="card-title title">${list[i].attributes.title}</h4>
      <h6 class="card-text author">Author: ${list[i].attributes.author}</h6>
      <h6 class="card-text date">Release Date: ${list[i].attributes.release_date}</h6>
      <h6 class="card-text page">Pages: ${list[i].attributes.pages}</h6>
    </div>
  </div>`;
    div0.innerHTML = div0.innerHTML + card;
  }
}
function showMovies(list) {
  for (let i = 0; i < list.length; i++) {
    let card = `<div style="width: 280px" class="cards card">
    ${
      list[i].attributes.poster
        ? `<img class="card-img-top image" id="image" src=${list[i].attributes.poster}/>`
        : `<img
          class="card-img-top image"
          id="image"
          src="image/movie.png"
        />`
    }

    <div class="card-body info" style="opacity:1">
      <h4 class="card-title ">${list[i].attributes.title}</h4>
      <h6 class="card-text ">Release Date: ${
        list[i].attributes.release_date
      }</h6>
      <h6 class="card-text ">Running Time: ${
        list[i].attributes.running_time
      }</h6>
      <h6 class="card-text ">Rating : ${list[i].attributes.rating}</h6>
    </div>
  </div>`;
    div0.innerHTML = div0.innerHTML + card;
  }
}

function showCharacters(list) {
  for (let j = 0; j < list.length; j++) {
    let card = `<div style="width: 280px" class="cards card">
    ${
      list[j].attributes.image
        ? `<img class="card-img-top image" id="image" src=${list[j].attributes.image}/>`
        : `<img class="card-img-top image" id="image" src="image/harrypotter.png"/>`
    }
      <div class="card-body info" style="opacity:1">
        <h4 class="card-title ">${list[j].attributes.name}</h4>
        <h6 class="card-text ">Species: ${list[j].attributes.species}</h6>
        <h6 class="card-text ">Gender: ${list[j].attributes.gender}</h6>
        <h6 class="card-text ">Born: ${list[j].attributes.born}</h6>
      </div>
    </div>`;
    div0.innerHTML = div0.innerHTML + card;
  }
}
function showPotions(list) {
  for (let j = 0; j < list.length; j++) {
    let card = `<div style="width: 280px;height:500px;" class="cards card">
    ${
      list[j].attributes.image
        ? `<img class="card-img-top image" id="image" src=${list[j].attributes.image}/>`
        : `<img class="card-img-top image" id="image" src="image/potion.jpg"/>`
    }
      <div class="card-body info" style="opacity:1">
        <h4 class="card-title ">${list[j].attributes.name}</h4>
        <h6 class="card-text ">Difficulty: ${list[j].attributes.difficulty}</h6>
        <h6 class="card-text ">Effect: ${list[j].attributes.effect}</h6>
        <h6 class="card-text ">Ingredients: ${
          list[j].attributes.ingredients
        }</h6>
      </div>
    </div>`;

    div0.innerHTML = div0.innerHTML + card;
  }
}
function showSpells(list) {
  // select.innerText = "Select the Option";
  for (let i = 0; i < list.length; i++) {
    let card = `<div style="width: 280px; height:480px" class="cards card">
    ${
      list[i].attributes.image
        ? `<img class="card-img-top image" id="image" src=${list[i].attributes.image}/>`
        : `<img class="card-img-top image" id="image" src="image/spell.jpg"/>`
    }
    <div class="card-body info" style="opacity:1">
      <h4 class="card-title title">${list[i].attributes.name}</h4>
      <h6 class="card-text author">Incantation: ${
        list[i].attributes.incantation
      }</h6>
      <h6 class="card-text date">Category: ${list[i].attributes.category}</h6>
      <h6 class="card-text page">Hand: ${list[i].attributes.hand}</h6>
    </div>
  </div>`;
    div0.innerHTML = div0.innerHTML + card;
  }
}
let url = "https://api.potterdb.com/v1/";
async function getData(value) {
  try {
    let res = await axios.get(url + value);
    return res.data;
  } catch (error) {
    console.log(error);
    return `Not found`;
  }
}
