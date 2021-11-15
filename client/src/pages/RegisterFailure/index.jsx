import React from "react";
// React Router
import history from "../../history";
// Styled Components
import {
  Button,
  Container,
  Span,
  Title,
  Wrapper,
} from "./RegisterFailure.styles";

const RegisterFailure = () => {
  const handleClick = () => {
    history.push("/");
    history.go(0);
  };

  return (
    <Container>
      <Wrapper>
        <Title>Opps!</Title>
        <Span>Something went wrong! Please try to Register again!</Span>
        <Button onClick={handleClick}>Turn to Homepage</Button>
      </Wrapper>
    </Container>
  );
};

export default RegisterFailure;
