import styled from "styled-components";

export const Container = styled.div`
  width: calc(100vw - 50px);
  height: 70px;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const Wrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div``;

export const Logo = styled.span`
  padding: 0px 6px;
  font-weight: bold;
  font-size: 35px;
  font-style: italic;
  color: darkred;
  border-bottom: 2px solid #000;
  cursor: pointer;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
`;

export const Icons = styled.div`
  width: 30px;
  position: relative;
  margin-right: 10px;
  color: #555;
  cursor: pointer;
`;

export const IconBadge = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  top: -5px;
  right: -3px;
  color: white;
  background-color: crimson;
  border-radius: 50%;
`;

export const AvatarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 27px;
  height: 50px;
`;

export const Avatar = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  top: -1px;
  border-radius: 50%;
  cursor: pointer;
`;
