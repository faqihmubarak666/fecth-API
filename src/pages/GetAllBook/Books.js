import React, { Component } from "react";
import { getBooks } from "../../api/Books";
import BookList from "./BookList";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    getBooks()
      .then((books) => {
        console.log("ini adalah", books);
        this.setState({ ...this.state, books: books.data.result });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default Books;
