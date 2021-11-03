import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  margin-top: 100px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid darkblue;
  border-radius: 30px;
`;

export const Span = styled.span`
text-align: center;
  font-size: 18px;
  margin: 50px 30px;
`;

export const Button = styled.button`
  margin: 40px 0px;
  padding: 20px;
  font-size: 16px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
