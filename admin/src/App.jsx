import React from "react";
// Styled Components
import styled from "styled-components";
// Components
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
// Pages
import HomePage from "./pages/HomePage";
import UserList from "./pages/UserList";
import UserPage from "./pages/UserPage";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
import ProductPage from "./pages/ProductPage";
import NewProduct from "./pages/NewProduct";
import Login from "./pages/Login";
// Redux
import { useSelector } from "react-redux";
// React Router Dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const Container = styled.div`
  display: flex;
`;

const App = () => {
  // const isAdmin = useSelector((state) => state.user.currentUser.isAdmin);

  return (
    <Router>
      <Topbar />
      <Container>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>
          <Route exact path="/user/:id">
            <UserPage />
          </Route>
          <Route exact path="/newUser">
            <NewUser />
          </Route>
          <Route exact path="/product/:id">
            <ProductPage />
          </Route>
          <Route exact path="/newProduct">
            <NewProduct />
          </Route>
          <Route exact path="/products">
            <ProductList />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
