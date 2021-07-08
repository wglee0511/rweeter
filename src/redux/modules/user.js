import { WbIncandescentOutlined } from "@material-ui/icons";
import { createSlice } from "@reduxjs/toolkit";
import { firebaseAuth } from "../../shared/firebase";
import firebase from "firebase/app";

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
      state.is_loading =false;
    },
    actionDelUser: (state, acion) => {
      state.user = null;
      state.is_login = false;
      state.is_loading =false;
    },
    actionIsLoading :(state, action) =>{
      state.is_loading = true
    }
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

export const actionLoginChecker =
  () =>
  async (dispatch, getState, { history }) => {
    try {
      dispatch(actionIsLoading())
      await firebaseAuth.onAuthStateChanged((user) => {
        if (user) {
          const userForRedux = {
            user_id: user.email,
            user_uid: user.uid,
            user_profile: user.photoURL,
            user_name: user.displayName,
          };
          dispatch(actionSetUser(userForRedux));
        } else {
          dispatch(actionDelUser());
        }
      });
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
      user_profile: user.user.photoURL,
      user_name: user.user.displayName,
    };
    dispatch(actionSetUser(userForRedux));
    history.push("/");
    try {
    } catch (error) {
      window.alert(error.message);
    }
  };

export const actionLogoutToFirabase =
  () =>
  async (dispatch, getState, { history }) => {
    try {
      await firebaseAuth.signOut();
      dispatch(actionDelUser());
      history.replace("/");
    } catch (error) {
      window.alert(error.message);
    }
  };

export const actionGoogleLoginFirebase =
  () =>
  async (dispatch, getState, { history }) => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebaseAuth.signInWithPopup(provider).then((result) => {
        console.log(result);
      });
      dispatch(actionLoginChecker());
    } catch (error) {
      window.alert(error.message);
    }
  };

export const { actionSetUser, actionDelUser,actionIsLoading } = user.actions;

export default user;
