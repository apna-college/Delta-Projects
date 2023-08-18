let url1 = "https://official-joke-api.appspot.com/random_joke";
let url2 = "https://api.themotivate365.com/stoic-quote";


let started = false;
let butt = 0;
document.addEventListener("click",function(){
    if(started==false){
        console.log("Game started!");
        started = true;
    }
});
let p = document.createElement("p");
// let li1 = document.createElement("li");
let li1 = document.createElement("li");
let a = document.createElement('p');
let div = document.querySelector('.in');
let d = document.querySelector(".para");
let li2 = document.createElement("li");
function reset(){
    started = false;
    butt = 0;
    p.remove();
    li1.remove();
    li2.remove();
    a.remove();
    d.remove();
}
let btn = document.querySelector("button")
btn.addEventListener("click",async ()=>{
    if(butt!=0){
        reset();
    }
    butt++;
    console.log("button was clicked.")
    a.innerText = "I think you are smart enough to understand quotes.";
    div.prepend(a);
    let inp2 = document.querySelector("#inp2").value;
    if(inp2=='M' || inp2=='m'){
        check2(url2);
    }
    else{
        check(url1);
    }
});
async function display2(ans){
    
    p.innerText = ans.setup;
    div.appendChild(p);
    p.innerText = ans.punchline;
    div.appendChild(p);
}
// async function display1(ans){
//     let li = document.createElement("li");
//     li.innerText = ans.setup;
//     div.appendChild(li);
// }
async function check(url){
    try{
        let res1 = await axios.get(url);
        console.log(res1.data.setup);
        console.log(res1.data.punchline);
        li1.innerText = res1.data.setup;
        d.append(li1);
        li2.innerText = res1.data.punchline;
        d.append(li2);
        div.appendChild(d);
        console.log( res1.data);
    }
    catch(e){
        console.log(`error - `,e);
    }
}
async function check2(url){
    try{
        let res1 = await axios.get(url);
        console.log(res1.data.content);
        li1.innerText = res1.data.quote;
        d.append(li1);
        div.appendChild(d);
        console.log(res1.data);
    }
    catch(e){
        console.log(`error - `,e);
    }
}