import React from "react";
import { Image } from "react-native";
import { Container, Content, Button, Text } from "native-base";

type Props = {
  onPressContinue(): void;
};

const Welcome: React.FC<Props> = ({ onPressContinue }: Props) => (
  <Container>
    <Content padder>
      <Image source={require("./cat.jpg")} style={{ width: "auto" }} />
      <Text style={{ textAlign: "center", marginTop: 10 }}>
        💃Hello There🕺
      </Text>
      <Text style={{ textAlign: "center", marginBottom: 10 }}>
        Press &quot;continue&quot; to sign up screen!
      </Text>
      <Button onPress={onPressContinue} style={{ justifyContent: "center" }}>
        <Text>Continue</Text>
      </Button>
    </Content>
  </Container>
);

export default Welcome;
