import React, { useState } from "react";
// Firebase
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
// Redux
import { addProduct } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
// Styled Components
import {
  Button,
  Container,
  Form,
  FormItem,
  Input,
  Label,
  Option,
  Select,
  Title,
} from "./NewProduct.styles";

const NewProduct = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.currentUser.accessToken);

  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);

  const handleChange = (event) => {
    setInputs((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };
  const handleCategories = (event) => {
    setCategories(event.target.value.split(","));
  };

  const handleColors = (event) => {
    setColor(event.target.value.split(","));
  };

  const handleSize = (event) => {
    setSize(event.target.value.split(","));
  };

  const handleClick = (event) => {
    event.preventDefault();

    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = {
            ...inputs,
            img: downloadURL,
            categories: categories,
            color: color,
            size: size,
          };
          addProduct(product, dispatch, token);
        });
      }
    );
  };

  return (
    <Container>
      <Title>New Product</Title>
      <Form>
        <FormItem>
          <Label>Image</Label>
          <Input
            type="file"
            style={{ border: "none" }}
            onChange={(event) => setFile(event.target.files[0])}
          />
        </FormItem>
        <FormItem>
          <Label>Product Name</Label>
          <Input
            name="title"
            type="text"
            placeholder="Apple Airpods"
            onChange={handleChange}
          />
        </FormItem>
        <FormItem>
          <Label>Product Description</Label>
          <Input
            name="desc"
            type="text"
            placeholder="Description"
            onChange={handleChange}
          />
        </FormItem>
        <FormItem>
          <Label>Product Price</Label>
          <Input
            name="price"
            type="number"
            placeholder="Price"
            onChange={handleChange}
          />
        </FormItem>
        <FormItem>
          <Label>Product Color</Label>
          <Input type="text" placeholder="Color" onChange={handleColors} />
        </FormItem>
        <FormItem>
          <Label>Product Category</Label>
          <Input
            type="text"
            placeholder="Category"
            onChange={handleCategories}
          />
        </FormItem>
        <FormItem>
          <Label>Product Size</Label>
          <Input type="text" placeholder="Category" onChange={handleSize} />
        </FormItem>
        <FormItem>
          <Label>Stock</Label>
          <Select onChange={handleChange} name="inStock">
            <Option value="true">True</Option>
            <Option value="false">False</Option>
          </Select>
        </FormItem>
        <Button onClick={handleClick}>Create</Button>
      </Form>
    </Container>
  );
};

export default NewProduct;
