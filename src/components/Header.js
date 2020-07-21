import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import JumbotronComponent from "../components/JumbotronComponent";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import CompA from "../components/CompA";
import PutBook from "../pages/PutBook/PutBook";
import Books from "../pages/GetAllBook/Books";

class Header extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="Home">Enigma Library</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Users">
                All Books
              </Nav.Link>
              <Nav.Link as={Link} to="/Books">
                Update Book
              </Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route path="/" exact component={JumbotronComponent} />
            <Route path="/Users" component={Books} />
            <Route path="/Books" component={PutBook} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Header;
