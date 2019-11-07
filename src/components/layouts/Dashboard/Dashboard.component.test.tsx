import React from "react";
import TestRenderer from "react-test-renderer";
import { Text } from "react-native";
import Dashboard from "./Dashboard.component";

describe("Dashboard", () => {
  const children = <Text>aaa</Text>;
  it("initial props", () => {
    expect(
      TestRenderer.create(
        <Dashboard isLoading={false}>{children}</Dashboard>
      ).toJSON()
    ).toMatchSnapshot();
  });
  it("isLoading = ture", () => {
    expect(
      TestRenderer.create(<Dashboard isLoading>{children}</Dashboard>).toJSON()
    ).toMatchSnapshot();
  });
});
