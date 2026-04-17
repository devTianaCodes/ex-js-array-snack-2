const books = require("./books.js");


// Creare un array (authors) che contiene gli autori dei libri.

const authors = books.map((book) => {
    return book.author;
});
console.log(authors);

// Crea una variabile booleana (areAuthorsAdults) per verificare 
// se gli autori sono tutti maggiorenni.

const areAuthorsAdults = authors.every((author) => {
    return author.age >= 18;
});
console.log(areAuthorsAdults);

// Ordina l’array authors in base all’età, senza creare un nuovo array.
// (se areAuthorsAdult è true, ordina in ordine crescente, 
// altrimenti in ordine decrescente)

if (areAuthorsAdults) {
    authors.sort((a, b) => {
        return a.age - b.age;
    });
} else {
    authors.sort((a, b) => {
        return b.age - a.age;
    });
}

console.log(authors);
console.log(areAuthorsAdults);