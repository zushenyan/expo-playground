import React from "react";
import {
  Content,
  List,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Text
} from "native-base";

export type Props = {
  list: Array<{
    avatar: string;
    fullname: string;
  }>;
};

const UserList: React.FC<Props> = ({ list }) => (
  <Content>
    <List>
      {list.map(({ avatar, fullname }, index) => (
        <ListItem key={index} avatar>
          <Left>
            <Thumbnail source={{ uri: avatar }} />
          </Left>
          <Body>
            <Text>{fullname}</Text>
          </Body>
        </ListItem>
      ))}
    </List>
  </Content>
);

export default UserList;
