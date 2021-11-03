import React from "react";
import {
  Button,
  Container,
  Form,
  FormItem,
  GenderContainer,
  GenderLabel,
  Input,
  Label,
  Option,
  Select,
  Title,
} from "./NewUser.styles";

const NewUser = () => {
  return (
    <Container>
      <Title>New User</Title>
      <Form>
        <FormItem>
          <Label>Username</Label>
          <Input type="text" placeholder="John" />
        </FormItem>
        <FormItem>
          <Label>Full Name</Label>
          <Input type="text" placeholder="John Smith" />
        </FormItem>
        <FormItem>
          <Label>Email</Label>
          <Input type="email" placeholder="johnsmith@gmail.com" />
        </FormItem>
        <FormItem>
          <Label>Password</Label>
          <Input type="password" placeholder="Password" />
        </FormItem>
        <FormItem>
          <Label>Phone Number</Label>
          <Input type="text" placeholder="+1 234 567 890" />
        </FormItem>
        <FormItem>
          <Label>Address</Label>
          <Input type="text" placeholder="Kyoto | Japan" />
        </FormItem>
        <FormItem>
          <Label>Gender</Label>
          <GenderContainer>
            <Input type="radio" name="gender" id="male" value="male" />
            <GenderLabel for="male">Male</GenderLabel>
            <Input type="radio" name="gender" id="female" value="female" />
            <GenderLabel for="female">Female</GenderLabel>
            <Input type="radio" name="gender" id="other" value="other" />
            <GenderLabel for="other">Other</GenderLabel>
          </GenderContainer>
        </FormItem>
        <FormItem>
          <Label>Active</Label>
          <Select name="active" id="active">
            <Option value="yes">Yes</Option>
            <Option value="no">No</Option>
          </Select>
        </FormItem>
        <Button>Create</Button>
      </Form>
    </Container>
  );
};

export default NewUser;
