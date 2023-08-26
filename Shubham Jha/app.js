let result=document.querySelector(".result");
let searchBtn=document.querySelector("#search-btn");

let input=document.querySelector("#user-inp");

let url="https://www.themealdb.com/api/json/v1/1/search.php?s=";


async function getFood()
{
    try
    {
        let res=await axios.get(url+input.value);
        // console.log(res.data.meals[0].strMeal);
        let name=res.data.meals[0];
        
        let area=res.data.meals[0].strArea;
        let instruction=res.data.meals[0].strInstructions;
        console.log(name);
        console.log(area);
        console.log(instruction);
        let count=1;
        let ingredients=[];
        for(let i in res.data.meals[0])
        {
            let ingredient="";
            let measure="";
            if(i.startsWith("strIngredient") && name[i])
            {
                ingredient=name[i];
                measure=name['strMeasure' +count];
                count +=1;
                // console.log(ingredient,measure);
                ingredients.push(`${measure} ${ingredient}`);
            }
        }
        console.log(name.strMealThumb);
        
        result.innerHTML=`<img src=${name.strMealThumb}>
        <div class="details"> 
            <h2>${name.strMeal}</h2>
            <h4>${name.strArea}</h4>
        </div>
        <div id="ingredient-con"> 
        
        
        </div>
        <div id="recipe"> 
            <button id="hide-recipe">X</button>
            <pre id="instructions">${name.strInstructions}  </pre>
        
        </div>
        <button id="show-recipe">View Recipe </button>
        

        `;

        let ingredientCon=document.querySelector("#ingredient-con");
        let parent=document.createElement("ul");
        let recipe=document.querySelector("#recipe");
        let hideRecipe=document.querySelector("#hide-recipe");
        let showRecipe=document.querySelector("#show-recipe");


        ingredients.forEach((i)=>
        {
            let child=document.createElement("li");
            child.innerText=i;
            parent.appendChild(child);
            ingredientCon.appendChild(parent);

        });

        hideRecipe.addEventListener("click",()=>
        {
            recipe.style.display="none";
        });
        showRecipe.addEventListener("click",()=>
        {
            recipe.style.display="block";
        });

    }
    catch(e)
    {
        console.log("error is :",e);
    }

}

searchBtn.addEventListener("click", async()=>
{
    getFood();
});