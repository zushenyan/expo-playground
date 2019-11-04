import React from "react";
import { Container, Content, Form, Button, Text } from "native-base";
import { Formik, Field, FormikConfig } from "formik";
import CustomInput from "@/components/inputs/CustomInput";

export type Values = {
  email: string;
  password: string;
};

export type Props = FormikConfig<Values> & {
  isSubmitting: boolean;
};

const SignInScreen: React.FC<Props> = props => {
  const { isSubmitting, ...formikConfig } = props;
  return (
    <Container>
      <Text style={{ textAlign: "center", marginVertical: 10 }}>
        Please fill out the following info to proceed
      </Text>
      <Content style={{ position: "relative" }} padder>
        <Formik {...formikConfig}>
          {({ handleSubmit }): React.ReactElement => (
            <Form>
              <Field name="email" component={CustomInput} label="Email" />
              <Field
                name="password"
                component={CustomInput}
                label="Password"
                secureTextEntry
              />
              <Button
                style={{ justifyContent: "center", marginVertical: 10 }}
                onPress={handleSubmit}
                disabled={isSubmitting}
              >
                <Text>{isSubmitting ? "Submitting..." : "Submit"}</Text>
              </Button>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default SignInScreen;
