import React from "react";
import { Form, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap/cjs";

const UpdateBook = (props) => {
  const {
    show,
    onHide,
    handleChangeInput,
    putBook,

    id_buku,
    judul_buku,
    id_kategori,
    // nama_kategori,
    id_pengarang,
    // nama_pengarang,
    id_penerbit,
    // nama_penerbit,
  } = props;

  return (
    <div>
      <Modal show={show}>
        <Modal.Body>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              UPDATE USER
            </Modal.Title>
          </Modal.Header>

          <Form>
            <Form.Group controlId="formBookName">
              <Form.Label>ID BUKU</Form.Label>
              <Form.Control
                defaultValue={id_buku}
                type="text"
                name="id_buku"
                disabled={true}
                placeholder="Input id_buku"
                onChange={handleChangeInput}
              />
            </Form.Group>
          </Form>

          <Form>
            <Form.Group controlId="formBookName">
              <Form.Label>JUDUL BUKU</Form.Label>
              <Form.Control
                defaultValue={judul_buku}
                type="text"
                name="judul_buku"
                placeholder="Input judul_buku"
                onChange={handleChangeInput}
              />
            </Form.Group>
          </Form>

          <Form>
            <Form.Group controlId="formBookName">
              <Form.Label>ID KATEGORI</Form.Label>
              <Form.Control
                defaultValue={id_kategori}
                type="text"
                name="id_kategori"
                placeholder="Input id_kategori"
                onChange={handleChangeInput}
              />
            </Form.Group>
          </Form>

          <Form>
            <Form.Group controlId="formBookName">
              <Form.Label>ID PENGARANG</Form.Label>
              <Form.Control
                defaultValue={id_pengarang}
                type="text"
                name="id_pengarang"
                placeholder="Input id_pengarang"
                onChange={handleChangeInput}
              />
            </Form.Group>
          </Form>

          <Form>
            <Form.Group controlId="formBookName">
              <Form.Label>ID PENERBIT</Form.Label>
              <Form.Control
                defaultValue={id_penerbit}
                type="text"
                name="id_penerbit"
                placeholder="Input id_penerbit"
                onChange={handleChangeInput}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() =>
              putBook(
                id_buku,
                judul_buku,
                id_kategori,
                id_pengarang,
                id_penerbit
              )
            }
            style={{ backgroundColor: "blue" }}
          >
            Save
          </Button>
          <Button onClick={onHide} style={{ backgroundColor: "blue" }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateBook;
