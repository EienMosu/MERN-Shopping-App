import React from "react";
// Material UI Icons
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
// React Router
import { Link } from "react-router-dom";
// Styled Components
import { Circle, Container, Icon, Image, Info } from "./Product.styles";

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link
            to={`/product/${item._id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined style={{ textDecoration: "none", color: "black" }} />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
