import React, { Component } from "react";
import axios from "axios";
import "../Put.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

class PutBook extends Component {
  render() {
    const {
      id_buku,
      judul_buku,
      id_kategori,
      id_pengarang,
      id_penerbit,
      handleChangeInput,
      editBook,
    } = this.props;
    return (
      <div className="body">
        <div className="col-md-4 col-sm-12 mb-3">
          <div class="login-box">
            <Card border="success" className="body_card">
              <h1>Update Book</h1>
              <div class="textbox">
                <i class="fa fa-book" aria-hidden="true"></i>
                <Form.Control
                  type="text"
                  name="id_buku"
                  placeholder="Input id buku"
                  value={id_buku}
                  onChange={handleChangeInput}
                />
              </div>
              <div class="textbox">
                <i class="fa fa-book" aria-hidden="true"></i>
                <Form.Control
                  type="text"
                  name="judul_buku"
                  placeholder="Input judul buku"
                  value={judul_buku}
                  onChange={handleChangeInput}
                />
              </div>
              <div class="textbox">
                <i class="fa fa-list-ul" aria-hidden="true"></i>
                <Form.Control
                  type="text"
                  name="id_kategori"
                  placeholder="Input id kategori"
                  value={id_kategori}
                  onChange={handleChangeInput}
                />
              </div>
              <div class="textbox">
                <i class="fa fa-user" aria-hidden="true"></i>
                <Form.Control
                  type="text"
                  name="id_pengarang"
                  placeholder="Input id pengarang"
                  value={id_pengarang}
                  onChange={handleChangeInput}
                />
              </div>
              <div class="textbox">
                <i class="fa fa-user" aria-hidden="true"></i>
                <Form.Control
                  type="text"
                  name="id_penerbit"
                  placeholder="Input id penerbit"
                  value={id_penerbit}
                  onChange={handleChangeInput}
                />
              </div>
              <Button
                className="btn"
                variant="outline-success"
                type="submit"
                onClick={() => editBook()}
              >
                Submit
              </Button>
            </Card>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default PutBook;
