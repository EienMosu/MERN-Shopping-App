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

export const register = async (dispatch, user) => {
  dispatch(registerStart());

  try {
    const response = await publicRequest.post("/auth/register", user);

    console.log(response);
    dispatch(registerSuccess(response.data));
    dispatch(logout());
  } catch (err) {
    dispatch(registerFailure());
  }
};
