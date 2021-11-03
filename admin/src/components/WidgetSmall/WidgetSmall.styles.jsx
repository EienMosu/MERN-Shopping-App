import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  padding: 20px;
  margin-right: 20px;
  box-shadow: -1px 0px 16px -8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -1px 0px 16px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 0px 16px -8px rgba(0, 0, 0, 0.75);
`;

export const Title = styled.span`
  font-size: 32px;
  font-weight: 600;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Username = styled.span`
  font-weight: 600;
`;

export const JobTitle = styled.span`
  font-weight: 300;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;
`;
