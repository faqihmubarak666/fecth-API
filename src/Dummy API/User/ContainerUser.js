import React, { Component } from "react";
import TableUser from "./TableUser";
import { connect } from "react-redux";
import { getAllUsers, getUserById, getUserByPost } from "../ServiceAPI";
import DetailUser from "./DetailUser";
import CardUser from "./CardUser";
import "../../Page.css";

class ContainerUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalUserId: false,
      handleShow: false,
      isLoaded: false,
      search: "",
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    getAllUsers().then((response) => {
      const result = response.data;
      this.props.GetUser(result);
      this.setState({
        isLoaded: !this.state.isLoaded,
      });
    });
  };

  handleChangeInput = (event) => {
    const name = event.target.name;
    this.setState({ ...this.state, [name]: event.target.value });
  };

  userById = (id) => {
    getUserById(id).then((response) => {
      const result = response;
      this.props.GetUserById(result);
      this.setState({
        showModalUserId: !this.state.showModalUserId,
      });
    });
  };

  userByPost = (id) => {
    getUserByPost(id).then((response) => {
      const result = response.data;
      this.props.GetUserPost(result);
      this.setState({
        handleShow: !this.state.handleShow,
      });
    });
  };

  handleCloseDetail = () => {
    this.setState({
      ...this.state,
      showModalUserId: !this.state.showModalUserId,
    });
  };

  render() {
    return (
      <div>
        {this.state.handleShow ? (
          <CardUser postUser={this.props.postUser} />
        ) : (
          <TableUser
            allUser={this.props.allUser}
            allTags={this.props.allTags}
            userById={this.userById}
            userByPost={this.userByPost}
            handleChangeInput={this.handleChangeInput}
            search={this.state.search}
            isLoaded={this.state.isLoaded}
          />
        )}

        <DetailUser
          user={this.props.user}
          show={this.state.showModalUserId}
          userById={this.userById}
          onHide={this.handleCloseDetail}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allUser: state.rGetDataUser.GetUser.listUser,
    user: state.rGetDataUser.GetUser.userById,
    postUser: state.rGetDataUser.GetUser.postUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetUser: (result) => dispatch({ type: "GET_USER", data: result }),
    GetUserById: (result) => dispatch({ type: "GET_USER_ID", data: result }),
    GetUserPost: (result) => dispatch({ type: "GET_USER_POST", data: result }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainerUser);
