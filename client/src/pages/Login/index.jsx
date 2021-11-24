import React, { useState } from "react";
//Images
import google from "../../assets/google.png";
import github from "../../assets/github.png";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { login, thirdPartAuth } from "../../redux/apiCalls";
// Styled Components
import {
  Button,
  Center,
  Container,
  Error,
  Form,
  Icon,
  Input,
  Left,
  Link,
  LoginButtonContainer,
  Or,
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

  const handleGoogle = () => {
    window.open("https://e-commerce-app-1234.herokuapp.com/api/auth/google", "_self");

    thirdPartAuth(dispatch);
  };

  const handleGithub = () => {
    window.open("https://e-commerce-app-1234.herokuapp.com/api/auth/github", "_self");

    thirdPartAuth(dispatch);
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
        {/* <Center>
          <Or>OR</Or>
        </Center>
        <Left>
          <LoginButtonContainer
            backgroundColor={"#df4930"}
            onClick={handleGoogle}
          >
            <Icon src={google} alt="" />
            Google
          </LoginButtonContainer>
          <LoginButtonContainer onClick={handleGithub} backgroundColor={"#000"}>
            <Icon src={github} alt="" />
            GitHub
          </LoginButtonContainer>
        </Left> */}
      </Wrapper>
    </Container>
  );
};

export default Login;
