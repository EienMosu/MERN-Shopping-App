import styled from "styled-components";

export const Container = styled.div`
  flex: 4;
  padding: 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1``;

export const AddButton = styled.button`
  width: 80px;
  border: none;
  padding: 7px;
  background-color: teal;
  color: white;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
`;

export const ProductTop = styled.div`
  display: flex;
`;

export const TopLeft = styled.div`
  flex: 1;
`;

export const TopRight = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  box-shadow: -1px 0px 16px -8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -1px 0px 16px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 0px 16px -8px rgba(0, 0, 0, 0.75);
`;

export const InfoTop = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 20px;
  object-fit: cover;
`;

export const ProductName = styled.span`
  font-weight: 600;
`;

export const InfoBottom = styled.div`
  margin-top: 10px;
`;

export const InfoItem = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

export const ProductKey = styled.span`
  font-weight: 300;
`;

export const ProductValue = styled.span``;

export const ProductBottom = styled.div`
  margin: 20px;
  padding: 30px;
  box-shadow: -1px 0px 16px -8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -1px 0px 16px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 0px 16px -8px rgba(0, 0, 0, 0.75);
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;

export const FormLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  color: gray;
`;

export const FormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  border: none;
  padding: 5px;
  border-bottom: 1px solid gray;
`;

export const Select = styled.select`
  margin-bottom: 10px;
`;

export const Option = styled.option``;

export const UploadContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UploadImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;

export const UploadLabel = styled.label`
  cursor: pointer;
`;

export const UploadInput = styled.input`
  display: none;
`;

export const ProductButton = styled.button`
  border: none;
  padding: 7px;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
