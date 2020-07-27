import React, { Component } from "react";
import "./Page.css";
import ContainerLogin from "./Login/ContainerLogin";
import ContainerBook from "./perpustakaan/ContainerBook";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container-page">
          <ContainerLogin />
        </div>
      </div>
    );
  }
}

export default App;
