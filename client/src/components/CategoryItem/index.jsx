import React from "react";
// React Router
import { Link } from "react-router-dom";
// Styled Components
import { Button, Container, Image, Info, Title } from "./CategoryItem.styles";

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
