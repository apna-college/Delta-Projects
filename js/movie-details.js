        // Get the URLSearchParams object from the current URL
        const urlParams = new URLSearchParams(window.location.search);

        // Get the value of the 'id' parameter
        const id = urlParams.get('id');
        
        //console.log(id); // This will log the ID value (e.g., 569094) to the console
        //https://api.themoviedb.org/3/movie/343611?api_key=6c859f9f6d995843ddee10165ef6e65a

        const API_KEY = '6c859f9f6d995843ddee10165ef6e65a';
        const API_URL = 'https://api.themoviedb.org/3/';


        async function movie(){
            let results = await fetchAPIdata('movie/');
            console.log(results);
            console.log(results.original_title);

            let results2 = await fetchCast('credits');
            console.log(results2);
            // for(let result of results){
                const genresArray = results.genres;
                // Loop through each genre and print its name
                    const div=document.createElement('div');
                    div.classList.add('container');
                    div.innerHTML = `
                    <div class="left">
                    <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${results.poster_path}" alt="">
                </div>
                <div class="right">
                    <h1 class="original_title">
                        ${results.original_title}
                    </h1>
                    <div class="info">
                        <p class="release_date">
                        ${results.release_date}
                        </p>
                        <div class="genres">
                            ${genresArray.map(genre => `<span>${genre.name}</span>`).join('  ')}
                        </div>
                        <div class="runtime">
                            ${results.runtime} minitues
                        </div>
                    </div>
                    <div class="showCase">
                        <div><i class="fa-solid fa-bars"></i></div>
                        <div><i class="fa-solid fa-heart"></i></div>
                        <div><i class="fa-solid fa-bookmark"></i></div>
                        <div><i class="fa-solid fa-star"></i></div>
                    </div>
                    <p class="tagline">${results.tagline}</p>
                    <div class="overview">
                        <h3>Overview</h3>
                        <p>
                            ${results.overview}
                        </p>
                    </div>
                    <div class="cast">
                        <div class="top">
                            <div>
                                <h4>${results2.cast[0].name}</h4>
                                <p>${results2.cast[0].character}</p>
                            </div>
                            <div>
                                <h4>${results2.cast[1].name}</h4>
                                <p>${results2.cast[1].character}</p>
                            </div>
                            <div>
                                <h4>${results2.cast[2].name}</h4>
                                <p>${results2.cast[2].character}</p>
                            </div>
                        </div>
                        <div class="bottom">
                        <div>
                            <h4>${results2.cast[3].name}</h4>
                            <p>${results2.cast[3].character}</p>
                        </div>
                        <div>
                            <h4>${results2.cast[4].name}</h4>
                            <p>${results2.cast[4].character}</p>
                        </div>
                        <div>
                            <h4>${results2.cast[5].name}</h4>
                            <p>${results2.cast[5].character}</p>
                        </div>
                        </div>
                    </div>
                </div>
                    `;
                //background: url('https://image.tmdb.org/t/p/original/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg');
                div.style.backgroundImage=`url('https://image.tmdb.org/t/p/original/${results.backdrop_path}')`;
                document.querySelector('body').appendChild(div);
            // }
        }

        async function fetchAPIdata(endpoint) {
            const response = await fetch(`${API_URL}${endpoint}/${id}?api_key=${API_KEY}&language=en-US`);
            const data = await response.json();
            return data;
        }

        //https://api.themoviedb.org/3/movie/569094/credits?api_key=6c859f9f6d995843ddee10165ef6e65a
        async function fetchCast(endpoint) {
            const response = await fetch(`${API_URL}movie/${id}/${endpoint}?api_key=${API_KEY}&language=en-US`);
            const data = await response.json();
            return data;
        }
        
        document.addEventListener('DOMContentLoadedErrorHandler',movie());

