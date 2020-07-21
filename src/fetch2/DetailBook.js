import React from "react";
import { Form, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap/cjs";

const DetailBook = (props) => {
  const {
    show,
    onHide,
    books: {
      id_buku,
      judul_buku,
      nama_kategori,
      nama_pengarang,
      nama_penerbit,
    },
  } = props;
  return (
    <div>
      <Modal show={show}>
        <Modal.Body>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              DetailBook
            </Modal.Title>
          </Modal.Header>

          <Form>
            <Form.Group controlId="formBookName">
              <Form.Label>Id Buku</Form.Label>
              <Form.Control value={id_buku} />
            </Form.Group>
          </Form>

          <Form>
            <Form.Group controlId="formBookName">
              <Form.Label>Judul Buku</Form.Label>
              <Form.Control value={judul_buku} />
            </Form.Group>
          </Form>

          <Form>
            <Form.Group controlId="formBookName">
              <Form.Label>Nama Kategori</Form.Label>
              <Form.Control value={nama_kategori} />
            </Form.Group>
          </Form>

          <Form>
            <Form.Group controlId="formBookName">
              <Form.Label>Nama Pengarang</Form.Label>
              <Form.Control value={nama_pengarang} />
            </Form.Group>
          </Form>

          <Form>
            <Form.Group controlId="formBookName">
              <Form.Label>Nama Penerbit</Form.Label>
              <Form.Control value={nama_penerbit} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} style={{ backgroundColor: "blue" }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DetailBook;
