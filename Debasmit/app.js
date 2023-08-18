let url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=";
let input = document.querySelector("input");
let btn = document.querySelector("button");
let main = document.querySelector("#main");
let select = document.createElement("select");
let arr = [];
//strMeal , strMealThumb
btn.insertAdjacentElement("beforebegin",select);

let urlCnt = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";

async function insertOptions(){
    try {
        let res = await axios.get(urlCnt);
        let countries = res.data.meals;
        for(country of countries){
            let option = document.createElement("option");
            let optionText = document.createTextNode(country.strArea);
            option.appendChild(optionText);
            option.setAttribute("value",country.strArea);
            select.append(option);
        }
    } catch (error) {
        console.log(error)
    }
}


async function getRes(){
    try {
        let country = select.value;
        let res = await axios.get(url+country);
        arr = res.data.meals;
        main.innerHTML = "";
        console.log(arr);
        for(ar of arr){
            console.log(ar.strMealThumb);
            let div = document.createElement("div");
            div.classList.add("card");
            let img = document.createElement("img");
            let p = document.createElement("p");
            p.classList.add("title");
            img.src = ar.strMealThumb;
            p.innerText = ar.strMeal;
            div.appendChild(img);
            div.appendChild(p);
            main.append(div);
        }
        input.value = "";
    } catch (error) {
        console.log(error);
    }
}

/* <div class="card">
    <img src="">
    </img>
    <p>text</p>
</div> */
insertOptions();
btn.addEventListener("click",getRes);