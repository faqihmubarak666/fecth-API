import React, { Component } from "react";
import axios from "axios";
import "../../Post.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_buku: "",
      judul_buku: "",
      id_kategori: "",
      id_pengarang: "",
      id_penerbit: "",
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:3000/book", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
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
                  onChange={this.changeHandler}
                />
              </div>
              <div class="textbox">
                <i class="fa fa-book" aria-hidden="true"></i>
                <Form.Control
                  type="text"
                  name="judul_buku"
                  placeholder="Input judul buku"
                  value={this.state.judul_buku}
                  onChange={this.changeHandler}
                />
              </div>
              <div class="textbox">
                <i class="fa fa-list-ul" aria-hidden="true"></i>
                <Form.Control
                  type="text"
                  name="id_kategori"
                  placeholder="Input id kategori"
                  value={this.state.id_kategori}
                  onChange={this.changeHandler}
                />
              </div>
              <div class="textbox">
                <i class="fa fa-user" aria-hidden="true"></i>
                <Form.Control
                  type="text"
                  name="id_pengarang"
                  placeholder="Input id pengarang"
                  value={this.state.id_pengarang}
                  onChange={this.changeHandler}
                />
              </div>
              <div class="textbox">
                <i class="fa fa-user" aria-hidden="true"></i>
                <Form.Control
                  type="text"
                  name="id_penerbit"
                  placeholder="Input id penerbit"
                  value={this.state.id_penerbit}
                  onChange={this.changeHandler}
                />
              </div>
              <Button
                className="btn"
                variant="outline-success"
                type="submit"
                onClick={this.submitHandler}
              >
                Submit
              </Button>{" "}
            </Card>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default PostList;
