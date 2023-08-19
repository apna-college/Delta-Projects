let url = "http://universities.hipolabs.com/search?country=India&name=";
let btn = document.querySelector("button");

// Event on button
btn.addEventListener("click",async () =>{
    let state = document.querySelector("input").value;
   let cllArr = await getColleges(state);
   show(cllArr);
});

// Function that adds data into ul list
function show(cllArr){

    let list = document.querySelector("#unorli");
    list.innerText = " ";
    for(col of cllArr){
        let li = document.createElement("li");
        li.style.color="white";
        li.innerText = col.name+" "+(col.web_pages); 
        list.appendChild(li);
        let res=document.querySelector("#result");
        res.style.display="block";
    }
}

// Function that fetch data from API
async function getColleges(state){
    try{
       
        let res =  await axios.get(url + state);
      return res.data;
    }
    catch(err){
        console.log("Error is =",err);
        return [];
    }
 
}