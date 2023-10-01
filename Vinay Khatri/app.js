let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let btn = document.querySelector("button");
let list = document.querySelector(".dict");

let url2 = "https://random-word-api.herokuapp.com/word";
let wodW = document.querySelector('h2');
let wodL = document.querySelector('.wodL');

async function wod(){
    try{
        let word = await axios.get(url2);
        return word.data[0];
    }
    catch(e){
        console.log(e);
        return "error";
    }
    
}

window.onload = async function(){
    let word2 = await wod();
    let mean = await searchWord(word2);
    while(mean.length==0){
        word2 = await wod();
        mean = await searchWord(word2);
    }

    wodW.innerText = word2+" :"

    for(w of mean[0].definitions){
        let li = document.createElement('li');
        li.innerText = w.definition;
        wodL.append(li);
        let hr = document.createElement("hr");
        wodL.append(hr);
    }
}

let h3 = document.querySelector("h3");
btn.addEventListener("click",async function(){

    h3.innerText = "";
    list.innerText = "";
    let word = document.querySelector("input").value;
    let wordArr = await searchWord(word);
    if(wordArr.length==0){
        h3.innerText = "This is not a word . Enter a valid word";
        return;
    }
    
    for(meani of wordArr){
            let li = document.createElement("li");
            li.innerText = meani.definitions[0].definition;
            list.append(li);
            let hr = document.createElement("hr");
            list.append(hr);
    }
    
    
})

async function searchWord(word){
    try{
        let words = await axios.get(url+word);
        return (words.data[0].meanings);
    }
    catch(e){
        return [];
    }
}