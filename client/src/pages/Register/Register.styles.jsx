import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&q=80")
      center;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mobile({ backgroundSize: "cover" })}
`;

export const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;

  ${mobile({ width: "75%" })}
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;

  :invalid {
    border: ${(props) => (props.focused ? "1px solid red" : "1px solid black")};
  }
`;

export const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  border: 1px solid white;
  transition: all 0.2s ease;

  &:hover {
    background-color: white;
    color: teal;
    border: 1px solid teal;
  }
`;


