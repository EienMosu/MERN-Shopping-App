import { publicRequest, userRequest } from "../requestMethods";
import {
  addProductFailure,
  addProductStart,
  addProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  getProductFailure,
  getProductStart,
  getProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
} from "./productRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const response = await publicRequest.post("/auth/login", user);

    dispatch(loginSuccess(response.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const response = await publicRequest.get("/products");

    dispatch(getProductSuccess(response.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

// delete product
export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const response = await userRequest.delete(`/products/${id}`);

    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

// update product
export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    //update

    dispatch(updateProductSuccess({ id: id, product: product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

// add product
export const addProduct = async (product, dispatch, token) => {
  dispatch(addProductStart());
  try {
    const response = await userRequest.post(`/products`, product, {
      headers: { token: `Bearer ${token}` },
    });

    dispatch(addProductSuccess(response.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};
