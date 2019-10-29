import React from "react";
import {
  NavigationStackScreenComponent,
  NavigationStackOptions,
  NavigationStackScreenProps
} from "react-navigation-stack";
import { Container, Button, Text } from "native-base";
import Routes from "./constants/routes";

const WelcomeScreen: NavigationStackScreenComponent = (
  props: NavigationStackScreenProps
) => {
  return (
    <Container>
      <Text>Hello User! Please continue to sign up screen!</Text>
      <Button
        onPress={(): boolean => props.navigation.navigate(Routes.SignInScreen)}
      >
        <Text>Continue</Text>
      </Button>
    </Container>
  );
};

WelcomeScreen.navigationOptions = (): NavigationStackOptions => ({
  headerTitle: "Welcome"
});

export default WelcomeScreen;
