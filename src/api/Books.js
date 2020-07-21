import Axios from "axios";

export const getBooks = async function () {
  let books = await Axios.get("http://localhost:3000/book");
  return books;
};
