
let btn=document.querySelector("button");
let h1=document.querySelector(".meaning1 h1");
let h5=document.querySelector(".meaning1 h5");
let body=document.querySelector("body");

// let p1=document.querySelector(".meaning1 .pOs");


btn.addEventListener("click",async()=>{   
    
 let res2=await callApi();
 
 console.log(res2);
 h1.innerText=` Word : "${res2[0].word}"`;
  let meanings=res2[0].meanings;
  let phonetic=res2[0].phonetics;
  console.log(phonetic);
  show(meanings);
  listen(phonetic);
})


function show(meanings){
    for(let i=0;i<meanings.length;i++){
         
        h5.innerText=` Definiton : ${(meanings[i].definitions[0].definition)}`;
        let p1=document.querySelector(".pOs");
        p1.innerText=`Part Of Specch : ${(meanings[i].partOfSpeech)}`;
        
        let div1=document.createElement("div");
        let synArr=(meanings[i].synonyms);
        let h6 =document.createElement("h3");
        h6.innerText="The Synonyms Word Are :"
        div1.appendChild(h6);
       

        if(synArr.length==0)
            {
            let li2=document.createElement("li");
                li2.innerText=` ----No Synonyms Words----`;
                div1.appendChild(li2);
               
                body.appendChild(div1);
        }
        else{
            for(let i=0;i<synArr.length;i++){
                let li2=document.createElement("li");
                li2.innerText=` ${synArr[i]}`;
               
                div1.appendChild(li2);
                body.appendChild(div1);
            }
        }
       
        // synonyms v ek array ke form me aata hai

        let definitions=(meanings[i].definitions);
        let div3=document.createElement("div");
        let h4=document.createElement("h2");
        h4.innerText=`${i+1} Part Of Speech "${meanings[i].partOfSpeech}"`;
        div3.classList.add("div3")
        div3.appendChild(h4);
        body.appendChild(div3);
        (meanings[i].partOfSpeech);
        show2(definitions); 
        // yaha se hamare pass fir se ek array aayega;
       
    }
}





function show2(definitions){
   let div2=document.createElement("div");
   
   
   let i=1;
    let h3=document.createElement("h3");
    h3.innerText=`Definintons & Examples ...`
    div2.appendChild(h3);
    let ul=document.createElement("ul");
  
    for(definition of definitions){
       

       
        let li =document.createElement("li");
        li.innerText=`definition ${i} : ${definition.definition}`;
        ul.appendChild(li);
        div2.appendChild(ul); 
        let  li2 =document.createElement("li");
        li2.innerText=`Example : ${definition.example}`;
        li2.classList.add("new")
         if(li2.innerText==undefined)
            {
            li2.innerText=`example : unavailable`;
            ul.appendChild(li2);
            div2.appendChild(ul); 
         }
         else{
            ul.appendChild(li2);
            div2.appendChild(ul); 
           
         }

         
         i++;
    }


    let hr=document.createElement("hr");
    body.appendChild(div2);



}

// error -----your browser not supported audio element------

// function listen(phonetic){
//       for(let i=0;i<1;i++){
//         console.log("hello");
//         console.log(phonetic[i].audio);
//         let audio=document.createElement("audio");
//         let sourc=document.createElement("source");
//         sourc.setAttribute("src","phonetic.audio");
//         audio.setAttribute("type","mp3")
//         audio.appendChild(sourc);
//         body.appendChild(audio);
//       }
// }





async function callApi(word){
     let inp=document.querySelector("input");
     word=inp.value;
     let url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    
   
    let res=await axios.get(url);
    return res.data
  
}


