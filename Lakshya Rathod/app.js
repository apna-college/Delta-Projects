let btn=document.querySelector("button");
let url="http://universities.hipolabs.com/search?name=";
let ul=document.querySelector("ul");


btn.addEventListener("click",async ()=> {
    country=document.querySelector("input").value;
    getName(country);

})

async function getName(country){
    let res= await axios.get(url + country);
    ul.innerText="";
    let colList=res.data;
    for(col of colList){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        ul.appendChild(li);
    }
}








