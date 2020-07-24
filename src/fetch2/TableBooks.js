import React, { Component, useState, useEffect } from "react";
import { Table } from "react-bootstrap/cjs";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Page.css";
import { connect } from "react-redux";
import { getAllBooks } from "./BooksService";

const TableBooks = (props) => {
  const [result, setResult] = useState(); // untuk merubah si result useSatae = setState

  const fetchData = async () => {
    try {
      const response = await fetch(`/book`);
      const data = await response.json();
      setResult(data.result);
      props.getAllBooks(data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // otomatis berjalan ketika load (component did mount)
    fetchData();
  }, []);

  const { books, showDetail, buttonCreate, removeBook, buttonPut } = props;
  return (
    <div className="body-table">
      <button
        onClick={() => buttonCreate()}
        style={{ float: "left", backgroundColor: "blue", color: "white" }}
      >
        <i class="fa fa-plus" aria-hidden="true"></i> Created
      </button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id Book</th>
            <th>Tittle Book</th>
            <th>Kategory Book</th>
            <th>Author Book</th>
            <th>Publisher Book</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {!books
            ? null
            : books.map((book) => (
                <tr>
                  <td>{book.id_buku}</td>
                  <td>{book.judul_buku}</td>
                  <td>{book.nama_kategori}</td>
                  <td>{book.nama_pengarang}</td>
                  <td>{book.nama_penerbit}</td>
                  <td>
                    <button
                      onClick={() => showDetail(book)}
                      style={{
                        backgroundColor: "red",
                        color: "white",
                        width: "50px",
                      }}
                    >
                      <i class="fa fa-info" aria-hidden="true"></i>
                    </button>

                    <button
                      onClick={() => buttonPut()}
                      style={{
                        backgroundColor: "blue",
                        color: "white",
                        width: "50px",
                      }}
                    >
                      <i class="fa fa-pencil-square" aria-hidden="true"></i>
                    </button>
                    <button
                      onClick={() => removeBook(book.id_buku)}
                      style={{
                        backgroundColor: "green",
                        color: "white",
                        width: "50px",
                      }}
                    >
                      <i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { books: state.result };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllBooks: (result) => dispatch({ type: "GETALLBOOK", data: result }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableBooks);
