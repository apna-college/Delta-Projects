let para = document.querySelector('#paragraph2');
let btn = document.querySelector('button');
let para2 = document.querySelector('#paragraph');

async function getJokes(){
    let res = await fetch("https://official-joke-api.appspot.com/random_joke");
    let data = await res.json();
    console.log(data);
    para.innerHTML = `<b style="color: red;">setup: </b><i>${data.punchline}</i>`
    para2.innerHTML = `<b style="color: red;">punchline: </b><i>${data.setup}</i>`
}