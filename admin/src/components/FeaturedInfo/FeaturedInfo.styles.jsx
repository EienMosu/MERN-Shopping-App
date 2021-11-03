import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Item = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: -1px 0px 16px -8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -1px 0px 16px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 0px 16px -8px rgba(0, 0, 0, 0.75);
`;

export const Title = styled.span`
  font-size: 20px;
`;

export const MoneyContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
`;

export const Money = styled.span`
  font-size: 30px;
  font-weight: 600;
`;

export const MoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-right: 5px;
`;

export const Sub = styled.span`
  font-size: 15px;
  color: gray;
`;
