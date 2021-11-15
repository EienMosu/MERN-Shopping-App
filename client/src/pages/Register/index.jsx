import React, { useState } from "react";
// Redux
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
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [focused, setFocused] = useState(false);

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      title:
        "Username should be 3-16 characters and shouldn't include any special character!",
      // regex code for only letter and numbers
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      title: "It should be a valid email address!",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      title:
        " Passwrod should be 8-16 characters and include at least 1 letter, 1 number and 1 special character!",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      title: "Password don't match!",
      pattern: values.password,
      required: true,
    },
  ];

  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault();
    const user = { ...values };

    register(dispatch, user);
  };

  const handleChange = (event) => {
    setValues((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleClick}>
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              value={values[input.name]}
              onBlur={() => setFocused(true)}
              onChange={handleChange}
              focused={focused}
            />
          ))}
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
