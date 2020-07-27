import React from "react";
import { Form, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap/cjs";

const DetailBook = (props) => {
  const {
    show,
    onHide,

    id_buku,
    judul_buku,
    id_kategori,
    nama_kategori,
    id_pengarang,
    nama_pengarang,
    id_penerbit,
    nama_penerbit,
  } = props;

  return (
    <div>
      <Modal show={show}>
        <Modal.Body>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              DETAIL USER
            </Modal.Title>
          </Modal.Header>

          <Form>
            <Form.Group controlId="formBookName">
              <Form.Label> ID</Form.Label>
              <Form.Control value={id_buku} type="text" name="id_buku" />
            </Form.Group>
          </Form>

          <Form>
            <Form.Group controlId="formBookName">
              <Form.Label>JUDUL BUKU</Form.Label>
              <Form.Control value={judul_buku} type="text" name="judul_buku" />
            </Form.Group>
          </Form>

          <Form>
            <Form.Group controlId="formBookName">
              <Form.Label>ID KATEGORI</Form.Label>
              <Form.Control
                value={id_kategori}
                type="text"
                name="id_kategori"
              />
            </Form.Group>
          </Form>

          <Form>
            <Form.Group controlId="formBookName">
              <Form.Label>ID PENGARANG</Form.Label>
              <Form.Control
                value={id_pengarang}
                type="text"
                name="id_pengarang"
              />
            </Form.Group>
          </Form>

          <Form>
            <Form.Group controlId="formBookName">
              <Form.Label>ID PENERBIT</Form.Label>
              <Form.Control
                value={id_penerbit}
                type="text"
                name="id_penerbit"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide} style={{ backgroundColor: "blue" }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      )
    </div>
  );
};

export default DetailBook;
