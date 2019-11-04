import React from "react";
import { Content, Text } from "native-base";

export type Props = {
  title: string;
  subtitle: string;
};

const NavigationHeader: React.FC<Props> = ({ title, subtitle }) => (
  <Content>
    <Text
      style={{
        textAlign: "center",
        color: "white"
      }}
    >
      {title}
    </Text>
    <Text
      style={{
        textAlign: "center",
        color: "white"
      }}
    >
      {subtitle}
    </Text>
  </Content>
);

export default NavigationHeader;
