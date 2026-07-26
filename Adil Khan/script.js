let cardContainer = document.querySelector(".card-container");
let searchBtn = document.querySelector(".searchBtn");

const dataUrl = "https://openlibrary.org/search.json?q="


searchBtn.addEventListener("click", fetchBooks)

async function fetchPrerequisite() {
    let url = "https://openlibrary.org/subjects/magic.json?limit=22";
    let res = await axios.get(url);
    let books = await res.data.works;
    cardContainer.innerHTML = "";
    // console.log(books);
    for (book of books) {
        let title = book.title;
        let coverId = book.cover_id;
        let author = book.authors[0].name;
        let card = document.createElement("div")
        card.classList.add("card");
        let bookImg = document.createElement("img");
        bookImg.classList.add("bookimg");
        let bookTitle = document.createElement("h3");
        bookTitle.classList.add("title");
        let authorName = document.createElement("p");
        authorName.classList.add("author");
        if (coverId) {
            bookImg.src = `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
        } else {
            bookImg.src = "https://www.pustakcity.in/cdn/shop/files/Placeholder_1024x1024_2x_7ee2f281-6ddc-4ff9-8136-3bf971fe244d.webp?v=1736677616&width=1000"
        }

        bookTitle.innerText = title;
        authorName.innerText = author;
        card.appendChild(bookImg);
        card.appendChild(bookTitle);
        card.appendChild(authorName);
        cardContainer.appendChild(card);
        // console.log(`book title : ${title}`);
        console.log(`Cover Image : ${coverId}`);
        // console.log(`Author : ${author}`);

    }

}

window.onload = fetchPrerequisite;





async function fetchBooks() {
    let query = document.querySelector("#searchBar").value;
    let newQuery = encodeURIComponent(query)
    let res = await axios.get(dataUrl + newQuery);


    let books = await res.data.docs;
    cardContainer.innerHTML = "";
    for (book of books) {
        let title = book.title;
        let coverId = book.cover_i;
        let author = book.author_name[0];
        let card = document.createElement("div")
        card.classList.add("card");
        let bookImg = document.createElement("img");
        bookImg.classList.add("bookimg");
        let bookTitle = document.createElement("h3");
        bookTitle.classList.add("title");
        let authorName = document.createElement("p");
        authorName.classList.add("author");
        if (coverId) {
            bookImg.src = `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
        } else {
            bookImg.src = "https://www.pustakcity.in/cdn/shop/files/Placeholder_1024x1024_2x_7ee2f281-6ddc-4ff9-8136-3bf971fe244d.webp?v=1736677616&width=1000"
        }

        bookTitle.innerText = title;
        authorName.innerText = author;
        card.appendChild(bookImg);
        card.appendChild(bookTitle);
        card.appendChild(authorName);
        cardContainer.appendChild(card);
        // console.log(`book title : ${title}`);
        console.log(`Cover Image : ${coverId}`);
        // console.log(`Author : ${author}`);

    }

}
