import React, { Component } from "react";
import { Table } from "react-bootstrap/cjs";
import "bootstrap/dist/css/bootstrap.min.css";

const TableBooks = (props) => {
  const { books, showDetail } = props;

  return (
    <div>
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
          {books.map((book) => (
            <tr>
              <td>{book.id_buku}</td>
              <td>{book.judul_buku}</td>
              <td>{book.nama_kategori}</td>
              <td>{book.nama_pengarang}</td>
              <td>{book.nama_penerbit}</td>
              <td>
                <button onClick={() => showDetail(book)}>
                  <i class="fa fa-pencil-square" aria-hidden="true"></i> Detail
                </button>
                <button>
                  <i class="fa fa-trash" aria-hidden="true"></i> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableBooks;
