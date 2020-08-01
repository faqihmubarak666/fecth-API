import React from "react";
import Card from "react-bootstrap/Card";

const CardUser = (props) => {
  const { postUser } = props;

  return (
    <div>
      <row>
        {postUser.map((post) => (
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
                variant="top"
                src={post.image}
                style={{ height: "500px" }}
              />
              {post.tags.map((tag) => (
                <span>
                  <i class="fa fa-hashtag" aria-hidden="true">
                    {tag}
                  </i>
                </span>
              ))}
              <span>
                <Card.Text
                  style={{
                    textDecoration: "line-throug",
                  }}
                >
                  <i
                    class="fa fa-heart"
                    aria-hidden="true"
                    style={{ color: "red" }}
                  ></i>
                  {post.likes} likes {post.publishDate}
                </Card.Text>
              </span>
              <Card.Text>{post.text}</Card.Text>
              <Card.Text>
                <a href={post.link}>{post.link}</a>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </row>
    </div>
  );
};

export default CardUser;
