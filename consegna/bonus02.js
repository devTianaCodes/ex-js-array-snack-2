const books = require("./books.js");

// Crea una variabile booleana (areThereAvailableBooks) per verificare 
// se c’è almeno un libro disponibile.

const areThereAvailableBooks = books.some(book => book.available);
//console.log(areThereAvailableBooks);


// Crea un array (booksByPrice) con gli elementi di books 
// ordinati in base al prezzo (crescente).

const booksByPrice = books.sort((a, b) => {
    const priceA = parseFloat(a.price.replace("€",""));
    const priceB = parseFloat(b.price.replace("€",""));
    return priceA - priceB
})

//console.log(booksByPrice); 

// Ordina l’array booksByPricein base alla disponibilità 
// (prima quelli disponibili), senza creare un nuovo array.

booksByPrice.sort((a, b) => a.available === b.available ? 
    0: a.available ? -1 : 1); 
console.log(booksByPrice); 
