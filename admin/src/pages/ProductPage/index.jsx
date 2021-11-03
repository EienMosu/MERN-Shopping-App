import React, { useState } from "react";
// React Router
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
// ReCharts
import Chart from "../../components/Chart";
import { productData } from "../../chartData";
// Material UI Icons
import { Publish } from "@material-ui/icons";
// Redux
import { useSelector } from "react-redux";
// Styled Components
import {
  AddButton,
  Container,
  Form,
  FormLeft,
  FormRight,
  InfoBottom,
  InfoImage,
  InfoItem,
  InfoTop,
  Input,
  Label,
  Option,
  ProductBottom,
  ProductButton,
  ProductKey,
  ProductName,
  ProductTop,
  ProductValue,
  Select,
  Title,
  TitleContainer,
  TopLeft,
  TopRight,
  UploadContainer,
  UploadImage,
  UploadInput,
  UploadLabel,
} from "./ProductPage.styles";

const ProductPage = () => {
  const location = useLocation();
  const productId = location.pathname.split("/").pop();
  // const [productStats, setProductStats] = useState([]);

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

  return (
    <Container>
      <TitleContainer>
        <Title>Product</Title>
        <Link to="/newProduct">
          <AddButton>Create</AddButton>
        </Link>
      </TitleContainer>
      <ProductTop>
        <TopLeft>
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </TopLeft>
        <TopRight>
          <InfoTop>
            <InfoImage src={product.img} alt="" />
            <ProductName>{product.title}</ProductName>
          </InfoTop>
          <InfoBottom>
            <InfoItem>
              <ProductKey>id:</ProductKey>
              <ProductValue>{product._id}</ProductValue>
            </InfoItem>
            <InfoItem>
              <ProductKey>sales:</ProductKey>
              <ProductValue>2233</ProductValue>
            </InfoItem>
            <InfoItem>
              <ProductKey>in stock:</ProductKey>
              <ProductValue>{product.inStock && "true"}</ProductValue>
            </InfoItem>
          </InfoBottom>
        </TopRight>
      </ProductTop>
      <ProductBottom>
        <Form>
          <FormLeft>
            <Label>Product Name</Label>
            <Input type="text" placeholder={product.title} />
            <Label>Product Description</Label>
            <Input type="text" placeholder={product.desc} />
            <Label>Product Price</Label>
            <Input type="text" placeholder={product.price} />
            <Label>In Stock</Label>
            <Select name="inStock" id="inStock">
              <Option value="true">Yes</Option>
              <Option value="false">No</Option>
            </Select>
          </FormLeft>
          <FormRight>
            <UploadContainer>
              <UploadImage alt="" src={product.img} />
              <UploadLabel htmlFor="file">
                <Publish />
              </UploadLabel>
              <UploadInput id="file" type="file" />
            </UploadContainer>
            <ProductButton>Update</ProductButton>
          </FormRight>
        </Form>
      </ProductBottom>
    </Container>
  );
};

export default ProductPage;
