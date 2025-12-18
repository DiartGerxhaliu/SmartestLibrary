
let div = document.querySelector(".books");
let a = 1;
fetch("https://openlibrary.org/search.json?q=every&limit=20")
  .then(
    response => response.json()
    ).then(data => {
        console.log('>>>>>>>>>>>', data)
        data.docs.forEach(element => {
        let content = document.querySelector(".books");

        let div = document.createElement("div");
        div.classList.add("card")
        
        let h1 = document.createElement("h1");
        h1.innerHTML = a+"Emri "+element.title

        let pic = document.createElement("img");
        pic.src= (`https://covers.openlibrary.org/b/id/${element.cover_i}-L.jpg`)
        pic.loading = `lazy`;

        content.append(div);
        div.append(pic)
        div.append(h1);     
        a++
        });
    
})
  .catch(error => {
    console.error("Error fetching:", error);
    div.textContent = "Failed to load books.";
  });
