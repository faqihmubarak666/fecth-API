import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import JumbotronComponent from "../components/JumbotronComponent";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import ContainerLogin from "../Login/ContainerLogin";
import ContainerBook from "../perpustakaan/ContainerBook";

class Header extends Component {
  state = {
    nav: false,
  };

  logout = () => {
    this.setState({
      nav: !this.state.nav,
    });
  };
  render() {
    if (this.state.nav) {
      return <ContainerLogin />;
    }
    return (
      <div>
        <BrowserRouter>
          <Navbar bg="dark" variant="dark" style={{ fontSize: 22 }}>
            <Navbar.Brand href="Home">Enigma Library</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Books">
                Books
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/Login"
                style={{
                  display: "block",
                  float: "right",
                  textAlign: "right",
                  marginLeft: 1250,
                }}
                onClick={this.logout}
              >
                <i class="fa fa-sign-out" aria-hidden="true"></i>
                Logout
              </Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route path="/" exact component={JumbotronComponent} />
            <Route path="/Books" component={ContainerBook} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Header;
