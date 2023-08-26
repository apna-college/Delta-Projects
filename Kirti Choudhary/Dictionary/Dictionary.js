let url="https://api.dictionaryapi.dev/api/v2/entries/en/";

let inp=document.querySelector("input");
let btn=document.querySelector(".btn");
let list= document.querySelector(".list");

let rand=Math.floor(Math.random()*2);

btn.addEventListener("click",async ()=>{

        let ans = inp.value;
        console.log(ans)

        let meaning= await getInfo(ans);
        console.log(meaning);

        let li= document.createElement("li");
        li.innerText=ans+" : "+meaning;
        list.appendChild(li);

        let p=document.querySelector("p");
        p.innerText="Try searching other words....";

        reset();


});

async function getInfo(word){

    try{
        let res= await axios.get(url+word);
        console.log (res.data[0].meanings[0].definitions[rand].definition);
        return res.data[0].meanings[0].definitions[rand].definition;
    }catch(e){
        return e;
    }
};

function reset(){
    rand=Math.floor(Math.random()*2);
}
