import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CompA from "../components/CompA";
import CompB from "../components/CompB";

const Nav = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={CompA} />
          <Route strict path="/compB" component={CompB} />
          <Route path="/compB/:id" component={CompB} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Nav;
