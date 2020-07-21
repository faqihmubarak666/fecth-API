import React, { Component } from "react";
import Books from "./pages/GetAllBook/Books";
import PostList from "./pages/PostBook/PostList";
import PutBook from "./pages/PutBook/PutBook";
// import BookContainer from "./books/BookContainer";
import BooksContainer from "./fetch2/BooksContainer";
import DeleteBook from "./pages/DeleteBook/DeleteBook";
import Nav2 from "./container/Nav2";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Books /> */}
        {/* <PostList /> */}
        {/* <PutBook /> */}
        {/* <DeleteBook /> */}
        <BooksContainer />
        {/* <Nav2 /> */}
        {/* <Header /> */}
      </div>
    );
  }
}

export default App;
