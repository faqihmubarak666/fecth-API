import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import JumbotronComponent from "../components/JumbotronComponent";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import BookContainer from "../fetch2/BooksContainer";

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
              <Nav.Link as={Link} to="/Books">
                Books
              </Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route path="/" exact component={JumbotronComponent} />
            <Route path="/Books" component={BookContainer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Header;
