const baseUrl = "/book";

const getAllBooks = async () => {
  const books = await fetch(baseUrl);
  // console.log(`ini data books`, books.json());
  return await books.json();
};

const getBookById = async (id) => {
  const books = await fetch(`${baseUrl}/${id}`);
};

const createBook = async (form) => {
  const books = await fetch(baseUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });
  return await books;
};

const updateBook = async (form) => {
  const books = await fetch(baseUrl, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });
  return await books;
};

const deleteBook = async (id_book) => {
  const books = await fetch(baseUrl + `/${id_book}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return books;
};

export { getAllBooks, getBookById, createBook, updateBook, deleteBook };
