import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";
import book from "../image/book.jpg";
import book2 from "../image/book2.jpg";
import book3 from "../image/book3.jpg";
import Carousel from "react-bootstrap/Carousel";

const JumbotronComponent = (props) => {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1 className="display-3"> Welcome Dummy API</h1>
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
          <Carousel
            style={{ width: "1300px", display: "block", margin: "0 auto" }}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={book3}
                alt="First slide"
                style={{ width: "50px", height: "550px" }}
              />
              <Carousel.Caption>
                <h3>First slide label</h3>

                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={book2}
                alt="Third slide"
                style={{ width: "50px", height: "550px" }}
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={book}
                alt="Third slide"
                style={{ width: "50px", height: "550px" }}
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>

                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </Jumbotron>
    </div>
  );
};

export default JumbotronComponent;
