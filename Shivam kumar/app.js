let btn = document.querySelector("button");
btn.addEventListener("click",async()=>{
   let state = document.querySelector("input").value;
   let colArr = await getCollege(state)
   console.log(state);
    show(colArr)
})
    function show(colArr){
        let list = document.querySelector("#list")
        list.innerText = ""
        for(col of colArr){
            console.log(col.name)
            let li = document.createElement("li");
            li.innerText = col.name;
            list.appendChild(li)
        }
    }
let url ="http://universities.hipolabs.com/search?country=india&name=";



async function getCollege(state){
    try{
    let res = await axios.get(url+state);
   return res.data
    }
    catch(e){
        console.log("Error :" ,e);
        return " Page not found"
    }
}





