import React, { useEffect, useState } from "react";
// Material UI Icons
import { Visibility } from "@material-ui/icons";
// Axios
import { userRequest } from "../../requestMethods";
// Redux
import { useSelector } from "react-redux";
// Styled Components
import {
  Button,
  Container,
  Image,
  JobTitle,
  List,
  ListItem,
  Title,
  User,
  Username,
} from "./WidgetSmall.styles";

const WidgetSmall = () => {
  const token = useSelector((state) => state.user.currentUser.accessToken);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await userRequest.get("/users/?new=true", {
          headers: { token: `Bearer ${token}` },
        });
        
        setUsers(response.data);
      } catch {}
    };
    getUsers();
  }, [users, token]);

  return (
    <Container>
      <Title>New Join Members</Title>
      <List>
        {users.map((user) => (
          <ListItem key={user._id}>
            <Image
              src={
                user.image ||
                "https://sivrihisar.bel.tr/wp-content/uploads/2016/09/avatar-no-image.png"
              }
            />
            <User>
              <Username>{user.username}</Username>
              <JobTitle>{user.email}</JobTitle>
            </User>
            <Button>
              <Visibility style={{ marginRight: "5px" }} />
              Display
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default WidgetSmall;
