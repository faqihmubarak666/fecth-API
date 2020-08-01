import React from "react";
import Card from "react-bootstrap/Card";

const CardTag = (props) => {
  const { tags } = props;

  return (
    <div>
      <row>
        {tags.map((post) => (
          <Card
            style={{
              width: "84em",
              display: "inline-flex",
              margin: "10px 10px 10px 10px",
              // fontSize: "20px",
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
              <Card.Text>
                <i
                  class="fa fa-heart"
                  aria-hidden="true"
                  style={{ color: "red" }}
                ></i>
                {post.likes} likes{" "}
              </Card.Text>
              <Card.Text>{post.text}</Card.Text>
              <Card.Text>Date: {post.publishDate}</Card.Text>
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

export default CardTag;
