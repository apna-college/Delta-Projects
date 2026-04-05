let movie = document.querySelector('input');
let search = document.querySelector('button');

let title = document.querySelector('.title');
let year = document.querySelector('.year');
let type = document.querySelector('.type');
let poster = document.querySelector('img');

let movies = document.querySelector('.movies-container'); 

async function getMovie(){
    try{
        let movieName = movie.value;

        if(movieName === ""){
            alert("Please enter movie name");
            return;
        }

        let url = `https://www.omdbapi.com/?apikey=d36ffd1a&s=${movieName}`;
    
        let res = await fetch(url);
        let data = await res.json();
        movies.innerHTML = "";

        if(data.Response === "False"){
            alert("Movie not found");
            return;
        }
    
        for(let i=0;i<data.Search.length;i++){

            let imdbID = data.Search[i].imdbID;

            movies.innerHTML += `

            <div class="movie" onclick="window.open('https://www.imdb.com/title/${imdbID}')";>
            
                <div class="image-container">
                    <img src="${data.Search[i].Poster}">
                </div>
                <div class="movie-details">
                    <h3 class="title">${data.Search[i].Title}</h3>
                    <p class="year">Released on : ${data.Search[i].Year}</p>
                    <p class="type">Movie Type : ${data.Search[i].Type}</p>
                </div>
            </div>

            `;
        }
    }
    catch(e){
        movies.innerHTML="Something Went Wrong";
    }
}
search.addEventListener('click', getMovie);

document.addEventListener('keypress', function(event){
    if(event.key === "Enter"){
        getMovie();
    }
})