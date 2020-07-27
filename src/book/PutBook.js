import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import "../Put.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";

const PutBook = (props) => {
  const [result, setResult] = useState();

  const getCategory = async () => {
    try {
      const response = await fetch(`/category`);
      const data = await response.json();
      setResult(data.result);
      props.GetDataCategory(data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const getAuthor = async () => {
    try {
      const response = await fetch(`/author`);
      const data = await response.json();
      setResult(data.result);
      props.GetDataAuthor(data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const getPublisher = async () => {
    try {
      const response = await fetch(`/publisher`);
      const data = await response.json();
      setResult(data.result);
      props.GetDataPublisher(data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategory();
    getAuthor();
    getPublisher();
  }, []);

  const {
    selectedBook: {
      id_buku,
      judul_buku,
      id_kategori,
      nama_kategori,
      id_pengarang,
      nama_pengarang,
      id_penerbit,
      nama_penerbit,
    },
    handleChangeInput,
    editBook,
    dataCategory,
    dataAuthor,
    dataPublisher,
  } = props;
  console.log(`data sudah di put`, props.dataCategory);
  console.log(`props category`, props.dataCategory);
  return (
    <div className="body">
      <div className="col-md-4 col-sm-12 mb-3">
        <div class="login-box">
          <Card border="success" className="body_card">
            <h1>Update Book</h1>
            <div class="textbox">
              <i class="fa fa-book" aria-hidden="true"></i>
              <Form.Control
                type="text"
                name="id_buku"
                placeholder="Input id buku"
                value={id_buku}
                disabled={true}
                onChange={handleChangeInput}
              />
            </div>
            <div class="textbox">
              <i class="fa fa-book" aria-hidden="true"></i>
              <Form.Control
                type="text"
                name="judul_buku"
                placeholder="Input judul buku"
                value={judul_buku}
                onChange={handleChangeInput}
              />
            </div>
            <div class="textbox">
              <i class="fa fa-list-ul" aria-hidden="true"></i>
              <Form.Control
                as="select"
                defaultValue={id_kategori}
                type="text"
                name="id_kategori"
                placeholder="Input id kategori"
                value={id_kategori}
                onChange={handleChangeInput}
              >
                {dataCategory.map((data) => (
                  <option value={data.id_category}>{data.name_category}</option>
                ))}
              </Form.Control>
            </div>
            <div class="textbox">
              <i class="fa fa-user" aria-hidden="true"></i>
              <Form.Control
                as="select"
                defaultValue={id_pengarang}
                type="text"
                name="id_pengarang"
                placeholder="Input id pengarang"
                value={id_pengarang}
                onChange={handleChangeInput}
              >
                {dataAuthor.map((data) => (
                  <option value={data.id_author}>{data.name_author}</option>
                ))}
              </Form.Control>
            </div>
            <div class="textbox">
              <i class="fa fa-user" aria-hidden="true"></i>
              <Form.Control
                as="select"
                defaultValue={id_penerbit}
                type="text"
                name="id_penerbit"
                placeholder="Input id penerbit"
                value={id_penerbit}
                onChange={handleChangeInput}
              >
                {dataPublisher.map((data) => (
                  <option value={data.id_publisher}>
                    {data.name_publisher}
                  </option>
                ))}
              </Form.Control>
            </div>
            <Button
              className="btn"
              variant="outline-success"
              type="submit"
              onClick={() => editBook()}
            >
              Submit
            </Button>
          </Card>
          <br />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dataCategory: state.rGetDataCategory.GetCategory.result,
    dataAuthor: state.rGetDataAuthor.GetAuthor.result,
    dataPublisher: state.rGetDataPublisher.GetPublisher.result,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetDataCategory: (dataResult) =>
      dispatch({ type: "GETCATEGORY", data: dataResult }),
    GetDataAuthor: (dataResult) =>
      dispatch({ type: "GETAUTHOR", data: dataResult }),
    GetDataPublisher: (dataResult) =>
      dispatch({ type: "GETPUBLISHER", data: dataResult }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PutBook);
