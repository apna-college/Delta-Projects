let url="https://api.dictionaryapi.dev/api/v2/entries/en/";
let btn=document.querySelector("button");

btn.addEventListener("click",async ()=>{
    let input=document.querySelector("input");
    let word=input.value;
    let phn=await getPhonetics(word);
    printWord(word,phn);
    playSound(word);
    let partOfSpeecharr=await getPOS(word);
    let definitionsarr= await getMeaning(word);
    printMeanings(partOfSpeecharr,definitionsarr);
});
function playSound(word){
    let btn=document.createElement("button");
    btn.innerHTML='<i class="fa-solid fa-volume-high"></i>';
    let div=document.querySelector(".buttondiv");
    div.innerHTML="";
    btn.classList.add("buttondiv");
    div.appendChild(btn);
    btn.addEventListener("click",async ()=>{
        try{
            let res=await axios.get(url+word);
            let link=res.data[0].phonetics[0].audio;
            let audio=document.createElement("audio");
            audio.src=link;
            document.body.appendChild(audio);
            audio.play();
        }catch(err){
            console.log(err);
        }
    });
}
function printWord(word,phn){
    let w=document.querySelector("#word");
    w.innerText=word;
    let p=document.querySelector("#phonetic");
    p.innerText=phn;
}
function printMeanings(pos,defarrs){
    let listofMeanings=document.querySelector(".meanings");
    listofMeanings.innerText="";
    for(let i=0;i<pos.length;i++){
        let item=document.createElement("li");
        item.classList.add("bgcolor");
        item.innerText="Part of speech: "+pos[i];
        listofMeanings.appendChild(item);
        let ol=document.createElement("ol");
        ol.classList.add("bgcolor")
        ol.innerText="Definitions ->";
        item.appendChild(ol);
        for(let j=0;j<defarrs[i].length;j++){
            let olitem=document.createElement("li");
            olitem.classList.add("bgcolor");
            olitem.innerText=defarrs[i][j];
            ol.appendChild(olitem);
        }
    }
}
async function getPhonetics(word){
    try{
        let res=await axios.get(url+word);
        return res.data[0].phonetic;
    }catch(err){
        console.log(err);
    }
}
async function getPOS(word){
    try{
        let res=await axios.get(url+word);
        let len1=res.data[0].meanings.length;
        let arr=[];
        for(let i=0;i<len1;i++){
            arr[i]=res.data[0].meanings[i].partOfSpeech;
        }
        return arr;
    }
    catch(err){
        console.log(err);
    }
}
async function getMeaning(word){
    try{
        let res=await axios.get(url+word);
        let len1=res.data[0].meanings.length;
        let arr=[];
        for(let i=0;i<len1;i++){
            let len2=res.data[0].meanings[i].definitions.length;
            arr[i]=[];
            for(let j=0;j<len2;j++){
                arr[i][j]=[res.data[0].meanings[i].definitions[j].definition];
            }
        }
        return arr;
    }catch(err){
        console.log(err);
    }
    
}