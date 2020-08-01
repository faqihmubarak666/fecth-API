import React, { Component } from "react";
import "./Page.css";
import ContainerLogin from "./Login/ContainerLogin";

class App extends Component {
  render() {
    return (
      <div className="container-page">
        <ContainerLogin />
      </div>
    );
  }
}

export default App;
