
const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13/city?q=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4d08015187msh01c8cc6a2001936p145e9ajsnb9d9d003df71',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
let btn = document.querySelector("#btn");
btn.addEventListener("click",async() => {
    
    let city = document.querySelector("input").value;
    document.querySelector("input").value = "";
  let data =  await weatherRes(city);
  console.log(data);
  
showWeather(data);
})
function showWeather(data) {
      let div= document.querySelector(".temp");
         console.log(data.current.temp_c)
         let h1 = document.querySelector("#h1");
         let h4 =  document.querySelector("h4");
         let img = document.querySelector("#img");
         let h3 = document.querySelector("h3");
         h3.innerText = data.location.name;
         h1.innerHTML = `  ${data.current.temp_c} <span>&deg;c</span> `;
         h1.style.fontWeight = "450";
         
         img.setAttribute("src",data.current.condition.icon);
         h4.innerHTML = "&nbsp; &nbsp;"+data.current.condition.text;
        
         div.appendChild(h1)
         div.appendChild(h4);
         div.appendChild(img);
       
}
async function weatherRes(city) {
try {
	const response = await fetch(url+city, options);
	const result = await response.json();
	return result;
   
} catch (error) {
	console.error(error);
}
}