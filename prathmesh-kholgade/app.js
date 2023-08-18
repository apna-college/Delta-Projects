const accesskey="Uy5aYErfmarKkEcPVKWRtsSUVBA7Xrs_3mMWSuKYpX4";
const formEl=document.querySelector("form");
const inputEl =document.querySelector("#search-input")
const searchresults=document.querySelector(".search-results")
const showmore=document.querySelector("#show-more-button");


let inputdata="";
let page =1;


async function searchimage(){
    inputdata=inputEl.value
    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accesskey}`;


    const response= await fetch(url);
    const data =await response.json();

    const results =data.results;
    
    if (page === 1){
          searchresults.innerHTML="";
    }
    results.map((result)=>{
        const imagewraper=document.createElement("div");
        imagewraper.classList.add("search-result");
        const img =document.createElement("img");
        img.src= result.urls.small;
        img.alt=result.alt_description;
        const imagelink =document.createElement("a");
        imagelink.href= result.links.html;
        imagelink.target="_blank";
        imagelink.textContent=result.alt_description;

        imagewraper.appendChild(img);
        imagewraper.appendChild(imagelink);
        searchresults.appendChild(imagewraper);

    })
    page++;
    if (page > 1){
        showmore.style.display="block";
     }

}
formEl.addEventListener("submit",(event)=>{
    event.preventDefault()
    page=1;
    searchimage()

})
showmore.addEventListener("click",()=>{
    
    
    searchimage()

})

