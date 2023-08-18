
let content = document.querySelector("#content");
let writer = document.querySelector("#writer")
let btn = document.querySelector(".btn")

let url = "https://api.quotable.io/random";

async function generateRandomQuote(){
    try{
        let res = await axios.get(url);
        let data = res.data 
        console.log(data)

        let quote = data.content 
        let author = data.author 
        console.log(quote, author)
        content.innerHTML = `<i class="fa-solid fa-quote-left"></i> ${data.content} <i class="fa-solid fa-quote-right"></i>`;
        writer.innerHTML = `<i class="fa-solid fa-minus"></i> ${ data.author}`
        return {quote, author}       
    }
    catch(e){
        console.log("Error is :", e);
    }
}

(async function(){
    let randomQuote = await generateRandomQuote()
    console.log(randomQuote);
})()

btn.addEventListener("click", ()=>{
    return generateRandomQuote()
})


