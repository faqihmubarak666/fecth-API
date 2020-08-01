import React, { Component } from "react";
import TableTags from "./TableTags";
import { connect } from "react-redux";
import { getUserByTags, getAllTags } from "../ServiceAPI";
import CardTag from "./CardTag";
import "../../Page.css";

class ContainerTags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.allTags();
  }

  allTags = () => {
    getAllTags().then((response) => {
      const result = response.data;
      this.props.GetAllTags(result);
      this.setState({
        isLoaded: !this.state.isLoaded,
      });
    });
  };

  userByTags = (tagTitle) => {
    getUserByTags(tagTitle).then((response) => {
      console.log("tags", response.data);
      const result = response.data;
      this.props.GetUserTags(result);
      console.log("hasilnya", result);
    });
  };

  render() {
    return (
      <div>
        <TableTags
          allTags={this.props.allTags}
          userByTags={this.userByTags}
          isLoaded={this.state.isLoaded}
        />
        <CardTag tags={this.props.tags} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allTags: state.rGetDataUser.GetUser.allTags,
    tags: state.rGetDataUser.GetUser.postTags,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetAllTags: (result) => dispatch({ type: "GET_TAGS", data: result }),
    GetUserTags: (result) => dispatch({ type: "GET_TAGS_POST", data: result }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainerTags);
