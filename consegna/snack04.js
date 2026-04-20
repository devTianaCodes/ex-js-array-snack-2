const books = require("./books.js");

// Creare un array (ages) che contiene le età degli autori dei libri.

const allAuthorsAges = books.map((book) => {
    return book.author.age;
});

//console.log(allAuthorsAges);


// Calcola la somma delle età (agesSum) usando reduce.

const agesSum = books.reduce((acc, book) => {
    return acc + book.author.age;
}, 0);

//console.log(agesSum);

//or

const agesSum1 = allAuthorsAges.reduce((acc, age) => {
    return acc + age;
}, 0);

//console.log(agesSum1);


// Stampa in console l’età media degli autori dei libri.

const ageMedia = allAuthorsAges.reduce((acc, age) => {
    return acc + age / allAuthorsAges.length;
}, 0);

//console.log(ageMedia);

//console.log(`Media of ages is: ${agesSum / allAuthorsAges.length}`);


//extra: total value of book prices, where authors age is more than 30
const totalPricesSum = books.filter(b => b.author.age > 30).reduce((acc, b) => acc + parseFloat(b.price.replace("€", "")), 0);
//console.log(totalPricesSum);




// extra concat autoìhor name  where tag is junior
const concatAuthors = books.filter(b => b.tags.includes("junior")).reduce((acc, b) => acc + ", " + b.author.name, "");
//console.log(concatAuthors);

const concatAuthors1 = books
    .filter(b => b.tags.includes("junior"))
    .map(b => b.author.name)
    .join(", ");
console.log(concatAuthors1);