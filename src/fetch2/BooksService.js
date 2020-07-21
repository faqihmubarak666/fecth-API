const baseUrl = "/book";

const getAllBooks = async () => {
  const books = await fetch(baseUrl);
  return await books.json();
};

const getBookById = async (id) => {
  const books = await fetch(`${baseUrl}/${id}`);
};

export { getAllBooks, getBookById };
