import React from "react";
import { Provider } from "react-redux";
import RootNavigator from "@/RootNavigator";
import store from "@/store";
import { setTopLevelNavigator } from "@/utils/navigator";

const Main: React.FC = () => (
  <Provider store={store}>
    <RootNavigator ref={(navigator): void => setTopLevelNavigator(navigator)} />
  </Provider>
);

export default Main;
