import styled from "styled-components";

export const Container = styled.div`
  flex: 4;
`;

export const Grid = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

export const EditButton = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin-right: 10px;
`;
