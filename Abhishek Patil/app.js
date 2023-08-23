
let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let word = document.querySelector("#entry").value;
let btn = document.querySelector("button");
let p1 = document.querySelector("#part-of-speech");
let p2 = document.querySelector("#synonyms");
let p3 = document.querySelector("#meaning");
let h3 = document.querySelector("h2");
btn.addEventListener("click",async()=>{
    try{
        h3.innerText="";
        p1.innerText="";
        
        p2.innerText="";
        
        p3.innerText="";
        let word = document.querySelector("#entry").value;
        h3.innerText=word;
        let w = document.querySelector("#entry");
        w.value="";
        let info = await getMeaning(word);
        await setImage(word);

        let part =(info[0].meanings[0].partOfSpeech);
        let synonym=(info[0].meanings[0].synonyms[0]);
        let meaning =(info[0].meanings[0].definitions[0].definition);
        
        
        p1.innerText=`Part of Speech : ${part}`;
        
        p2.innerText=`Synonym : ${synonym}`;
        
        p3.innerText=`Meaning : ${meaning}`;
    }catch{

        p1.innerText="Please enter valid word !";
    }

})
async function getMeaning(word){
    try{
        let result = await axios.get(url+word);
        return result.data;
    }
    catch(e){
        console.log("Error",e);
    }
}





const accessKey="U5TjZxMjhUx465d6ma8mOwtBVd35NhQT4-yCf__aKBY";

async function setImage(word){
    let img_url = `https://api.unsplash.com/search/photos?page=1&query=${word}&client_id=${accessKey}`;
    try{
        let result = await axios.get(img_url);

        for(let i = 1;i<=2;i++){
            let img_url =  result.data.results[i].urls.small;
       
            let img = document.querySelector(`#img${i}`);
            img.setAttribute("src",img_url);
        }
    }
    catch{
        for(let i = 1;i<=2;i++){
            
            
            let img = document.querySelector(`#img${i}`);
            img.setAttribute("src","");
        }
    }


}

