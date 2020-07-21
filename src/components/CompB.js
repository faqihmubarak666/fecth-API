import React from "react";
import { Link } from "react-router-dom";

const CompB = (props) => {
  return (
    <div>
      component B
      <br />
      <Link to="/">Go to Comp A</Link>
      <p>{props.match.params.id}</p>
    </div>
  );
};

export default CompB;
