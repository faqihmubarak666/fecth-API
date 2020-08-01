import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import JumbotronComponent from "../components/JumbotronComponent";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import swal from "sweetalert";
import ContainerUser from "../Dummy API/User/ContainerUser";
import ContainerTags from "../Dummy API/Tag/ContainerTags";
import ContainerComment from "../Dummy API/Post/ContainerComment";
import ContainerLogin from "../Login/ContainerLogin";

class Header extends Component {
  state = {
    logoutPage: false,
  };

  logout = () => {
    swal({
      title: "Are you sure?",
      text: "Logout",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Logout success", {
          icon: "success",
        });
        this.setState({
          logoutPage: !this.state.logoutPage,
        });
      } else {
        swal("Logout cancel!");
      }
    });
  };

  render() {
    if (this.state.logoutPage) {
      return <ContainerLogin />;
    }
    return (
      <div>
        <BrowserRouter>
          <Navbar bg="dark" variant="dark" style={{ fontSize: 22 }}>
            <Navbar.Brand href="Home">Dummy API</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">
                <i class="fa fa-home" aria-hidden="true">
                  Home
                </i>
              </Nav.Link>
              <Nav.Link as={Link} to="/User">
                <i class="fa fa-user" aria-hidden="true">
                  User
                </i>
              </Nav.Link>
              <Nav.Link as={Link} to="/Tag">
                <i class="fa fa-hashtag" aria-hidden="true">
                  Tag
                </i>
              </Nav.Link>
              <Nav.Link as={Link} to="/Post">
                <i class="fa fa-paper-plane-o" aria-hidden="true">
                  Post
                </i>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/Login"
                style={{
                  display: "inline-block",
                  position: "relative",
                  float: "right",
                  textAlign: "right",
                  marginLeft: "880px",
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
            <Route path="/User" component={ContainerUser} />
            <Route path="/Tag" component={ContainerTags} />
            <Route path="/Post" component={ContainerComment} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Header;
