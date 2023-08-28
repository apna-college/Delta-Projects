// let url = "https://www.reddit.com/r/Wallstreetbets/top.json"; //o

async function redditInfo(url){
    try{
        let res = await axios.get(url);
        return res.data.data.children;
    }catch(err){
        return ("The error is :",err);
    }
}
// title and url inside the object inside the array.

let body = document.querySelector("body");

async function showAll(url){

    let bigdiv = document.createElement("div");
    bigdiv.classList.add("main");
    body.appendChild(bigdiv);

    let loopInfo = await redditInfo(url);
    console.log(loopInfo);
    
    for (info of loopInfo){
        let div = document.createElement("div");
        let h5 = document.createElement("h5");
        let img = document.createElement("img");
        let anchor = document.createElement("a");

        div.classList.add("small-div")

        let element = await info;

        h5.innerText = element.data.title;
        img.setAttribute("src",element.data.url);
        img.setAttribute("alt"," Written content:");
        anchor.innerText = element.data.url;
        anchor.setAttribute("href",element.data.url);

        bigdiv.appendChild(div);
        div.appendChild(h5);
        div.appendChild(img);
        div.appendChild(anchor);

        console.log(element.data.title);
        console.log(element.data.url);
    }
}


// changing the button's color
let btn1 = document.querySelector(".top");

let bg = ["hotpink","green","#343434","crimson"];
let fg = ["#fff","#fff","#fff","whitesmoke"];

function changeCol(){
    let limit = bg.length;
    let indCol = Math.floor(Math.random()*limit);
    return indCol;
}

btn1.addEventListener("click",()=>{

    url = "https://www.reddit.com/r/Wallstreetbets/top.json"; //n

    try{
        let bigdiv = document.querySelector(".main");
        body.removeChild(bigdiv)
    }catch(err){
        console.log("Nothing to remove yet.")
    }


    console.log("btn was clicked!")
    let theColo = changeCol();              
    btn1.style.color = fg[theColo];
    btn1.style.backgroundColor = bg[theColo];

    showAll(url); //n
});


let btn2 = document.querySelector(".hot");

btn2.addEventListener("click",()=>{

    url = "https://www.reddit.com/r/Wallstreetbets/hot.json"; //n

    try{
        let bigdiv = document.querySelector(".main");
        body.removeChild(bigdiv)
    }catch(err){
        console.log("Nothing to remove yet.")
    }


    console.log("btn was clicked!")
    let theColo = changeCol();              
    btn2.style.color = fg[theColo];
    btn2.style.backgroundColor = bg[theColo];

    showAll(url); //n
});
