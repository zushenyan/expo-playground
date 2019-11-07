import React from "react";
import TestRenderer from "react-test-renderer";
import SignIn from "./SignIn.component";

describe("SignIn", () => {
  it("initial props", () => {
    expect(
      TestRenderer.create(
        <SignIn
          initialValues={{ email: "foo", password: "bar" }}
          onSubmit={(): void => null}
          isSubmitting={false}
        />
      ).toJSON()
    ).toMatchSnapshot();
  });
  it("isSubmitting = true", () => {
    expect(
      TestRenderer.create(
        <SignIn
          initialValues={{ email: "foo", password: "bar" }}
          onSubmit={(): void => null}
          isSubmitting
        />
      ).toJSON()
    ).toMatchSnapshot();
  });
});
