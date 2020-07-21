const baseUrl = "http://localhost:3000/book";

const getAllBooks = async () => {
  const books = await fetch(baseUrl);
  return await books.json();
};

const createBook = async (form) => {
  const book = await fetch(baseUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });
  return await book.json();
};

const UpdateBook = async (form) => {
  const book = await fetch(baseUrl, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });
  return await book.json();
};

const deleteBook = async (id_book) => {
  const book = await fetch(baseUrl + `/${id_book}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return book;
};

export { getAllBooks, createBook, UpdateBook, deleteBook };
