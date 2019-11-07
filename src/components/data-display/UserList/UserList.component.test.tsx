import React from "react";
import TestRenderer from "react-test-renderer";
import UserList from "./UserList.component";

describe("UserList", () => {
  it("initial props", () => {
    expect(
      TestRenderer.create(<UserList list={[]} />).toJSON()
    ).toMatchSnapshot();
  });
  it("with props", () => {
    const list = [
      {
        avatar: "foo",
        fullname: "bar"
      }
    ];
    expect(
      TestRenderer.create(<UserList list={list} />).toJSON()
    ).toMatchSnapshot();
  });
});
