// changing batch name ===
const dynamicText=document.querySelector(".auto-generate");
const words=["Alpha - DSA","Delta - Web Development","Sigma - DSA & Web Development"];

let wordIndex=0;
let charIndex=0;
let isDeleting=false;
const typeEffect=()=>{
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0,charIndex);
    dynamicText.textContent=currentChar;
    if(!isDeleting && charIndex < currentWord.length){
        charIndex++;
        setTimeout(typeEffect ,200)
    }
    else if(isDeleting && charIndex > 0){
        charIndex--;
        setTimeout(typeEffect ,200)
    }
    else{
        isDeleting = !isDeleting;
        wordIndex =!isDeleting ?(wordIndex + 1)% words.length:wordIndex;
        setTimeout(typeEffect,500)
    }
}
typeEffect();



// === numbers ===
let p=document.getElementById("p1");
for(let i=0;i<=4000000;i+=40){
  

      if(i<=4000000){ 
       setTimeout(()=>{
        p.innerText=`${i} +`;
      
       },100);
       
    }
   
}
let p2=document.getElementById("p2");
for(let i=1;i<=3;i++){
  

      if(i==1){ 
       setTimeout(()=>{
        p2.innerText=`${i} CRORE +`;
      
       },200);}
      if(i==2){ 
       setTimeout(()=>{
        p2.innerText=`${i} CRORE +`;
      
       },1000);}
      if(i==3){ 
       setTimeout(()=>{
        p2.innerText=`${i} CRORE +`;
      
       },2000);
      }
    
       
    
   
}
let p3=document.getElementById("p3");
for(let i=1;i<=10000;i++){
  

      if(i<=10000){ 
       setTimeout(()=>{
        p3.innerText=`${i} +`;
      
       },1000);}
       
}
