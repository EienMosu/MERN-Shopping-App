import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div``;

export const Title = styled.h1`
  margin: 20px;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Filter = styled.div`
  margin: 20px;

  ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })}
`;

export const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;

  ${mobile({ marginRight: "0" })}
`;

export const Select = styled.select`
  padding: 10px;
  margin-right: 20px;

  ${mobile({ margin: "10px 0px" })}
`;

export const Option = styled.option``;
