let url="https://api.dictionaryapi.dev/api/v2/entries/en/";

let btn=document.querySelector("button");

btn.addEventListener("click", async () => {
    let word=document.querySelector("input").value;
    let res=await getmeaning(word);

    let p=document.querySelector("P");
    p.innerHTML=`Meaning of <b>${word}</b> are following`;

    if(word != ""){
        let filter=" ";
// way one
         filter= res.map((entry)=>{
           return entry.meanings
            .map((meanings)=>{
              return  meanings.definitions
            })
            .flat()
         })
         .flat();

//way two
        // filter=res.map(entry => entry.meanings).flat().map(meanings => meanings.definitions).flat().filter(list => list.definition);

//way three
        // filter=res.map(entry => entry.meanings.map(list => list.definitions).flat()).flat();
        
        show(filter);
        
    }
    else{
        alert("No Word Found!..");
    }
});

function show(definitions){
let li=document.querySelector("#meaning");
    li.innerText="";
    for (i of definitions) {

        console.log(i.definition);
        let list=document.createElement("li")
        list.innerText=i.definition;
        li.appendChild(list);

    }
}

async function getmeaning(data){
    try{
        let res= await axios.get(url+data);
        return res.data;
    }
    catch(e){
        console.log("data Not Found",e);
    }
}