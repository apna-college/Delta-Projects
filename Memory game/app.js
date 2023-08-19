const cardArray=[
    {
        name:'c++',
        img: 'assets/c++.png'
    },
    {
        name:'css',
        img:'assets/css.avif'
    },
    {
        name:'html',
        img:'assets/html.png'
    },
    {
        name:'php',
        img:'assets/php.png'
    },
    {
        name:'python',
        img:'assets/pylogo.webp'
    },
    {
        name:'sass',
        img:'assets/sass.png'
    },
    {
        name:'c++',
        img: 'assets/c++.png'
    },
    {
        name:'css',
        img:'assets/css.avif'
    },
    {
        name:'html',
        img:'assets/html.png'
    },
    {
        name:'php',
        img:'assets/php.png'
    },
    {
        name:'python',
        img:'assets/pylogo.webp'
    },
    {
        name:'sass',
        img:'assets/sass.png'
    }
]

cardArray.sort(() => 0.5 -Math.random()); //advance shortcut to randomly sort an array
console.log(cardArray);

let grid=document.querySelector('.grid');
let score=document.querySelector('#result');
let cardsChosen=[];
let cardsIds=[];
let cardsWon=[];

function createBoard(){
    for(let i=0;i<12;i++){
        const img=document.createElement('img');
        img.setAttribute('src','assets/js.png');
        img.setAttribute('id',i);
        img.addEventListener('click',flipCard);
        grid.appendChild(img);
    }
}

function checkMatch(){
    let cards=document.querySelectorAll('img');
    let optionOneId=cardsIds[0];
    let optionTwoId=cardsIds[1];

    if(cardsIds[0]==cardsIds[1]){
        cards[optionOneId].setAttribute('src','assets/js.png');
        cards[optionTwoId].setAttribute('src','assets/js.png');
        alert("You have chosen same card!");
    }
    else if(cardsChosen[0]==cardsChosen[1]){
        cards[optionOneId].setAttribute('src','assets/white.webp');
        cards[optionTwoId].setAttribute('src','assets/white.webp');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
        cardsChosen=[];
        cardsIds=[];
        score.innerHTML=cardsWon.length;
    } else{
        cards[cardsIds[0]].setAttribute('src','assets/js.png');
        cards[cardsIds[1]].setAttribute('src','assets/js.png');
    }
    // score.innerHTML=cardsWon.length;
    cardsChosen=[];
    cardsIds=[];

    if(cardsWon.length==cardArray/2){
        score.innerHTML=`Congratulations,you've got them all!`;
    }
}
createBoard();
function flipCard(){
    console.log("clicked");
    let cardId=this.getAttribute('id');
    console.log(cardArray[cardId].name);
    cardsChosen.push(cardArray[cardId].name);
    cardsIds.push(cardId);
    this.setAttribute('src',cardArray[cardId].img);
    console.log(cardsIds);
    if(cardsChosen.length===2){
        setTimeout(()=>{
            checkMatch();
        },500)
    }
    
}