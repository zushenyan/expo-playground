import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  NavigationStackScreenComponent,
  NavigationStackOptions
} from "react-navigation-stack";
import SignIn from "@/components/layouts/SignIn";
import { getIsSubmitting } from "./selector";
import sagaSlice from "./saga";

const SignInScreen: NavigationStackScreenComponent = () => {
  const dispatch = useDispatch();

  const isSubmitting = useSelector(getIsSubmitting);

  const onSubmit = (values, actions): void => {
    dispatch(sagaSlice.actions.submit({ values, actions }));
  };

  return <SignIn onSubmit={onSubmit} isSubmitting={isSubmitting} />;
};

SignInScreen.navigationOptions = (): NavigationStackOptions => ({
  headerTitle: "Sign In"
});

export default SignInScreen;
