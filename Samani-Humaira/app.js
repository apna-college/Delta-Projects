let url= "https://api.dictionaryapi.dev/api/v2/entries/en/";
let btn=document.querySelector("button");
let list=document.querySelector("ul");

btn.addEventListener("click",async()=>{
    list.innerText= " ";
    let inp=document.querySelector("input").value;

   let ite = await getSentence(inp);
   show(ite);
});
function show(ite){
      for(arr of ite){
        
        let li=document.createElement("li");
        li.innerText=`Word: ${arr.word}`;
      list.appendChild(li);
        let meaning =  arr.meanings;
        def(meaning);
      }
}
function def(meaning){                                     
    
    
    for(arr2 of meaning){
        let li=document.createElement("li");
        li.classList.add("my");
        li.innerText=`Part-of-speech: ${arr2.partOfSpeech} `  ;      ;
        list.insertAdjacentElement("beforeend",li);
       let fed= arr2.definitions;
     
       fedd(fed);   
    }
}
let count = 0;
function fedd(fed){
    let list=document.querySelector("ul");
    for(finite of fed){
        count++;
        let li=document.createElement("li");
       li.innerText=`EX ${count}: ${finite.definition} `;
       list.appendChild(li); 
    }
}
let word=document.querySelector(".word");
word.style.display="block";

async function getSentence(inp){
    try{
   let res = await axios.get(url+inp);
   return res.data;
    }
    catch(err){
       console.log("error");
    }
}
