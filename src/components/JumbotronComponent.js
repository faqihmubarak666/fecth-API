import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";
import logo from "../image/book.jpg";

const JumbotronComponent = (props) => {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1 className="display-3"> Welcome Enigma Library</h1>
          <p className="lead">
            This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-2" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead">
            <Button color="dark">Learn More</Button>
          </p>
        </Container>
        <div>
          <img
            src={logo}
            alt="image Home"
            style={{
              width: 1100,
              height: 500,
              display: "block",
              margin: "auto",
            }}
          />
        </div>
      </Jumbotron>
    </div>
  );
};

export default JumbotronComponent;
