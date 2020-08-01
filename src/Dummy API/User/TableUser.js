import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Page.css";
import Card from "react-bootstrap/Card";
import { Form, FormControl, Button } from "react-bootstrap";
import loading from "../../image/animation_300_kdabp29z.gif";

const Tabledata = (props) => {
  const {
    allUser,
    userByPost,
    userById,
    handleChangeInput,
    search,
    isLoaded,
  } = props;
  return (
    <div>
      {isLoaded ? (
        <row>
          <Form inline className="form-search">
            <FormControl
              name="search"
              type="text"
              placeholder="Search..."
              className="mr-sm-2"
              style={{ width: "300px", borderRadius: "15px" }}
              onChange={(event) => handleChangeInput(event)}
            />
            <Button onClick={() => userById(search)}>Search</Button>
          </Form>
          {allUser.map((data) => (
            <Card
              style={{
                width: "20em",
                display: "inline-flex",
                margin: "10px 10px 10px 10px",
              }}
            >
              <Card.Body>
                <Card.Img
                  variant="top"
                  src={data.picture}
                  style={{ height: "220px" }}
                />
                <button onClick={() => userById(data.id)}>{data.id}</button>
                {/* <Card.Text>{data.id}</Card.Text> */}
                <Card.Title style={{ fontWeight: "bold" }}>
                  {data.title}. {data.firstName} {data.lastName}
                </Card.Title>
                <Card.Text>{data.email}</Card.Text>
                <button
                  className="button-table"
                  onClick={() => userById(data.id)}
                  style={{
                    backgroundColor: "cornflowerblue",
                    color: "white",
                  }}
                >
                  <i class="fa fa-info" aria-hidden="true">
                    Profile
                  </i>
                </button>
                <button
                  className="button-table"
                  onClick={() => userByPost(data.id)}
                  style={{
                    backgroundColor: "cornflowerblue",
                    color: "white",
                  }}
                >
                  <i class="fa fa-paper-plane-o" aria-hidden="true">
                    Post
                  </i>
                </button>
              </Card.Body>
            </Card>
          ))}
        </row>
      ) : (
        <img
          src={loading}
          alt="loading"
          style={{
            marginTop: "180px",
          }}
        />
      )}
    </div>
  );
};

export default Tabledata;
