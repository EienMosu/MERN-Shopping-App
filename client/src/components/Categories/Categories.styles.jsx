import styled from "styled-components";
import {mobile} from "../../responsive"

export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;

  ${mobile({padding: "0px", flexDirection: "column"})}
`;
