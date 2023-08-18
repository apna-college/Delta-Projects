async function movie(){
    let results = await fetchAPIdata('movie/popular');
    results=(results.results);
    //console.log(results);
    for(let result of results){
        const div=document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
            <a href="movie-details.html?id=${result.id}">
                ${
                    result.poster_path ?
                    `<img
                    src="https://image.tmdb.org/t/p/w500${result.poster_path}"
                    alt="${result.title}"
                    />`:
                    `
                    <img
                    src="../images/no-image.jpg"
                    alt="${result.title}"
                />`
                }
            </a>
            <div class="card-body">
            <h5 class="card-title">${result.title}</h5>
            <p class="card-text">
                <small class="text-muted">Release: ${result.release_date}</small>
            </p>
            </div>
        `;

        document.querySelector('#popular-movies').appendChild(div);
    }
}

//fetch data from api
async function fetchAPIdata(endpoint) {
    const API_KEY = '6c859f9f6d995843ddee10165ef6e65a';
    const API_URL = 'https://api.themoviedb.org/3/';

    const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);
    const data = await response.json();
    return data;
}

document.addEventListener('DOMContentLoadedErrorHandler',movie());

//https://api.themoviedb.org/3/tv/popular?api_key=6c859f9f6d995843ddee10165ef6e65a