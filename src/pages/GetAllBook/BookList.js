import React, { Component } from "react";
import { Table } from "react-bootstrap/cjs";
import "bootstrap/dist/css/bootstrap.min.css";

class BookList extends Component {
  render() {
    let { books } = this.props;
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
            </tr>
          </thead>
          <tbody>{book}</tbody>
        </Table>
      </div>
    );
  }
}

export default BookList;
