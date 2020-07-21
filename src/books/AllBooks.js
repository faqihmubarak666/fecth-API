import React, { Component } from "react";
import { Table } from "react-bootstrap/cjs";
import "bootstrap/dist/css/bootstrap.min.css";
import PutBook from "../pages/PutBook/PutBook";

class AllBooks extends Component {
  handleUpdate = () => {
    this.props.handleButton();
  };

  render() {
    let { books, removeBook } = this.props;

    console.log(books);
    let book = books.map((books, index) => {
      return (
        <tr>
          <td>{index + 1}</td>
          <td>{books.id_buku}</td>
          <td>{books.judul_buku}</td>
          <td>{books.nama_kategori}</td>
          <td>{books.nama_pengarang}</td>
          <td>{books.nama_penerbit}</td>
          <td>
            <button onClick={this.handleUpdate}>
              <i class="fa fa-pencil-square" aria-hidden="true"></i> Update
            </button>
            <button onClick={() => removeBook(books.id_buku)}>
              <i class="fa fa-trash" aria-hidden="true"></i> Delete
            </button>
          </td>
        </tr>
      );
    });
    return (
      <div style={{ marginTop: 10 }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No.</th>
              <th>Id Book</th>
              <th>Tittle Book</th>
              <th>Kategory Book</th>
              <th>Author Book</th>
              <th>Publisher Book</th>
              <th>Activation</th>
            </tr>
          </thead>
          <tbody>{book}</tbody>
        </Table>
      </div>
    );
  }
}

export default AllBooks;
