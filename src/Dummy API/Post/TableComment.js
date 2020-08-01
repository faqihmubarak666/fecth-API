import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Page.css";
import Card from "react-bootstrap/Card";
import loading from "../../image/animation_300_kdabp29z.gif";

const TableComment = (props) => {
  const { allPost, userByComment, isLoaded } = props;

  return (
    <div>
      {/* {isLoaded ? ( */}
      <row>
        {allPost.map((post) => (
          <Card
            style={{
              width: "84em",
              display: "inline-flex",
              margin: "10px 10px 10px 10px",
            }}
          >
            <Card.Body>
              <Card.Title style={{ fontWeight: "bold" }}>
                {post.owner.title}. {post.owner.firstName} {post.owner.lastName}
              </Card.Title>
              <Card.Img
                variant="top"
                src={post.owner.picture}
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "30px",
                }}
              />
              <Card.Text>{post.owner.email}</Card.Text>
              <Card.Img
                src={post.image}
                variant="top"
                style={{ height: "500px" }}
              />
              {post.tags.map((tag) => (
                <span>
                  <i class="fa fa-hashtag" aria-hidden="true">
                    {tag}
                  </i>
                </span>
              ))}
              <Card.Text>
                <i
                  class="fa fa-heart"
                  aria-hidden="true"
                  style={{ color: "red" }}
                ></i>{" "}
                {post.likes} likes
              </Card.Text>
              <Card.Text>{post.text}</Card.Text>
              <Card.Text>Date: {post.publishDate}</Card.Text>
              <Card.Text>
                <a href={post.link}>{post.link}</a>
              </Card.Text>

              <button
                className="button-table"
                onClick={() => userByComment(post.id)}
                style={{
                  backgroundColor: "cornflowerblue",
                  color: "white",
                }}
              >
                <i class="fa fa-comment" aria-hidden="true">
                  Comment
                </i>
              </button>
            </Card.Body>
          </Card>
        ))}
      </row>
      {/* // ) : ( // <img src={loading} alt="loading" style={{
            marginTop: "180px",
          }}/>
      // )} */}
    </div>
  );
};
export default TableComment;
