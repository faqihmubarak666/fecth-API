import React, { Component } from "react";
import BooksContainer from "./fetch2/BooksContainer";
import Header from "./components/Header";
import "./Page.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container-page">
          <Header />
        </div>
      </div>
    );
  }
}

export default App;
