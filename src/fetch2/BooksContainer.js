import React, { Component } from "react";
import { getAllBooks, getBookById } from "./BooksService";
import { Router } from "react-router-dom";
import TableBooks from "./TableBooks";
import DetailBook from "./DetailBook";

export default class BooksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showDetail: false,
      selectedBook: {},
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    getAllBooks().then((response) => {
      console.log("Books :", response);
      if (response.status === 200) {
        this.setState({ ...this.state, books: response.result });
      }
    });
  };

  getBookById = (id) => {
    getBookById(id).then((res) => {
      if (res.status === 200) {
        this.setState({ ...this.state, selectedBook: res.result });
      }
    });
  };

  editBook = () => {};

  createBook = () => {};

  deleteBook = () => {};

  showDetail = (books) => {
    this.setState({
      ...this.state,
      showDetail: !this.state.showDetail,
      selectedBook: { ...books },
    });
  };

  hideDetail = () => {
    this.setState({
      ...this.state,
      showDetail: !this.state.showDetail,
      selectedBook: {},
    });
  };

  render() {
    return (
      <div>
        <h1>Table Books</h1>
        <TableBooks books={this.state.books} showDetail={this.showDetail} />
        <DetailBook
          show={this.state.showDetail}
          books={this.state.selectedBook}
          onHide={this.hideDetail}
        />
      </div>
    );
  }
}
