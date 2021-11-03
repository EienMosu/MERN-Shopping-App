import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  height: calc(100vh - 70px);
  position: sticky;
  top: 70px;
`;

export const Wrapper = styled.div`
  padding: 20px;
  color: #555;
`;

export const Menu = styled.div`
  margin-bottom: 10px;
`;

export const Title = styled.h3`
  font-size: 15px;
  color: #a8a7a7;
`;

export const List = styled.ul`
  padding: 5px;
  list-style: none;
`;

export const ListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;

  &:active,
  &:hover {
    background-color: #ececec;
  }
`;

export const Span = styled.span`
  margin-left: 5px;
  font-size: 20px;
`;
