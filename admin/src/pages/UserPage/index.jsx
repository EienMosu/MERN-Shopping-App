import React from "react";
// Material UI Icons
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
// React Router
import { Link } from "react-router-dom";
// Styled Components
import {
  AddButton,
  Container,
  FileInput,
  FileLabel,
  Label,
  Title,
  UpdateButton,
  UpdateForm,
  UpdateInput,
  UpdateItem,
  UpdateLeftContainer,
  UpdateRightContainer,
  UploadContainer,
  UploadImage,
  UserContainer,
  UserDisplay,
  UserDisplayBottom,
  UserDisplayBottomInfo,
  UserDisplayBottomTitle,
  UserDisplayInfoContainer,
  UserDisplayTop,
  Username,
  UserShowImage,
  UserShowTitle,
  UserTitle,
  UserTitleContainer,
  UserUpdate,
  UserUpdateTitle,
} from "./UserPage.styles";

const UserPage = () => {
  return (
    <Container>
      <UserTitleContainer>
        <Title>Edit User</Title>
        <Link to="/newUser">
          <AddButton>Create</AddButton>
        </Link>
      </UserTitleContainer>
      <UserContainer>
        <UserDisplay>
          <UserDisplayTop>
            <UserShowImage
              alt=""
              src="https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
            />
            <UserShowTitle>
              <Username>Anna Becker</Username>
              <UserTitle>Front-End Developer</UserTitle>
            </UserShowTitle>
          </UserDisplayTop>
          <UserDisplayBottom>
            <UserDisplayBottomTitle>Account Details</UserDisplayBottomTitle>
            <UserDisplayInfoContainer>
              <PermIdentity style={{ fontSize: "16px" }} />
              <UserDisplayBottomInfo>annabeck99</UserDisplayBottomInfo>
            </UserDisplayInfoContainer>
            <UserDisplayInfoContainer>
              <CalendarToday style={{ fontSize: "16px" }} />
              <UserDisplayBottomInfo>10.2.1992</UserDisplayBottomInfo>
            </UserDisplayInfoContainer>
            <UserDisplayBottomTitle>Contact Details</UserDisplayBottomTitle>
            <UserDisplayInfoContainer>
              <PhoneAndroid style={{ fontSize: "16px" }} />
              <UserDisplayBottomInfo>+312 321-424-321</UserDisplayBottomInfo>
            </UserDisplayInfoContainer>
            <UserDisplayInfoContainer>
              <MailOutline style={{ fontSize: "16px" }} />
              <UserDisplayBottomInfo>annabeck@gmail.com</UserDisplayBottomInfo>
            </UserDisplayInfoContainer>
            <UserDisplayInfoContainer>
              <LocationSearching style={{ fontSize: "16px" }} />
              <UserDisplayBottomInfo>New York | USA</UserDisplayBottomInfo>
            </UserDisplayInfoContainer>
          </UserDisplayBottom>
        </UserDisplay>
        <UserUpdate>
          <UserUpdateTitle>Edit</UserUpdateTitle>
          <UpdateForm>
            <UpdateLeftContainer>
              <UpdateItem>
                <Label>Username</Label>
                <UpdateInput type="text" placeholder="annabeck99" />
              </UpdateItem>
              <UpdateItem>
                <Label>Full Name</Label>
                <UpdateInput type="text" placeholder="Anna Becker" />
              </UpdateItem>
              <UpdateItem>
                <Label>Phone Number</Label>
                <UpdateInput type="text" placeholder="+312 321-424-321" />
              </UpdateItem>
              <UpdateItem>
                <Label>Email</Label>
                <UpdateInput type="text" placeholder="annabeck@gmail.com" />
              </UpdateItem>
              <UpdateItem>
                <Label>Address</Label>
                <UpdateInput type="text" placeholder="New York | USA" />
              </UpdateItem>
            </UpdateLeftContainer>
            <UpdateRightContainer>
              <UploadContainer>
                <UploadImage
                  src="https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                  alt=""
                />
                <FileLabel htmlFor="file">
                  <Publish />
                </FileLabel>
                <FileInput type="file" id="file" />
              </UploadContainer>
              <UpdateButton>Update</UpdateButton>
            </UpdateRightContainer>
          </UpdateForm>
        </UserUpdate>
      </UserContainer>
    </Container>
  );
};

export default UserPage;
