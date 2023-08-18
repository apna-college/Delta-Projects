let link = "http://universities.hipolabs.com/search?&country=india&name="

let btn = document.querySelector("button");
let inpWord = document.getElementById("inp-word");
let container = document.querySelector(".container")
btn.addEventListener("click", async()=>{  
    let state = document.querySelector("input").value
    console.log(state)
  
    let colleges = await getColleges(state);
    console.log(colleges);  
})

async function getColleges(state){
    try{         
        let res = await axios.get(link+state);
        let data = res.data;

        let list = document.querySelector("#list");
        list.innerText = "";

        for(col of data){
            console.log(col.name)                   
            let li = document.createElement("li")
            li.innerText = col.name;
            list.appendChild(li)
        }      
        
    } catch(error){
       console.log(error)
       } 
}
console.log(getColleges())

