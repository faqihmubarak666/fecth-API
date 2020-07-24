import React from "react";
import { connect } from "react-redux";
import { getAllBooks } from "../fetch2/BooksService";
import TableBooks from "../fetch2/TableBooks";
import BooksContainer from "../fetch2/BooksContainer";

class Counter extends React.Component {
  // loadData = () => {
  //   getAllBooks().then((res) => {
  //     console.log("Books :", res);
  //     if (res.status === 200) {
  //       data = res.result;
  //     }
  //   });
  // };

  render() {
    return (
      <div>
        <TableBooks books={this.props.books} />
        <BooksContainer loadData={this.loadData} />
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return { books: state.result };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getAllBooks: () => dispatch({ type: "GETALLBOOK" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
