import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import getAllUsers from "../Dummy API/ServiceAPI";
import ContainerUser from "../Dummy API/User/ContainerUser";

describe("<ContainerUser />", () => {
  it("should", function () {
    const userComponent = shallow(<ContainerUser />);
    expect(userComponent.find("div").length).toBe(2);
  });

  it("Api Testing", async function () {
    const appComponent = new ContainerUser();
    var data = await Response.getAllUsers();
    expect(data.data[0].id).toEqual("0F8JIqi4zwvb77FGz6Wt");
  });
});
