import React from "react";
import { Container, Spinner } from "native-base";

export type Props = {
  isLoading: boolean;
  children: React.ReactNode;
};

const DashboardScreen: React.FC<Props> = ({ isLoading, children }) => (
  <Container style={{ height: "100%", justifyContent: "center" }}>
    {isLoading ? <Spinner /> : children}
  </Container>
);

export default DashboardScreen;
