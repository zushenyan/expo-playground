import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  NavigationStackScreenComponent,
  NavigationStackOptions
} from "react-navigation-stack";
import Dashboard from "@/components/layouts/Dashboard";
import UserList from "@/components/data-display/UserList";
import Header from "./Header/Header.component";
import sagaSlice from "./DashboardScreen.saga";
import { getUserList, getIsLoading } from "./DashboardScreen.selector";

const DashboardScreen: NavigationStackScreenComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sagaSlice.actions.mount());
  }, [dispatch]);

  const userList = useSelector(getUserList);
  const isLoading = useSelector(getIsLoading);

  return (
    <Dashboard isLoading={isLoading}>
      <UserList list={userList} />
    </Dashboard>
  );
};

DashboardScreen.navigationOptions = (): NavigationStackOptions => ({
  headerTitle: <Header />
});

export default DashboardScreen;
