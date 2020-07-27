import React, { Component, useState, useEffect } from "react";
import TableBook from "./TableBook";
import DetailBook from "./DetailBook";
import CreateBook from "./CreateBook";
import UpdateBook from "./UpdateBook";
import swal from "sweetalert";
import {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} from "./serviceBook";

const ContainerBook = (props) => {
  const [dataBook, setDataBook] = useState({});
  const [showModalDetail, setShowModalDetail] = useState(false);
  const [showModalCreate, setshowModalCreate] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [inputBook, setinputBook] = useState({
    id_buku: "",
    judul_buku: "",
    id_pengarang: "",
    id_penerbit: "",
    id_pengarang: "",
  });
  const [books, setBooks] = useState();

  useEffect(() => {
    loadData();
  }, []);

  const handleChangeInput = (event) => {
    const name = event.target.name;
    setinputBook({ ...inputBook, [name]: event.target.value });
  };

  const loadData = () => {
    getAllBooks().then((res) => {
      console.log("data book :", res);
      if (res.status === 200) {
        setBooks(res.result);
      }
    });
  };

  const addNewBook = () => {
    createBook({
      id_buku: inputBook.id_buku,
      judul_buku: inputBook.judul_buku,
      id_kategori: inputBook.id_kategori,
      id_pengarang: inputBook.id_pengarang,
      id_penerbit: inputBook.id_penerbit,
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          swal("Add Book Success", "You clicked the button!", "success");
          loadData();
          setinputBook({
            ...inputBook,
            id_buku: "",
            judul_buku: "",
            id_kategori: "",
            id_pengarang: "",
            id_penerbit: "",
          });
        }
      })
      .catch((err) => {
        swal(err);
      });
  };

  const putBook = (
    id_buku,
    judul_buku,
    id_kategori,
    id_pengarang,
    id_penerbit
  ) => {
    updateBook({
      id_buku: inputBook.id_buku === "" ? id_buku : inputBook.id_buku,
      judul_buku:
        inputBook.judul_buku === "" ? judul_buku : inputBook.judul_buku,
      id_kategori:
        inputBook.id_kategori === "" ? id_kategori : inputBook.id_kategori,
      id_pengarang:
        inputBook.id_pengarang === "" ? id_pengarang : inputBook.id_pengarang,
      id_penerbit:
        inputBook.id_penerbit === "" ? id_penerbit : inputBook.id_penerbit,
    })
      .then((response) => {
        console.log(`hasil update`, response);
        swal("Update Book Success", "You clicked the button!", "success");
        loadData();
        setinputBook({
          ...inputBook,
          id_buku: "",
          judul_buku: "",
          id_kategori: "",
          id_pengarang: "",
          id_penerbit: "",
        });
      })
      .catch((err) => {
        swal(err);
      });
  };

  const removeBook = (id_buku) => {
    const onDelete = window.confirm(`Delete book with id ${id_buku}`);

    if (onDelete) {
      deleteBook(id_buku).then((response) => {
        if (response.status === 200) {
          swal("Delete Book Success", "You clicked the button!", "success");
          loadData();
        }
      });
    }
  };

  const handleDetail = (books) => {
    setShowModalDetail(!showModalDetail);
    setDataBook(books);
  };

  const handleCreate = () => {
    setshowModalCreate(!showModalCreate);
  };

  const handleUpdate = (data) => {
    setDataBook(data);
    setShowModalUpdate(!showModalUpdate);
  };

  const hideDetail = () => {
    setShowModalDetail(!showModalDetail);
  };

  return (
    <div>
      <h3 style={{ color: "lightgoldenrodyellow" }}>TABLE BOOKS</h3>
      {!showModalDetail ? null : (
        <DetailBook
          id_buku={dataBook.id_buku}
          judul_buku={dataBook.judul_buku}
          id_kategori={dataBook.id_kategori}
          id_pengarang={dataBook.id_pengarang}
          id_penerbit={dataBook.id_penerbit}
          show={showModalDetail}
          onHide={hideDetail}
        />
      )}
      {!showModalCreate ? null : (
        <CreateBook
          show={showModalCreate}
          onHide={handleCreate}
          handleChangeInput={handleChangeInput}
          addNewBook={addNewBook}
          id_buku={inputBook.id_buku}
          judul_buku={inputBook.judul_buku}
          id_kategori={inputBook.Bookname}
          id_pengarang={inputBook.id_pengarang}
          id_penerbit={inputBook.id_penerbit}
        />
      )}
      {!showModalUpdate ? null : (
        <UpdateBook
          show={showModalUpdate}
          onHide={handleUpdate}
          putBook={putBook}
          handleChangeInput={handleChangeInput}
          id_buku={dataBook.id_buku}
          judul_buku={dataBook.judul_buku}
          id_kategori={dataBook.id_kategori}
          id_pengarang={dataBook.id_pengarang}
          id_penerbit={dataBook.id_penerbit}
        />
      )}

      <TableBook
        books={books}
        handleDetail={handleDetail}
        handleCreate={handleCreate}
        handleUpdate={handleUpdate}
        handleDelete={removeBook}
      />
    </div>
  );
};

export default ContainerBook;
