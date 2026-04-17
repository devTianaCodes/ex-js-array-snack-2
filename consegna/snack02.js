const books = require("./books.js");

// Creare un array (availableBooks) che contiene 
// tutti i libri disponibili.

const availableBooks = books.filter(book => book.available === true);
//console.log(availableBooks);

// Crea un array (discountedBooks) con gli availableBooks,
//  ciascuno con il prezzo scontato del 20% 
// (mantieni lo stesso formato e arrotonda al centesimo

const discountedBooks = availableBooks.map((book) => {
    const numericPrice = parseFloat(book.price);
    const discountedPrice = numericPrice * 0.8;

    return {
        ...book,
        price: discountedPrice.toFixed(2) + "€"
    };
});

console.log(discountedBooks);

// Salva in una variabile (fullPricedBook) 
// il primo elemento di discountedBooks che ha un prezzo intero 
// (senza centesimi).


const fullPricedBook = discountedBooks.find((book) => {
    const numericPrice = parseFloat(book.price);
    return Number.isInteger(numericPrice);
});

console.log(fullPricedBook);