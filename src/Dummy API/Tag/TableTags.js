import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Page.css";
import Card from "react-bootstrap/Card";
import loading from "../../image/animation_300_kdabp29z.gif";

const TableTags = (props) => {
  const { allTags, userByTags, isLoaded } = props;

  return (
    <div>
      {isLoaded ? (
        <row>
          <h2
            style={{
              fontWeight: "bold",
            }}
          >
            #HASTAG
          </h2>

          {allTags.map((tagTittle) => (
            <Card
              style={{
                width: "20em",
                display: "inline-flex",
                margin: "10px 10px 10px 10px",
              }}
            >
              <Card.Body>
                <Card.Text style={{ fontSize: "20px" }}>
                  <i class="fa fa-hashtag" aria-hidden="true">
                    {tagTittle}
                  </i>
                </Card.Text>

                <button
                  className="button-table"
                  onClick={() => userByTags(tagTittle)}
                  style={{
                    backgroundColor: "cornflowerblue",
                    color: "white",
                    width: "200px",
                    height: "50px",
                  }}
                >
                  Post By
                  <i class="fa fa-hashtag" aria-hidden="true"></i>
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

export default TableTags;
