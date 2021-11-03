import styled from "styled-components";

export const Container = styled.div`
  flex: 4;
  padding: 20px;
`;

export const UserTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1``;

export const AddButton = styled.button`
  width: 80px;
  border: none;
  padding: 10px;
  background-color: teal;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

export const UserContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const UserDisplay = styled.div`
  flex: 1;
  padding: 20px;
  box-shadow: -1px 0px 16px -8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -1px 0px 16px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 0px 16px -8px rgba(0, 0, 0, 0.75);
`;

export const UserDisplayTop = styled.div`
  display: flex;
  align-items: center;
`;

export const UserShowImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserShowTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const Username = styled.span`
  font-weight: 600;
`;
export const UserTitle = styled.span`
  font-weight: 300;
`;

export const UserDisplayBottom = styled.div`
  margin-top: 20px;
`;

export const UserDisplayBottomTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #afafaf;
`;

export const UserDisplayInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  color: #444;
`;

export const UserDisplayBottomInfo = styled.span`
  margin-left: 10px;
`;

export const UserUpdate = styled.div`
  flex: 2;
  padding: 20px;
  margin-left: 20px;
  box-shadow: -1px 0px 16px -8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -1px 0px 16px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 0px 16px -8px rgba(0, 0, 0, 0.75);
`;

export const UserUpdateTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

export const UpdateForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const UpdateLeftContainer = styled.div``;

export const UpdateItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
`;

export const UpdateInput = styled.input`
  border: none;
  width: 250px;
  height: 30px;
  border-bottom: 1px solid gray;
  outline: none;
`;

export const UpdateRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

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

export const FileInput = styled.input`
  display: none;
`;

export const FileLabel = styled.label`
  cursor: pointer;
`;

export const UpdateButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 5px;
  background-color: darkblue;
  color: whitesmoke;
  font-weight: 600;
  cursor: pointer;
`;
