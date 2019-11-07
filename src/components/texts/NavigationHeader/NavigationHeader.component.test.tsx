import React from "react";
import TestRenderer from "react-test-renderer";
import NavigationHeader from "./NavigationHeader.component";

describe("NavigationHeader", () => {
  it("initial props", () => {
    expect(
      TestRenderer.create(
        <NavigationHeader title="title" subtitle="subtitle" />
      ).toJSON()
    ).toMatchSnapshot();
  });
});
