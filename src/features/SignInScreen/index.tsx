import React from "react";
import SignIn from "../../components/layouts/SignIn";
import {
  NavigationStackScreenComponent,
  NavigationStackOptions
} from "react-navigation-stack";
import Routes from "../../constants/routes";

const SignInScreen: NavigationStackScreenComponent = ({ navigation }) => (
  <SignIn
    onSubmit={(): boolean => navigation.navigate(Routes.DashboardScreen)}
  />
);

SignInScreen.navigationOptions = (): NavigationStackOptions => ({
  headerTitle: "Sign In"
});

export default SignInScreen;
