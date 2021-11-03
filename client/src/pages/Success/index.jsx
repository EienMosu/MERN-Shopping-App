import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { userRequest } from "../../requestMethods";
import { Button, Container, Span, Wrapper } from "./Success.styles";

const Success = ({ user }) => {
  const location = useLocation();
  const data = location.state.stripeData;
  const cart = location.state.cart;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

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

  return (
    <Container>
      <Wrapper>
        {orderId ? (
          <Span>{`Order has been created successfully. Your order number is: ${orderId}`}</Span>
        ) : (
          <Span>{`Something went wrong!`}</Span>
        )}
        <Link to="/">
          <Button>Go to Homepage</Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Success;
