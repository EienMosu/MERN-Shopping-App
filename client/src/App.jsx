// React Router
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// Pages
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import RegisterFailure from "./pages/RegisterFailure";
import SingleProduct from "./pages/SingleProduct";
import Success from "./pages/Success";

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route path="/products/:category">
          <ProductList user={user} />
        </Route>
        <Route path="/product/:id">
          <SingleProduct user={user} />
        </Route>
        <Route path="/cart">
          <Cart user={user} />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/success">
          <Success user={user} />
        </Route>
        <Route path="/registerFailure">
          <RegisterFailure />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
