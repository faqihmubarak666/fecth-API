import React from "react";
import Card from "react-bootstrap/Card";

const CardComment = (props) => {
  const { usercomment } = props;

  return (
    <div>
      <row>
        {usercomment.map((post) => (
          <Card
            style={{
              width: "50em",
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
              <Card.Text>comment: {post.message}</Card.Text>
              <Card.Text>{post.publishDate}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </row>
    </div>
  );
};

export default CardComment;
