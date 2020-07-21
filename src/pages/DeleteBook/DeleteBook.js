import React, { Component } from "react";
import axios from "axios";
import "../../Post.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

class DeleteBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_buku: "",
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
      .delete("http://localhost:3000/book", this.state.id_buku)
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
              <h1>Delete Book</h1>
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

export default DeleteBook;
