import React from "react";
import {
  NavigationStackScreenComponent,
  NavigationStackOptions
} from "react-navigation-stack";
import Routes from "../../constants/routes";
import Welcome from "../../components/layouts/Welcome";

const WelcomeScreen: NavigationStackScreenComponent = ({ navigation }) => (
  <Welcome
    onPressContinue={(): boolean => navigation.navigate(Routes.SignInScreen)}
  />
);

WelcomeScreen.navigationOptions = (): NavigationStackOptions => ({
  headerTitle: "Welcome"
});

export default WelcomeScreen;
