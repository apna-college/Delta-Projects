async function TV(){
    let results = await fetchAPIdata('tv/popular');
    console.log(results);
    results.forEach(result => {
        let div=document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <a href="tv-details.html?id=${result.id}">
        ${
            result.poster_path ?
            `<img
            src="https://image.tmdb.org/t/p/w500${result.poster_path}"
            alt="${result.name}"
            />`:
            `
            <img
            src="../images/no-image.jpg"
            alt="${result.name}"
        />`
        }
        </a>
        <div class="card-body">
            <h5 class="card-title">${result.name}</h5>
            <p class="card-text">
                <small class="text-muted">Release: ${result.first_air_date}</small>
            </p>
        </div>
        `;

        document.querySelector('#popular-TvShows').appendChild(div);

    });
}

async function fetchAPIdata(endpoint){
    const API_KEY = '6c859f9f6d995843ddee10165ef6e65a';
    const API_URL = 'https://api.themoviedb.org/3/';

    let result = await fetch(`${API_URL}/${endpoint}?api_key=${API_KEY}`);
    const data = await result.json();
    return data.results; //pass the whiole array of tv shows 
}

document.addEventListener('DOMContentLoaded',TV());