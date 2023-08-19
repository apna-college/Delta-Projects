let input = document.querySelector('input');
let searchbtn = document.querySelector('#searchbtn');
let randombtn = document.querySelector('#randombtn');
let cardContainer = document.querySelector('.card-container');

let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
async function getDrink(){
    let res = await axios.get(url);
    let drinksArr = res.data.drinks;
    for(drink of drinksArr){
        let card = document.createElement('div');
        card.classList.add('card');

        let img = document.createElement('img');
        img.classList.add('card-img-top');
        img.setAttribute('src', drink.strDrinkThumb);
        card.appendChild(img);


        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        card.appendChild(cardBody);
        // card.setAttribute('style',"width:18rem")

        let h5 = document.createElement('h5');
        let p = document.createElement('p');
        let cardbtn = document.createElement('button');

        h5.classList.add('card-title');
        p.classList.add('card-text');
        cardbtn.classList.add('card-btn');


        h5.innerText = drink.strDrink;
        p.innerText = drink.strAlcoholic;
        cardbtn.innerText = "View";

        cardBody.append(h5);
        cardBody.append(p);
        cardBody.append(cardbtn);


        cardContainer.appendChild(card);
    }
}

randombtn.addEventListener('click', getDrink);