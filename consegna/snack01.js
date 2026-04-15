const books = require("./books.js");



//1. Crea un array (longBooks) con i libri che hanno più di 300 pagine;
const longBooks = books.filter((book) => {
    return book.pages > 300;
});
//console.log(longBooks);

const longBooks1 = books.filter(book => book.pages > 300);//return implicito
console.log(longBooks1);



//2. Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
const longBooksTitles = longBooks.map((book) => {
    return book.title;
});
console.log(longBooksTitles);



//3. Stampa in console ogni titolo nella console.
longBooksTitles.forEach((title) => {
    console.log(title);
});
