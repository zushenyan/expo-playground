import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  NavigationStackScreenComponent,
  NavigationStackOptions
} from "react-navigation-stack";
import SignIn from "@/components/layouts/SignIn";
import { getIsSubmitting } from "./SignInScreen.selector";
import saga from "./SignInScreen.saga";
import { validationSchema } from "./SignInScreen.validation";

const SignInScreen: NavigationStackScreenComponent = () => {
  const dispatch = useDispatch();

  const isSubmitting = useSelector(getIsSubmitting);

  return (
    <SignIn
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values): void => {
        dispatch(saga.actions.submit(values));
      }}
      isSubmitting={isSubmitting}
    />
  );
};

SignInScreen.navigationOptions = (): NavigationStackOptions => ({
  headerTitle: "Sign In"
});

export default SignInScreen;
