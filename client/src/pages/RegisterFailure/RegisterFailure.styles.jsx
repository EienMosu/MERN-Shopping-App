import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: gray;
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  border-radius: 30px;
  top: 0;
  bottom: 0;
  margin: auto;
`;

export const Title = styled.h3`
  font-size: 24px;
  margin: 20px 0px;
`;

export const Span = styled.span`
  font-size: 18px;
  color: red;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 10px;
  transition: all 0.2s ease;

  &:hover {
    background-color: white;
    color: teal;
    border: 1px solid teal;
  }
`;
