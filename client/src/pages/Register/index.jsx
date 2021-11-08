import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/apiCalls";
// Styled Components
import {
  Agreement,
  Button,
  Container,
  Form,
  Input,
  Title,
  Wrapper,
} from "./Register.styles";

const Register = () => {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault();

    const user = { ...inputs };

    register(dispatch, user);
  };

  const handleChange = (event) => {
    setInputs((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="Name" type="text" />
          <Input placeholder="Last Name" type="text" />
          <Input
            placeholder="Username"
            name="username"
            type="text"
            onChange={handleChange}
          />
          <Input
            placeholder="Email"
            name="email"
            type="email"
            onChange={handleChange}
          />
          <Input placeholder="Password" type="text" />
          <Input
            placeholder="Confirm Password"
            name="password"
            type="text"
            onChange={handleChange}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
