import React from "react";
import { Container, Content, Form, Button, Text } from "native-base";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import CustomInput from "@/components/inputs/CustomInput";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Required"),
  password: Yup.string()
    .min(6, "Password length should be at least 6 characters")
    .required("Required")
});

type Props = {
  isSubmitting: boolean;
  onSubmit(values, actions): void;
};

const SignInScreen: React.FC<Props> = ({ isSubmitting, onSubmit }: Props) => {
  return (
    <Container>
      <Text style={{ textAlign: "center", marginVertical: 10 }}>
        Please fill out the following info to proceed
      </Text>
      <Content style={{ position: "relative" }} padder>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ handleSubmit }): React.ReactElement => (
            <Form>
              <Field name="email" component={CustomInput} label="Email" />
              <Field name="password" component={CustomInput} label="Password" />
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
