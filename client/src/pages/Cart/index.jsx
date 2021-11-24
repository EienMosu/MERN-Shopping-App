import React, { useEffect, useState } from "react";
// Components
import Navbar from "../../components/Navbar";
import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";
// Material UI Icons
import { Add, Remove } from "@material-ui/icons";
// React Router
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/cartRedux";
// Image
import avatar from "../../assets/avatar.png";
// Stripe Checkout
import StripeCheckout from "react-stripe-checkout";
// Axios
import { userRequest } from "../../requestMethods";
// Styled Components
import {
  Bottom,
  Button,
  Container,
  Delete,
  Details,
  Image,
  Info,
  PriceDetail,
  Product,
  ProductAmount,
  ProductAmountContainer,
  ProductColor,
  ProductDetail,
  ProductId,
  ProductName,
  ProductPrice,
  ProductSize,
  Summary,
  SummaryItem,
  SummaryItemPrice,
  SummaryItemText,
  SummaryTitle,
  Title,
  Top,
  TopButton,
  TopText,
  TopTexts,
  Wrapper,
} from "./Cart.styles";

const KEY =
  "pk_test_51JpJhnHOXuntsXzlUTTgDciZLTh2mQoHckxlLYQcKwbRfJ68yD7KpIc6AEZvkP3MpFD03xwr9HWwu2OJaTXn9Cri00Ng6wuol7";

const Cart = ({ user }) => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });

        history.push("/success", { stripeData: response.data, cart });
      } catch {}
    };

    stripeToken && cart.total >= 1 && makeRequest();
  }, [stripeToken, cart, history]);

  const handleDelete = (id, price, quantity) => {
    dispatch(deleteProduct({ id, price, quantity }));
  };

  return (
    <Container>
      <Navbar user={user} />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to="/">
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Bag({cart.cartQuantity})</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <StripeCheckout
            name="Versace Shop"
            image={avatar}
            billingAddress
            shippingAddress
            description={`Your total is $${cart.total}`}
            amount={cart.total * 100}
            token={onToken}
            stripeKey={KEY}
          >
            <TopButton type="filled">CHECKOUT NOW</TopButton>
          </StripeCheckout>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product: </b>
                      {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID: </b>
                      {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size: </b>
                      {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <Delete
                    onClick={() =>
                      handleDelete(product._id, product.price, product.quantity)
                    }
                    style={{ cursor: "pointer", color: "darkred" }}
                  >
                    X
                  </Delete>
                  <ProductAmountContainer>
                    <Remove />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Add />
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 15.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -15.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="Versace Shop"
              image={avatar}
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
