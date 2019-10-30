import React from "react";
import { Provider } from "react-redux";
import RootNavigator from "./RootNavigator";
import store from "./store";

const Main: React.FC = () => (
  <Provider store={store}>
    <RootNavigator />
  </Provider>
);

export default Main;
