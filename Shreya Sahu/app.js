let inp = document.querySelector("input");
let btn = document.querySelector("#btn");
let resultDiv = document.querySelector(".result");


btn.addEventListener("click", (e) => {
  // e.preventDefault();
  console.log("btn clicked");
  getword(inp.value);
});

const getword = async (word) => {
  try {
    
  
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );
  const data = await response.json();
  let definitions=data[0].meanings[0].definitions[0];
  resultDiv.innerHTML = `
  <h2><strong>Word : </strong>${data[0].word}</h2>
  <i>${data[0].meanings[0].partOfSpeech}</i>
  <p><strong>Meaning:</strong>${definitions.definition=== undefined ? "Not Found" :definitions.definition}</p>
  <p><strong>Example:</strong>${definitions.example=== undefined ? "Not Found" :definitions.example}</p>
  <span><strong>Antonymns:</strong></span>
  
  
  `;
  //Feching antonyms:
  if(definitions.antonyms.length===0){
    resultDiv.innerHTML +='<span>Not Found</span>';
  }
  for (let i = 0; i < definitions.antonyms.length; i++) {
    resultDiv.innerHTML +=`<span><li>${definitions.antonyms[i]}</li></span>`
    
  }
//   Adding source to read more about the word:
resultDiv.innerHTML+=`<div><a href=${data[0].sourceUrls}>Read more</a></div>`;
  console.log(data);
} catch (error) {
    resultDiv.innerHTML=`<p>Sorry :( , Word not found</p>`
   console.log("Sorry :( , Word not found");   
}


};
