const books = require("./books.js");

// Creare un array (ages) che contiene le età degli autori dei libri.

const allAuthorsAges = books.map((book) => {
    return book.author.age;
});

console.log(allAuthorsAges);


// Calcola la somma delle età (agesSum) usando reduce.

const agesSum = books.reduce ((acc, book) => {
    return acc + book.author.age;
}, 0);

console.log(agesSum);

//or

const agesSum1 = allAuthorsAges.reduce((acc, age) =>{
    return acc + age;
}, 0);

console.log(agesSum1);


// Stampa in console l’età media degli autori dei libri.

const ageMedia = allAuthorsAges.reduce((acc, age) => {
    return acc + age / allAuthorsAges.length;
}, 0);

console.log(ageMedia);

console.log(`Media of ages is: ${agesSum / allAuthorsAges.length}`);


