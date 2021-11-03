import React from "react";
// Material UI Icons
import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@material-ui/icons";
// Styled Components
import {
  Container,
  List,
  ListItem,
  Menu,
  Span,
  Title,
  Wrapper,
} from "./Sidebar.styles";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Menu>
          <Title>Dashboard</Title>
          <List>
            <Link
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItem>
                <LineStyle />
                <Span>Home</Span>
              </ListItem>
            </Link>
            <ListItem>
              <Timeline />
              <Span>Analytics</Span>
            </ListItem>
            <ListItem>
              <TrendingUp />
              <Span>Sales</Span>
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Quick Menu</Title>
          <List>
            <Link
              to="/users"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItem>
                <PermIdentity />
                <Span>Users</Span>
              </ListItem>
            </Link>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItem>
                <Storefront />
                <Span>Products</Span>
              </ListItem>
            </Link>
            <ListItem>
              <AttachMoney />
              <Span>Transactions</Span>
            </ListItem>
            <ListItem>
              <BarChart />
              <Span>Reports</Span>
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Notifications</Title>
          <List>
            <ListItem>
              <MailOutline />
              <Span>Mail</Span>
            </ListItem>
            <ListItem>
              <DynamicFeed />
              <Span>Feedback</Span>
            </ListItem>
            <ListItem>
              <ChatBubbleOutline />
              <Span>Messages</Span>
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Staff</Title>
          <List>
            <ListItem>
              <WorkOutline />
              <Span>Manage</Span>
            </ListItem>
            <ListItem>
              <Timeline />
              <Span>Analytics</Span>
            </ListItem>
            <ListItem>
              <Report />
              <Span>Reports</Span>
            </ListItem>
          </List>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
