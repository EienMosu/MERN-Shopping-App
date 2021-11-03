import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex: 4;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Label = styled.label`
  margin: 10px 0px;
  font-size: 30px;
  font-weight: 600;
`;

export const Input = styled.input`
  height: 20px;
  padding: 15px 20px;
  border: 1px solid gray;
  border-radius: 5px;
  margin-top: 20px;
`;

export const Button = styled.button`
  width: 150px;
  border: none;
  background-color: darkblue;
  color: white;
  padding: 15px 7px;
  font-weight: 600;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
`;
