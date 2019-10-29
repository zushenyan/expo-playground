import React from "react";
import {
  NavigationStackScreenComponent,
  NavigationStackOptions
} from "react-navigation-stack";
import { Container, Text } from "native-base";

const DashboardScreen: NavigationStackScreenComponent = () => {
  return (
    <Container>
      <Text>I am Dashboard Screen</Text>
    </Container>
  );
};

DashboardScreen.navigationOptions = (): NavigationStackOptions => ({
  headerTitle: "Dashboard"
});

export default DashboardScreen;
