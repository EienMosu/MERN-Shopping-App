import React, { useState } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
// Styled Components
import {
  Button,
  Container,
  Error,
  Form,
  Input,
  Link,
  Title,
  Wrapper,
} from "./Login.styles";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = (event) => {
    event.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="Username"
            onChange={(event) => setUsername(event.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button disabled={isFetching} onClick={handleLogin}>
            LOGIN
          </Button>
          {error && <Error>Something went wrong!</Error>}
          <Link>DO YOU NOT REMEMBER THE PASSWORD?</Link>
          <Link>CREATE AN ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
