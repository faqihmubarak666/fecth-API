import React from "react";
import { Table } from "react-bootstrap/cjs";
import "../perpustakaan/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../Page.css";
import { connect } from "react-redux";
// import { GetData } from "./BooksService";

const TableBooks = (props) => {
  const { books, showDetail, buttonCreate, removeBook, buttonPut } = props;
  console.log(`ini dari table books`, books);
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
                      onClick={() => buttonPut(book)}
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
  return { books: state.rGetDataBook.GetBook.result };
};

export default connect(mapStateToProps)(TableBooks);
