import React, { useState } from "react";
// Redux
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
// React Router
import { useHistory } from "react-router";
// Styled Components
import { Button, Container, Input, Label, Wrapper } from "./Login.styles";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (event) => {
    event.preventDefault();

    login(dispatch, { username, password });
    history.push("/");
  };

  return (
    <Container>
      <Wrapper>
        <Label>WELCOME!</Label>
        <Input
          type="text"
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button onClick={handleClick}>LOGIN</Button>
      </Wrapper>
    </Container>
  );
};

export default Login;
