let url = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=";
let btn = document.querySelector("button");

// Event that will be perform when the button is clicked
btn.addEventListener("click", async () =>{
    let name = document.querySelector("input").value;
    let product= await proinfo(name);
   show(product);
});

// function that will iterate over the element and print only the revelant data
function show(product){
let div=document.querySelector("#app");
    let ul = document.querySelector("ul");
    ul.innerText = " ";
    for(pp of product){
       div.style.padding="2rem";
        let li= document.createElement("li");
        li.classList.add("alllist");
       li.innerHTML=`<br><span style="color:#40F8FF;"> Name:</span>${pp.name}  <br><br> 
       <span style="color:#40F8FF;"> Description:</span> ${pp.description} <br><br> 
       <span style="color:#40F8FF;"> Created-at:</span>${pp.created_at} <br><br>
        <span style="color:#40F8FF;"> Updated-at:</span>:${pp.updated_at} <br><br> 
        <span style="color:#40F8FF;"> Product-link:</span>: ${pp.product_link} }<br><br> 
         <span style="color:#40F8FF;"> Website-link::</span> ${pp.website_link}`;
        ul.appendChild(li);
         let img=document.createElement("img");
        img.setAttribute("src",pp.image_link);
        li.insertAdjacentElement("afterbegin",img);
        img.classList.add("images");
    }
}

// Accessing the data from API
async function proinfo(name){
    try{
    let res = await axios.get(url + name);
    return res.data;
    }
    catch(err){
        return err;
    }
}