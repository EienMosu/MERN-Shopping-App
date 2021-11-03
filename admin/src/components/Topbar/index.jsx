import React from "react";
// Material UI Icons
import { Language, NotificationsNone, Settings } from "@material-ui/icons";
// Styled Components
import {
  Avatar,
  AvatarContainer,
  Container,
  IconBadge,
  Icons,
  Left,
  Logo,
  Right,
  Wrapper,
} from "./Topbar.styles";
// Avatar Image
import avatar from "../../assets/avatar.jpg";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{textDecoration: "none"}}>
          <Left>
            <Logo>React Admin.</Logo>
          </Left>
        </Link>
        <Right>
          <Icons>
            <NotificationsNone />
            <IconBadge>2</IconBadge>
          </Icons>
          <Icons>
            <Language />
            <IconBadge>2</IconBadge>
          </Icons>
          <Icons>
            <Settings />
          </Icons>
          <AvatarContainer>
            <Avatar src={avatar} />
          </AvatarContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Topbar;
