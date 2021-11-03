import React from "react";
// Styled Components
import { Container } from "./Categories.styles";
// Dummy Data
import { categories } from "../../data";
// Components
import CategoryItem from "../CategoryItem";

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
