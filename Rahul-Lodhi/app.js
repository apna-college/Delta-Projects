
let btn=document.querySelector("button");
let body=document.querySelector("body");
let main=document.querySelector(".mainContent");


// adding a eventListener to call the api's

btn.addEventListener("click",async()=>{   
    
    let child=document.querySelector(".mainContent");
    child.innerHTML="";
   
   


    let res2=await callApi();
    
    console.log(res2);

    let meaning=document.createElement("div");
    meaning.classList.add("meaning1");
    let h1=document.createElement("h1");
    h1.classList.add("word");
    h1.innerText=` Word : "${res2[0].word}"`;
    meaning.appendChild(h1);
    main.appendChild(meaning);

     let meanings=res2[0].meanings;
     let phonetic=res2[0].phonetics;
     console.log(phonetic);
     show(meanings);


//   listen(phonetic);
let inpval=document.querySelector("input");
inpval.value="";
})



// function show that print the definitions of word...

function show(meanings){
    for(let i=0;i<meanings.length;i++){
        if(i==0){
            for(j=0;j<1;j++){

                let h5=document.createElement("h4");
                h5.classList.add("definition");
                h5.innerText=` Definiton : ${(meanings[i].definitions[0].definition)}`;
        
                let meaning=document.querySelector(".meaning1");
                meaning.appendChild(h5);
                main.appendChild(meaning);
    
            }

        }
       

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
                main.appendChild(div1);
              
        }
        
        else{
            for(let i=0;i<synArr.length;i++){
                let li2=document.createElement("li");
                li2.innerText=` ${synArr[i]}`;
               
                div1.appendChild(li2);
                main.appendChild(div1);
            }
        }
       
        // synonyms v ek array ke form me aata hai

        let definitions=(meanings[i].definitions);
        let div3=document.createElement("div");
        let h4=document.createElement("h2");

        h4.innerText=`${i+1} Part Of Speech "${meanings[i].partOfSpeech}"`;
        div3.classList.add("div3")
        div3.appendChild(h4);
        main.appendChild(div3);
        (meanings[i].partOfSpeech);
        show2(definitions); 
        // yaha se hamare pass fir se ek array aayega;
       
    }
}



// function that show the examples of words...

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
    main.appendChild(div2);



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


