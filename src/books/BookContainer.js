import React, { Component } from "react";
import { getAllBooks, createBook, UpdateBook, deleteBook } from "./BookService";
import Button from "react-bootstrap/Button";
import "../Post.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import AllBooks from "./AllBooks";
import PutBook from "../pages/PutBook/PutBook";

class BookContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      id_buku: "",
      judul_buku: "",
      id_kategori: "",
      id_pengarang: "",
      id_penerbit: "",
      edit: true,
    };
  }

  loadData = () => {
    getAllBooks().then((res) => {
      this.setState({ ...this.state, books: res.result });
    });
  };

  handleChangeInput = (event) => {
    const name = event.target.name;
    this.setState({ ...this.state, [name]: event.target.value });
  };

  addNewBook = () => {
    createBook({
      id_buku: this.state.id_buku,
      judul_buku: this.state.judul_buku,
      id_kategori: this.state.id_kategori,
      id_pengarang: this.state.id_pengarang,
      id_penerbit: this.state.id_penerbit,
    }).then((response) => {
      if (response.status === 200) {
        alert("Data sukses di tambahkan");
        this.setState({
          ...this.state,
          id_buku: "",
          judul_buku: "",
          id_kategori: "",
          id_pengarang: "",
          id_penerbit: "",
        });
        this.loadData();
      }
    });
  };

  removeBook = (id_buku) => {
    const onDelete = window.confirm(`Delete book with id ${id_buku}`);

    if (onDelete) {
      deleteBook(id_buku).then((response) => {
        if (response.status === 200) {
          alert(`Book successfully deleted`);
          this.loadData();
        }
      });
    }
  };

  handleButton = () => {
    this.setState({
      edit: false,
    });
  };

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <div>
        {this.state.edit ? (
          <div className="body">
            <div className="col-md-4 col-sm-12 mb-3">
              <div class="login-box">
                <Card border="success" className="body_card">
                  <h1>Add Book</h1>
                  <div class="textbox">
                    <i class="fa fa-book" aria-hidden="true"></i>
                    <Form.Control
                      type="text"
                      name="id_buku"
                      placeholder="Input id buku"
                      value={this.state.id_buku}
                      onChange={this.handleChangeInput}
                    />
                  </div>
                  <div class="textbox">
                    <i class="fa fa-book" aria-hidden="true"></i>
                    <Form.Control
                      type="text"
                      name="judul_buku"
                      placeholder="Input judul buku"
                      value={this.state.judul_buku}
                      onChange={this.handleChangeInput}
                    />
                  </div>
                  <div class="textbox">
                    <i class="fa fa-list-ul" aria-hidden="true"></i>
                    <Form.Control
                      type="text"
                      name="id_kategori"
                      placeholder="Input id kategori"
                      value={this.state.id_kategori}
                      onChange={this.handleChangeInput}
                    />
                  </div>
                  <div class="textbox">
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <Form.Control
                      type="text"
                      name="id_pengarang"
                      placeholder="Input id pengarang"
                      value={this.state.id_pengarang}
                      onChange={this.handleChangeInput}
                    />
                  </div>
                  <div class="textbox">
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <Form.Control
                      type="text"
                      name="id_penerbit"
                      placeholder="Input id penerbit"
                      value={this.state.id_penerbit}
                      onChange={this.handleChangeInput}
                    />
                  </div>
                  <Button
                    className="btn"
                    variant="outline-success"
                    type="submit"
                    onClick={this.addNewBook}
                  >
                    Submit
                  </Button>
                </Card>
                <br />
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div>
              <AllBooks
                books={this.state.books}
                handleButton={this.handleButton}
                removeBook={this.removeBook}
              />
            </div>
          </div>
        ) : (
          <PutBook loadData={this.loadData} />
        )}
      </div>
    );
  }
}

export default BookContainer;
