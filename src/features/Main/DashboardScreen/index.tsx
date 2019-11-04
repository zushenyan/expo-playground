import React from "react";
import {
  NavigationStackScreenComponent,
  NavigationStackOptions
} from "react-navigation-stack";
import Dashboard from "@/components/layouts/Dashboard";
import Header from "./Header";

const DashboardScreen: NavigationStackScreenComponent = () => <Dashboard />;

DashboardScreen.navigationOptions = (): NavigationStackOptions => ({
  headerTitle: <Header />
});

export default DashboardScreen;
