import React from "react";
import { Link } from "react-router-dom";

const compA = () => {
  return (
    <div>
      component A
      <br />
      <Link to="/compB">Go to Comp B</Link>
      <br />
      <Link to="/compB/1">Go to Comp B with id</Link>
    </div>
  );
};

export default compA;
