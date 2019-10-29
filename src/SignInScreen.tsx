import React from "react";
import {
  NavigationStackScreenComponent,
  NavigationStackOptions,
  NavigationStackScreenProps
} from "react-navigation-stack";
import { Container, Button, Text } from "native-base";
import Routes from "./constants/routes";

const SignInScreen: NavigationStackScreenComponent = (
  props: NavigationStackScreenProps
) => {
  return (
    <Container>
      <Text>I am sign in screen</Text>
      <Button
        onPress={(): boolean =>
          props.navigation.navigate(Routes.DashboardScreen)
        }
      >
        <Text>Continue</Text>
      </Button>
    </Container>
  );
};

SignInScreen.navigationOptions = (): NavigationStackOptions => ({
  headerTitle: "Sign In"
});

export default SignInScreen;
