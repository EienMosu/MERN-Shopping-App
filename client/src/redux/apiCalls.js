import { publicRequest } from "../requestMethods";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logout,
  registerFailure,
  registerStart,
  registerSuccess,
} from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const response = await publicRequest.post("/auth/login", user);

    dispatch(loginSuccess(response.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const thirdPartAuth = async (dispatch) => {
  dispatch(loginStart());
  try {
    await fetch("https://e-commerce-app-1234.herokuapp.com/api/auth/login/third/success", {
      methods: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("authentication has been failed!");
      })
      .then((resObject) => {
        dispatch(loginSuccess(resObject.user));
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());

  try {
    const response = await publicRequest.post("/auth/register", user);

    // console.log(response);
    dispatch(registerSuccess(response.data));
    dispatch(logout());
  } catch (err) {
    dispatch(registerFailure());
  }
};
