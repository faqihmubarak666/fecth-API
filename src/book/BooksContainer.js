import React, { Component } from "react";
import {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} from "./BooksService";
import TableBooks from "./TableBooks";
import DetailBook from "./DetailBook";
import PutBook from "./PutBook";
import CreateBook from "./CreateBook";
import swal from "sweetalert";
import { connect } from "react-redux";

class BooksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // books: [],
      selectedBook: {},
      id_buku: "",
      judul_buku: "",
      id_kategori: "",
      nama_kategori: "",
      id_pengarang: "",
      nama_pengarang: "",
      id_penerbit: "",
      nama_penerbit: "",
      showDetail: false,
      create: false,
      put: false,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    getAllBooks().then((res) => {
      console.log("Books :", res);
      if (res.status === 200) {
        // this.setState({ ...this.state, books: res.result });
        const dataResult = res.result;
        this.props.GetData(dataResult);
      }
    });
  };

  getBookById = (id) => {
    getBookById(id).then((res) => {
      if (res.status === 200) {
        this.setState({ ...this.state, selectedBook: res.result });
      }
    });
  };

  handleChangeInput = (event) => {
    const name = event.target.name;
    this.setState({ ...this.state, [name]: event.target.value });
  };

  addNewBook = () => {
    createBook({
      id_buku: this.state.id_buku,
      judul_buku: this.state.judul_buku,
      id_kategori: this.state.id_kategori,
      id_pengarang: this.state.id_pengarang,
      id_penerbit: this.state.id_penerbit,
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          swal("Add Book Success", "You clicked the button!", "success");
          this.setState({
            ...this.state,
            id_buku: "",
            judul_buku: "",
            id_kategori: "",
            id_pengarang: "",
            id_penerbit: "",
          });
          this.loadData();
        }
      })
      .catch((err) => {
        swal(err);
      });
  };

  editBook = () => {
    updateBook({
      id_buku: this.state.id_buku,
      judul_buku: this.state.judul_buku,
      id_kategori: this.state.id_kategori,
      id_pengarang: this.state.id_pengarang,
      id_penerbit: this.state.id_penerbit,
    })
      .then((response) => {
        console.log("ini response :", response);
        if (response.status === 200) {
          swal("Update Book Success", "You clicked the button!", "success");
          this.setState({
            ...this.state,
            id_buku: "",
            judul_buku: "",
            id_kategori: "",
            id_pengarang: "",
            id_penerbit: "",
          });
          this.loadData();
        }
      })
      .catch((err) => {
        swal(err);
      });
  };

  removeBook = (id_buku) => {
    const onDelete = window.confirm(`Delete book with id ${id_buku}`);

    if (onDelete) {
      deleteBook(id_buku).then((response) => {
        if (response.status === 200) {
          alert(`Book successfully deleted`);
          this.loadData();
        }
      });
    }
  };

  showDetail = (books) => {
    this.setState({
      ...this.state,
      showDetail: !this.state.showDetail,
      selectedBook: { ...books },
      create: this.state.create,
    });
  };

  hideDetail = () => {
    this.setState({
      ...this.state,
      showDetail: !this.state.showDetail,
      selectedBook: {},
      create: this.state.create,
    });
  };

  buttonCreate = () => {
    this.setState({
      ...this.state,
      create: !this.state.create,
    });
  };

  buttonPut = (book) => {
    console.log(`ini book`, book);
    this.setState({
      ...this.state,
      put: !this.state.put,
      selectedBook: book,
    });
  };

  render() {
    return (
      <div>
        {this.state.put ? (
          <PutBook
            selectedBook={this.state.selectedBook}
            handleChangeInput={this.handleChangeInput}
            editBook={this.editBook}
          />
        ) : (
          false
        )}

        {this.state.create ? (
          <CreateBook
            id_buku={this.state.id_buku}
            judul_buku={this.state.judul_buku}
            id_kategori={this.state.id_kategori}
            id_pengarang={this.state.id_pengarang}
            id_penerbit={this.state.id_penerbit}
            handleChangeInput={this.handleChangeInput}
            addNewBook={this.addNewBook}
          />
        ) : (
          false
        )}
        <h1 style={{ color: "lightgoldenrodyellow" }}>TABLE BOOKS</h1>
        <TableBooks
          showDetail={this.showDetail}
          buttonCreate={this.buttonCreate}
          buttonPut={this.buttonPut}
          removeBook={this.removeBook}
        />
        <DetailBook
          show={this.state.showDetail}
          books={this.state.selectedBook}
          onHide={this.hideDetail}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    GetData: (dataResult) => dispatch({ type: "GETALLBOOK", data: dataResult }),
  };
};

export default connect(null, mapDispatchToProps)(BooksContainer);
