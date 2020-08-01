import React, { Component } from "react";
import FormLogin from "./FormLogin";
import swal from "sweetalert";
import Header from "../components/Header";
import { withRouter } from "react-router-dom";

class ContainerLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      usernameError: "",
      passwordError: "",
      homePage: false,
      loading: false,
    };
  }

  handleChangeInput = (event) => {
    const name = event.target.name;
    this.setState({ ...this.state, [name]: event.target.value });
  };

  getDataUser = () => {
    setTimeout(() => {
      if (this.state.username === "" && this.state.password === "") {
        this.setState({
          usernameError: "Invalid username and password !",
        });
      } else if (this.state.username === "") {
        this.setState({
          usernameError: "Invalid username !",
        });
      } else if (this.state.password === "") {
        this.setState({
          passwordError: "Invalid password !",
        });
      } else if (
        this.state.username !== "faqih.mubarak" &&
        this.state.password !== "123456"
      ) {
        swal("Login Invalid", "You clicked the button!", "error");
      } else {
        swal("Login Success", "You clicked the button!", "success");
        this.props.history.push({
          pathname: "/",
        });
        this.setState({
          homePage: true,
        });
      }
    }, 2000);

    this.setState({
      loading: true,
    });
  };

  render() {
    if (this.state.homePage) {
      return <Header />;
    }
    return (
      <div>
        <FormLogin
          usernameError={this.state.usernameError}
          passwordError={this.state.passwordError}
          username={this.state.username}
          password={this.state.password}
          handleChangeInput={this.handleChangeInput}
          getDataUser={this.getDataUser}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default withRouter(ContainerLogin);
