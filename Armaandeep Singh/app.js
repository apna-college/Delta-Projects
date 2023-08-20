let btn= document.querySelector(".btn");
let con=document.querySelector(".con");
let x=0;  // to Empty container
let valu=document.querySelector("#inp");
let ring=document.querySelector(".ring");

async function query(url){
    return  await axios.get(url);
}

async function Main(){
  if(x==-1){
   con.innerText="";  // reset pre value
  } 
   try{
   let val=valu.value;
   let url=`https://api.dictionaryapi.dev/api/v2/entries/en/${val}`;
   let ans=await query(url);
   ring.classList.add("hide");
   // POS and deginations and snonyomus
    let mean=ans.data[0].meanings;
    for(i=0;i<Object.keys(mean).length;i++)
    {
      let h2=document.createElement("h2");
      h2.innerText=mean[i].partOfSpeech;
       con.appendChild(h2);
        for(def of mean[i].definitions){
           let p=document.createElement("p");
           p.innerText=def.definition;
           con.appendChild(p);
        }
        
        
        // synonyms here dude
        let ol=document.createElement("ol");
        let hsyn=document.createElement("h2");
        for(syn of mean[i].synonyms){
          li=document.createElement("li");
          li.innerText=syn;
          ol.appendChild(li)
        }
        if(Object.keys(mean[i].synonyms).length>0){
         hsyn.innerText="Synonyms";
         con.appendChild(hsyn);
         con.appendChild(ol);
       } 
    }


    // For Pronunciations 
    let haud=document.createElement("h2");
    haud.innerText="Pronunciations";
    
    let aud=ans.data[0].phonetics;
    if(aud.length>0){
    con.appendChild(haud);  
    }
    for(a of aud){
     let voice=document.createElement("div");
     voice.innerHTML = `<audio controls src="${a.audio}"></audio>`  
     con.appendChild(voice);
    }
 

    // Sources and Footer
    let srcp=document.createElement("p");
    srcp.innerHTML=`<a href="${ans.data[0].sourceUrls[0]}" > Sources <a><hr> <p class="abt">Made by Armaan for you with 🖤<p>`
    con.appendChild(srcp);
    x=-1;
   
  }catch{
     let err=document.createElement("h2");
     ring.classList.add("hide");
     err.innerText="Bad Request Plaese Try Again With Another Word";
     con.appendChild(err);
     setTimeout(()=>{
       con.removeChild(err);
     },4000);
   }        
};

btn.addEventListener("click",async ()=>{ // By click
  ring.classList.remove("hide");
  await Main();
}); 

valu.addEventListener("keyup",async(ev)=>{   // By Enter
  if(ev.key=="Enter"){ 
    ring.classList.remove("hide"); 
    await Main();
     }
 });


