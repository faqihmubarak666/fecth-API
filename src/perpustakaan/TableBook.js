import React, { Component, useState, useEffect } from "react";
import { Table } from "react-bootstrap/cjs";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Page.css";
import { getAllBooks } from "./serviceBook";

const TableBook = (props) => {
  const {
    books,
    handleDetail,
    handleCreate,
    handleUpdate,
    handleDelete,
  } = props;
  console.log("Table book", books);
  return (
    <div className="body-table">
      <button
        onClick={() => handleCreate()}
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
                      onClick={() => handleDetail(book)}
                      style={{
                        backgroundColor: "red",
                        color: "white",
                        width: "50px",
                      }}
                    >
                      <i class="fa fa-info" aria-hidden="true"></i>
                    </button>

                    <button
                      onClick={() => handleUpdate(book)}
                      style={{
                        backgroundColor: "blue",
                        color: "white",
                        width: "50px",
                      }}
                    >
                      <i class="fa fa-pencil-square" aria-hidden="true"></i>
                    </button>
                    <button
                      onClick={() => handleDelete(book.id_buku)}
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

export default TableBook;
