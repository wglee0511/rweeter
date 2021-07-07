import { createSlice } from "@reduxjs/toolkit";
import { firebaseAuth } from "../../shared/firebase";

const initialState = {
  user: {
    user_id: "ranazang@naver.com",
    user_uid: "safsafknsdkflk",
    user_profile: "",
    user_name: "라쿤",
  },
  is_loading: false,
  is_login: false,
};

const user = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    actionSetUser: (state, action) => {
      state.user = action.payload;
      state.is_login = true;
    },
  },
});

export const actionSignupforAuth =
  (user_info) =>
  async (dispatch, getState, { history }) => {
    //{userId: "ranazang@naver.com", userName: "라쿤", pwd: "ddt12143", pwdCheck: "ddt12143"}
    try {
      await firebaseAuth.createUserWithEmailAndPassword(
        user_info.userId,
        user_info.pwd
      );
      const uid = user.uid;
      await firebaseAuth.currentUser.updateProfile({
        displayName: user_info.userName,
      });
      const userForRedux = {
        user_id: user_info.userId,
        user_uid: uid,
        user_profile: "",
        user_name: user_info.userName,
      };
      dispatch(actionSetUser(userForRedux));
      history.push("/");
    } catch (error) {
      window.alert(error.message);
    }
  };

export const actionLoginForAuth =
  (user_info) =>
  async (dispatch, getState, { history }) => {
    //{userId: "ranazang@naver.com", pwd: "sadasdas"}
    const user = await firebaseAuth.signInWithEmailAndPassword(
      user_info.userId,
      user_info.pwd
    );
    const userForRedux = {
      user_id: user.user.email,
      user_uid: user.user.uid,
      user_profile: "",
      user_name: user.user.displayName,
    };
    dispatch(actionSetUser(userForRedux));
    history.push("/");
    try {
    } catch (error) {
      window.alert(error.message);
    }
  };

export const { actionSetUser } = user.actions;

export default user;
