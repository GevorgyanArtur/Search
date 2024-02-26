const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
];

let cont = document.getElementById("container");
let search = document.querySelector("input");
function createBook(books) {
  books.forEach(book=>{
    let div = document.createElement("div");
    div.classList.add("book");
    let title = document.createElement("h1");
    let author = document.createElement("h3");
    title.textContent = book["title"];
    author.textContent = book["author"];
    div.appendChild(title);
    div.appendChild(author);
    cont.appendChild(div);
  })
}

// createBook(books);

search.addEventListener("input",()=>{  
 let filteredBooks = books.filter((b) =>{
    return b.title.includes(search.value) || b.author.includes(search.value);
  }) 
  cont.innerHTML = null;
  createBook(filteredBooks);
})

// function marked(search) {
  // let span = document.createElement("span");
// }



