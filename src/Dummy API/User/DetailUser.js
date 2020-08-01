import React from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap/cjs";
import Card from "react-bootstrap/Card";

const DetailUser = (props) => {
  const { show, onHide, user } = props;
  return (
    <div>
      <Modal show={show}>
        <Modal.Body>
          <Modal.Header
            onClick={onHide}
            style={{ backgroundColor: "cornflowerblue" }}
          >
            <Modal.Title
              style={{
                fontWeight: "bold",
                textAlign: "center",
                margin: "0 auto",
              }}
            >
              DETAIL USER
            </Modal.Title>
          </Modal.Header>

          <Card style={{ width: "29rem" }}>
            <img
              src={user.picture}
              style={{
                width: "230px",
                height: "230px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "10px",
              }}
            />
            <Card.Body>
              <Card.Title style={{ fontWeight: "bold", textAlign: "center" }}>
                {user.title}. {user.firstName} {user.lastName}
              </Card.Title>
              <Card.Text>Id: {user.id}</Card.Text>
              <Card.Text>Date Of Birht:{user.dateOfBirth}</Card.Text>
              <Card.Text>Gender: {user.gender}</Card.Text>
              <Card.Text>Phone: {user.phone}</Card.Text>
              <Card.Text>Register Date: {user.registerDate}</Card.Text>
              <Card.Text>Email: {user.email}</Card.Text>
              <img
                style={{ width: "430px", height: "220px" }}
                src={`https://maps.googleapis.com/maps/api/staticmap?markers=${user.state},${user.country},${user.street},${user.city}&center=${user.state},${user.country},${user.street},${user.city}&zoom=8&size=600x300&key=AIzaSyD9dyB7_5evAcVtSOf92NlVO8Cp0OdEwTA`}
                alt="location"
              />
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={onHide}
            style={{
              backgroundColor: "cornflowerblue",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DetailUser;
