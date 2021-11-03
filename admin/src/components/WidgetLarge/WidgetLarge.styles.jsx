import styled from "styled-components";

export const Container = styled.div`
  flex: 2;
  padding: 20px;
  box-shadow: -1px 0px 16px -8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -1px 0px 16px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 0px 16px -8px rgba(0, 0, 0, 0.75);
`;

export const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 20px;
`;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: left;
`;

export const Td = styled.td`
  display: flex;
  align-items: center;
  font-weight: 600;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

export const Username = styled.span``;

export const Date = styled.td`
  font-weight: 300;
`;

export const Amount = styled.td`
  font-weight: 300;
`;

export const Status = styled.td``;

export const Button = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 10px;
  background-color: #e0e0e0;
  color: ${(props) => props.color};
`;
