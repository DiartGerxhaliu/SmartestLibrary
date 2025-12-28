let booksDiv = document.querySelector(".books");
let pagination = document.querySelector(".pagination");

let page = 1;
let limit = 24;
let totalPages = 1;
let typingTimer;

function loadBooks() {
    booksDiv.innerHTML = "";
    pagination.innerHTML = "";

    let search = document.getElementById("search").value.toLowerCase();

    fetch(`https://openlibrary.org/search.json?q=every&limit=${limit}&page=${page}`)
        .then(res => res.json())
        .then(data => {
            
            totalPages = Math.ceil(data.numFound / limit);
            let books = data.docs;

            if (search) {
                books = books.filter(b =>
                    b.title && b.title.toLowerCase().includes(search)
                );
            }

            let index = (page - 1) * limit + 1;

            books.forEach(book => {
                let card = document.createElement("div");
                card.className = "card";

                let img = document.createElement("img");
                img.src = book.cover_i
                    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
                    : "";

                let title = document.createElement("h1");
                title.textContent = index + ". " + book.title;

                card.append(img, title);
                booksDiv.append(card);
                index++;
            });

            renderPagination();
        });
}

function renderPagination() {
    pagination.innerHTML = "";

    let visible = 10;
    let start = page - Math.floor(visible / 2);
    let end = page + Math.floor(visible / 2);

    if (start < 1) {
        start = 1;
        end = visible;
    }

    if (end > totalPages) {
        end = totalPages;
        start = Math.max(1, end - visible + 1);
    }

    if (page > 1) {
        let prev = document.createElement("button");
        prev.innerHTML = "<";
        prev.onclick = () => { page--; loadBooks(); };
        pagination.append(prev);
    }

    for (let i = start; i <= end; i++) {
        let btn = document.createElement("button");
        btn.textContent = i;

        if (i === page) btn.disabled = true;

        btn.onclick = () => {
            page = i;
            loadBooks();
        };

        pagination.append(btn);
    }

    if (page < totalPages) {
        let next = document.createElement("button");
        next.innerHTML = ">";
        next.onclick = () => { page++; loadBooks(); };
        pagination.append(next);
    }
}

document.getElementById("search").addEventListener("input", () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
        page = 1;
        loadBooks();
    }, 300);
});

loadBooks();