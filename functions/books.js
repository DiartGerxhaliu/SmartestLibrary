let div = document.querySelector(".books");
let a = 1;
let page = 1;
let limit = 20;
let totalPages = 1;

let pagination = document.createElement("div");
pagination.classList.add("pagination")
document.body.append(pagination);

function loadBooks() {
    div.innerHTML = "";
    pagination.innerHTML = "";
    a = (page - 1) * limit + 1;

    fetch(`https://openlibrary.org/search.json?q=every&limit=${limit}&page=${page}`)
        .then(response => response.json())
        .then(data => {
            console.log('>>>>>>>>>>>', data);

            totalPages = Math.ceil(data.numFound / limit);

            data.docs.forEach(element => {
                let content = document.querySelector(".books");

                let div = document.createElement("div");
                div.classList.add("card");
                
                let h1 = document.createElement("h1");
                h1.innerHTML = a + ". " + element.title;

                let pic = document.createElement("img");
                if (element.cover_i) {
                    pic.src = `https://covers.openlibrary.org/b/id/${element.cover_i}-L.jpg`;
                }
                pic.loading = "lazy";

                content.append(div);
                div.append(pic);
                div.append(h1);
                a++;
            });

            for (let i = 1; i <= Math.min(totalPages, 10); i++) {
                let btn = document.createElement("button");
                btn.innerHTML = i;
                if (i === page) btn.disabled = true;

                btn.onclick = () => {
                    page = i;
                    loadBooks();
                };

                pagination.append(btn);
            }
        })
        .catch(error => {
            console.error("Error fetching:", error);
            div.textContent = "Failed to load books.";
        });
}

loadBooks();
