import styled from "styled-components";

export const Container = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const Title = styled.h1``;

export const Form = styled.form``;

export const FormItem = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
`;

export const Label = styled.label`
  margin: 10px 0px;
  font-size: 16px;
  font-weight: 600;
  color: gray;
`;

export const Input = styled.input`
  height: 20px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;

export const GenderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

export const GenderLabel = styled.label`
  margin: 10px;
  font-size: 18px;
  color: #555;
`;

export const Select = styled.select`
  height: 40px;
  border-radius: 5px;
`;

export const Option = styled.option``;

export const Button = styled.button`
  width: 200px;
  border: none;
  background-color: darkblue;
  color: white;
  padding: 17px 10px;
  font-weight: 600;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
`;
