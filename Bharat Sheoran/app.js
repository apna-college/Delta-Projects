

let iSearchBook = document.querySelector("#searchBook");
let bSearchBook = document.querySelector("#btnSearchBook");
let searchResult = document.querySelector("#searchResult");
let sUrl = "https://openlibrary.org/search.json?q=";
let quoteBtn = document.getElementById("quote-btn");
let quoteOuter = document.querySelector("#quote-outer");
let quote = document.querySelector("#quote");
let potter = document.querySelector(".potter");

let sInput = document.querySelector(".input");
let sBtn = document.querySelector(".sbtn");
let dictionarylayot = document.querySelector(".dictionary");

let potterUrl = "https://api.potterdb.com/v1/books";

let catUrl = "https://catfact.ninja/fact";
let factOnlyCat = document.querySelector(".fact-only-cat");


let searchBook = async ()=>{
    try{
        let resp = await axios.get(sUrl + iSearchBook.value);
        return resp.data.docs;
    }catch(e){
        return e;
    }
}

bSearchBook.addEventListener("click" , async ()=>{
    let sResult = await searchBook();
    
    for(let i = 0; i < sResult.length; i++){
        searchResult.append(cardContent(sResult , i));
    }
})

let cardContent = (sResult , i)=>{
    let card = document.createElement("div");
    card.classList.add("card");

    let mainHeadCard = document.createElement("div");
    mainHeadCard.classList.add("mainHeadCard");
    let title = document.createElement("h2");
    title.innerText = sResult[i].title;
    mainHeadCard.append(title);
    let author = document.createElement("h4");
    author.innerText = sResult[i].author_name[0];
    mainHeadCard.append(author);

    card.append(mainHeadCard);

    let info = document.createElement("div");
    info.classList.add("contentCard");
    let published = document.createElement("p");
    published.innerText = "Publish: " + sResult[i].first_publish_year;
    info.append(published);
    let ratings = document.createElement("p");
    ratings.innerText = "Ratings:" + sResult[i].ratings_average + " (" + sResult[i].ratings_count + ")";
    info.append(ratings);

    card.append(info);
    return card;
}


quoteBtn.addEventListener("click" , ()=>{
    if(quoteOuter.style.display !== "none"){
        quoteOuter.style.display = "none";
    }else{
        quoteOuter.style.display = "flex";
    }
})

let qurl = "https://quote-garden.onrender.com/api/v3/quotes";
let dayQuote = async()=>{
    try{
        let qResult = await axios.get(qurl);
        quote.innerText = qResult.data.data[0].quoteText;
    }catch(e){
        return "Error";
    }
}

dayQuote();

let potterBook = async()=>{
    try{
        let potterResult = await axios.get(potterUrl);
        for(let i = 0; i < 7; i++){
            potter.append(potterCard(potterResult , i));
        }
    }catch(e){
        return "Error";
    }
}



let potterCard = (potterResult , i)=>{
    let cardPotter = document.createElement("div");
    cardPotter.classList.add("card-potter");

    let cardPotterInfo = document.createElement("div");
    cardPotterInfo.classList.add("card-potter-info");
    cardPotterInfo.style.background = `url(${potterResult.data.data[i].attributes.cover})`;
    cardPotterInfo.style.backgroundSize = "cover";

    let title = document.createElement("div");
    title.classList.add("title");

    let h3T = document.createElement("h3");
    h3T.innerText = potterResult.data.data[i].attributes.title;
    
    let pT = document.createElement("p");
    pT.innerText = potterResult.data.data[i].attributes.author;


    title.append(h3T);
    title.append(pT);

    let summary = document.createElement("div");
    summary.classList.add("summary");
    summary.innerText = potterResult.data.data[i].attributes.summary;

    cardPotterInfo.append(title);
    cardPotterInfo.append(summary);

    cardPotter.append(cardPotterInfo);
    return cardPotter;

}

potterBook();

let dicurl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let dictionary = async()=>{
    try{
        let dictianaryResult = await axios.get(dicurl + sInput.value);
        return dictianaryResult.data;
    }catch(e){
        let notFound = document.createElement("h2");
        notFound.classList.add("ml");
        notFound.innerText = "Word Not Found";
        dictionarylayot.append(notFound);
    }
}

sBtn.addEventListener("click" , async()=>{
    let dResult = await dictionary();
    

    dictionarylayot.append(resultLayout(dResult));
})

let resultLayout = (dResult)=>{
    let result = document.createElement("div");
    result.classList.add("result");

    let word = document.createElement("h3");
    word.classList.add("ml");
    word.classList.add("mt");
    word.innerText = "Word: " + dResult[0].word;

    let audio = document.createElement("audio");
    audio.setAttribute("controls" , "");
    audio.classList.add("ml");
    audio.classList.add("audio");
    audio.src = dResult[0].phonetics[0].audio;

    let meaning = document.createElement("p");
    meaning.classList.add("ml");
    meaning.innerText = "Meaning: " + dResult[0].meanings[0].definitions[0].definition;

    let pos = document.createElement("p");
    pos.classList.add("ml");
    pos.innerText = "Parts of Speech: " + dResult[0].meanings[0].partOfSpeech;

    result.append(word);
    result.append(audio);
    result.append(meaning);
    result.append(pos);
    return result;
}

let catFact = async ()=>{
    try{
        let catFactResp = await axios.get(catUrl);
        factOnlyCat.innerText = catFactResp.data.fact;
    }catch(e){
        return "Error";
    }
}

catFact();



