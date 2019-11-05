import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Routes from "./constants/routes";
import WelcomeScreen from "./features/Main/WelcomeScreen";
import DashboardScreen from "./features/Main/DashboardScreen";
import SignInScreen from "./features/Main/SignInScreen";

const MainNavigator = createStackNavigator(
  {
    [Routes.DashboardScreen]: DashboardScreen
  },
  {
    initialRouteName: Routes.DashboardScreen,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const WelcomeNavigator = createStackNavigator(
  {
    [Routes.WelcomeScreen]: WelcomeScreen,
    [Routes.SignInScreen]: SignInScreen
  },
  {
    initialRouteName: Routes.WelcomeScreen,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const RootNavigator = createStackNavigator(
  {
    [Routes.MainNavigator]: MainNavigator,
    [Routes.WelcomeNavigator]: WelcomeNavigator
  },
  {
    initialRouteName: Routes.WelcomeNavigator,
    mode: "modal",
    headerMode: "none"
  }
);

export default createAppContainer(RootNavigator);
