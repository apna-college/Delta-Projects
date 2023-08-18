let btn = document.querySelector("button");
let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let inp = document.querySelector("input");
let ull = document.querySelector("ul");

btn.addEventListener("click", async ()=>{
    ull.innerHTML = "";
    try{
    let res = await axios.get(url+inp.value);
    for(mean of res.data){
        for(mean2 of mean.meanings){
            let h1 = document.createElement("h1");
            let list = document.createElement("li");
            h1.innerHTML = "Part of Speech : ";
            h1.innerHTML = h1.innerHTML + mean2.partOfSpeech;
            list.appendChild(h1);
            ull.appendChild(list);
            let unorderList = document.createElement("ul");
            list.appendChild(unorderList);
            console.log(mean2);
            for(def of mean2.definitions){
                let list2 = document.createElement("li");
                list2.setAttribute("class","liItems")
                list2.innerHTML = def.definition;
                unorderList.appendChild(list2);
                if(def['example']!=undefined){
                    let example = document.createElement("p");
                    example.innerHTML = "Example : ";
                    example.innerHTML = example.innerHTML + def.example ;
                    list2.appendChild(example);
                }
            }

        }
    }
    } catch(err){
    return "Error found" + err;
}
})

