import React from "react";
import { Container, Content, Form, Button, Text } from "native-base";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import CustomInput from "../../inputs/CustomInput";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("invalid email format")
    .required("required"),
  password: Yup.string()
    .min(6, "password length should be at least 6 characters")
    .required("required")
});

type Props = {
  onSubmit(): void;
};

const SignInScreen: React.FC<Props> = ({ onSubmit }: Props) => {
  return (
    <Container>
      <Text>Please fill out the following info to proceed</Text>
      <Content>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ handleSubmit }): React.ReactElement => (
            <Form>
              <Field name="email" component={CustomInput} label="Email" />
              <Field name="password" component={CustomInput} label="Password" />
              <Button onPress={handleSubmit}>
                <Text>Continue</Text>
              </Button>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default SignInScreen;
