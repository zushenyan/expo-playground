import React from "react";
import TestRenderer from "react-test-renderer";
import Welcome from "./Welcome.component";

describe("Welcome", () => {
  it("initial props", () => {
    expect(
      TestRenderer.create(
        <Welcome onPressContinue={(): void => null} />
      ).toJSON()
    ).toMatchSnapshot();
  });
});
