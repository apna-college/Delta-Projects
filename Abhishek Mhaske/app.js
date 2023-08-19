let url="https://api.dictionaryapi.dev/api/v2/entries/en/";
let btn=document.querySelector("button");

let inp1=document.querySelector("input");
let defh3=document.querySelector("h3");
let synh=document.querySelector(".synh");
let h3=document.querySelector("h3");
let def1=document.querySelector(".define");
let ul=document.querySelector("ul");

btn.addEventListener("click",async ()=>{
 let inp= inp1.value;
    inp1.value="";
    let h4=document.querySelector("h4");
    let word=await getword(inp);
    let phonetic=await getphonetic(inp);
    h4.classList.add("h3");
    h4.innerText="";
    h4.innerText=`${word}\t\t     [' ${phonetic} ']`;
    let img=document.querySelector("img");
    img.setAttribute("src","outline_volume_up_black_24dp.png");
    img.classList.add("sound");




    defh3.innerText="Noun-Defination:";
     def1.classList.add("def");
     h3.classList.add("h3");
   let meaning1=await getdefination(inp);
  
    for( let mean of meaning1){
   list=document.createElement("li")
    list.innerText=mean;
     ul.appendChild(list);
    } 
    meaning1=null;




 let ul2=document.querySelector(".ul-synh");
synh.innerText="Synonyms:";

synh.classList.add("h3");
let syno=await getsynonymus(inp);

for( let syno1 of syno){
list=document.createElement("li")
list.innerText=syno1;
ul2.appendChild(list);
} 

let anto1=document.querySelector(".anto");
let ul3=document.querySelector(".ul-anto");
anto1.innerText="Antonyms:";

anto1.classList.add("h3");
let anto=await getAntonymus(inp);

for( let anto2 of anto){
list=document.createElement("li")
list.innerText=anto2;
ul3.appendChild(list);
} 
await socialM();

let audi= document.querySelector("audio");
let img1=document.querySelector(".img1");
img1.addEventListener("click",async()=>{
  
let aud= await audioPlay(inp);

   audi.setAttribute("src",aud);
   audi.autoplay="true";
})
anto=null;
syno=null;
meaning1=null;

})


let delet=document.querySelectorAll("li");
 async function getword(inp){
     try{
     let rel=await axios.get(url+inp);
   return( rel.data[0].word);
 }
 catch{
     return [];
 }
}
 



async function getphonetic(inp){
    try{
    let rel=await axios.get(url+inp);
  return( rel.data[0].phonetic);
}
catch{
    return [];
}
}



async function getdefination(inp){
    try{
  let arr=[];
    let rel=await axios.get(url+inp);
    let leng1=await rel.data[0].meanings[0].definitions.length;
    for(let j=0;j<leng1;j++){
     arr.push(rel.data[0].meanings[0].definitions[j].definition);
   }
 return arr;
}
catch{
    return [];
}
}




async function getsynonymus(inp){
  try{
let arr2=[];
  let rel=await axios.get(url+inp);
  let leng1=await rel.data[0].meanings[0].synonyms.length;
  for(let j=0;j<leng1;j++){
   arr2.push(rel.data[0].meanings[0].synonyms[j]);
 }
return arr2;
}
catch{
  return [];
}
}



async function getAntonymus(inp){
  try{
let arr2=[];
  let rel=await axios.get(url+inp);
  let leng1=await rel.data[0].meanings[0].antonyms.length;
  for(let j=0;j<leng1;j++){
   arr2.push(rel.data[0].meanings[0].antonyms[j]);
 }
return arr2;
}
catch{
  return [];
}
}



async function audioPlay(inp){
    try{
      let arr="";
    let rel=await axios.get(url+inp);

    let ph=await rel.data[0].phonetics;
    let leng1=await ph.length;
    for(let i=0;i<leng1;i++){
       if(rel.data[0].phonetics[i].audio==null){
        continue;
       }
       arr=(rel.data[0].phonetics[i].audio);
  }
  return arr;

   }
  

catch{
    return [];
}
}


let i1=document.querySelector("#i1");
let i2=document.querySelector("#i2");
let i3=document.querySelector("#i3");
let i4=document.querySelector("#i4");
let social=document.querySelector(".social");
async function socialM(){
  social.classList.add("social_media");
   i1.setAttribute("class","fa-brands fa-facebook");
   i2.setAttribute( "class","fa-brands fa-twitter");
   i3.setAttribute("class","fa-brands fa-instagram");
   i4.setAttribute("class","fa-brands fa-youtube");
}
