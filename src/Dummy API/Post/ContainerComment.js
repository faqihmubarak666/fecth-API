import React, { Component } from "react";
import TableComment from "./TableComment";
import { connect } from "react-redux";
import { getUserByComment, getAllPost } from "../ServiceAPI";
import CardComment from "./CardComment";
import swal from "sweetalert";
import "../../Page.css";

class ContainerComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComment: false,
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.allPost();
  }

  allPost = () => {
    getAllPost().then((response) => {
      const result = response.data;
      this.props.GetAllPost(result);
      this.setState({
        isLoaded: !this.state.isLoaded,
      });
    });
  };

  userByComment = (id) => {
    getUserByComment(id).then((response) => {
      const result = response.data;
      console.log("hasilnya", result);
      this.props.GetUserComment(result);
      {
        result.length === 0
          ? swal("No Comment")
          : this.setState({
              showComment: !this.state.showComment,
            });
      }
    });
  };

  render() {
    return (
      <div>
        {this.state.showComment ? (
          <CardComment
            usercomment={this.props.usercomment}
            isLoaded={this.state.isLoaded}
          />
        ) : (
          <TableComment
            allPost={this.props.allPost}
            userByComment={this.userByComment}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allPost: state.rGetDataUser.GetUser.allPost,
    usercomment: state.rGetDataUser.GetUser.userByCommnet,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetAllPost: (result) => dispatch({ type: "GET_POST", data: result }),
    GetUserComment: (result) =>
      dispatch({ type: "GET_POST_COMMENT", data: result }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainerComment);
