import { NavigationAction, NavigationProp } from "react-navigation";

let _navigator: NavigationProp<unknown>;

export const setTopLevelNavigator = (
  navigatorRef: NavigationProp<unknown>
): void => {
  _navigator = navigatorRef;
};

export const dispatch = (action: NavigationAction): void => {
  _navigator.dispatch(action);
};
