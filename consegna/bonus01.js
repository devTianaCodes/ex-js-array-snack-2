

  const ids = [2, 13, 7, 21, 19];

  async function getBooks(ids) {
    const baseUrl = `https://freetestapi.com/api/v1/books/`;

    const bookPromises = ids.map(id =>
      fetch(`${baseUrl}${id}`).then(r => r.json())
    );

    const books = await Promise.all(bookPromises);

    return books;
  }

  getBooks(ids).then(books => console.log(books));