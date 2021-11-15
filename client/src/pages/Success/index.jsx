import React, { useEffect, useState } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// React Router
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { successOrder } from "../../redux/cartRedux";
// Axios
import { userRequest } from "../../requestMethods";
// Styled Components
import { Button, Container, Span, Wrapper } from "./Success.styles";

const Success = ({ user }) => {
  const location = useLocation();
  const data = location.state.stripeData;
  const cart = location.state.cart;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const createOrder = async () => {
      try {
        const response = await userRequest.post(
          "/orders",
          {
            userId: currentUser,
            products: cart.products.map((item) => ({
              productId: item._id,
              quantity: item._quantity,
            })),

            amount: cart.total,
            address: data.billing_details.address,
          },
          {
            headers: {
              token: `Bearer ${user.accessToken}`,
            },
          }
        );
        setOrderId(response.data._id);
      } catch {}
    };
    data && createOrder();
  }, [cart, data, currentUser, user]);

  orderId && dispatch(successOrder());

  return (
    <Container>
      <Wrapper>
        {orderId ? (
          <Span>{`Order has been created successfully. Your order number is: ${orderId}`}</Span>
        ) : (
          <Span>{`Something went wrong! Please Login first for able to create a successfull order!`}</Span>
        )}
        <Link to="/">
          <Button>Go to Homepage</Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Success;
