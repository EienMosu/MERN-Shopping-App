import React from "react";
// Material UI Icons
import { Send } from "@material-ui/icons";
// Styled Components
import {
  Button,
  Container,
  Desc,
  Input,
  InputContainer,
  Title,
} from "./Newsletter.styles";

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
