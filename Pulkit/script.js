const defaultWord = 'Ineffable'
const submit = document.querySelector("button[type='submit']");
const resultsContainer = document.getElementById("results");

const handleSubmit = (e) => {
    e.preventDefault();
    const wordInput = document.querySelector("input[type='search']");
    const word = wordInput.value.trim();

    if (word) {
        fetchDefinition(word);
    } else {
        alert("Enter a word first");
    }
};
submit.addEventListener("click", handleSubmit);

const fetchDefinition = (word) => {
    const apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + encodeURIComponent(word);

    resultsContainer.innerHTML = '<div class="loader"></div>';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('API request failed with status: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            
            document.title = `Dictionary | ${(data[0].word.toLowerCase() === defaultWord.toLowerCase()) ? 'Search a word' : data[0].word}`;

            const wordContainer = document.createElement('div');
            wordContainer.className = 'word-container';

            const wordHeader = document.createElement('h2');
            wordHeader.textContent = data[0].word;
            wordContainer.appendChild(wordHeader);

            const partOfSpeech = data[0].meanings[0].partOfSpeech;

            const speakerIcon = document.createElement('span');
            speakerIcon.className = 'speaker-icon material-symbols-outlined';
            speakerIcon.textContent = 'volume_up';
            speakerIcon.addEventListener('click', () => {
                const audio = new Audio(data[0].phonetics[0].audio);
                audio.play();
            });

            const partOfSpeechParagraph = document.createElement('p');
            partOfSpeechParagraph.innerHTML = `<strong>Part of Speech:</strong> ${partOfSpeech}`;
            wordHeader.appendChild(speakerIcon);

            wordContainer.appendChild(partOfSpeechParagraph);

            const definition = data[0].meanings[0].definitions[0].definition;
            const example = data[0].meanings[0].definitions[0].example;
            const synonyms = data[0].meanings[0].definitions[0].synonyms.join(', ');
            const antonyms = data[0].meanings[0].definitions[0].antonyms.join(', ');

            const phonetics = data[0].phonetics.map(phonetic => phonetic.text).join(', ');
            const origin = data[0].origin;

            const detailsHTML = `
                <p><strong>Definition:</strong> ${definition}</p>
                <p><strong>Example:</strong> ${example}</p>
                <p><strong>Synonyms:</strong> ${synonyms}</p>
                <p><strong>Antonyms:</strong> ${antonyms}</p>
                <p><strong>Phonetics:</strong> ${phonetics}</p>
                <p><strong>Origin:</strong> ${origin}</p>
            `;

            const detailsParagraph = document.createElement('div');
            detailsParagraph.innerHTML = detailsHTML;
            wordContainer.appendChild(detailsParagraph);

            resultsContainer.innerHTML = '';
            resultsContainer.appendChild(wordContainer);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            resultsContainer.innerHTML = '<p class="error-message">Failed to fetch data.</p>';
        });
};

submit.addEventListener("click", handleSubmit);

const urlParams = new URLSearchParams(window.location.search);
const wordParam = urlParams.get('word');


fetchDefinition(defaultWord);

if (wordParam) {
    fetchDefinition(wordParam);
}


//suggestions

document.getElementById('sesquipedalian').addEventListener('click',()=>fetchDefinition('sesquipedalian'))
document.getElementById('obfuscate').addEventListener('click',()=>fetchDefinition('obfuscate'))
document.getElementById('ephemeral').addEventListener('click',()=>fetchDefinition('ephemeral'))
document.getElementById('defenestration').addEventListener('click',()=>fetchDefinition('defenestration'))
document.getElementById('pulchritudinous').addEventListener('click',()=>fetchDefinition('pulchritudinous'))