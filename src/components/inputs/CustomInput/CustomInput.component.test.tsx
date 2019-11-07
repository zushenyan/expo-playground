import React from "react";
import TestRenderer from "react-test-renderer";
import { Formik, Field, Form } from "formik";
import CustomInput from "./CustomInput.component";

describe("CustomInput", () => {
  it("initial props", () => {
    expect(
      TestRenderer.create(
        <Formik initialValues={{ foo: "" }} onSubmit={(): void => null}>
          <Form>
            <Field name="name" label="label" component={CustomInput} />
          </Form>
        </Formik>
      ).toJSON()
    ).toMatchSnapshot();
  });
});
