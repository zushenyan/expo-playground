import React from "react";
import {
  NavigationStackScreenComponent,
  NavigationStackOptions
} from "react-navigation-stack";
import Dashboard from "../../components/layouts/Dashboard";

const DashboardScreen: NavigationStackScreenComponent = () => <Dashboard />;

DashboardScreen.navigationOptions = (): NavigationStackOptions => ({
  headerTitle: "Dashboard"
});

export default DashboardScreen;
