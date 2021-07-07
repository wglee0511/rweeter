import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { firebaseStorage, firebaseStore } from "../../shared/firebase";

const initialState = {
  list: [],
  paging: { start: null, next: null, size: 3 },
  is_loading: false,
};

/*  - state: {
    - list : [...each_post]
    - paging
    - is_loading
  - }

  - each_post : {
    - post_id : doc.id(in firebase)
    - user_info : {
      - user_uid
      - user_name
      - user_profile
    - }
    - image_url
    - contents
    - comments_cnt
    - like_cnt
    - insert_dt
  - } */

const post = createSlice({
  name: "post",
  initialState,
  reducers: {
    actionAddPost: (state, action) => {
      state.list.unshift(action.payload);
    },
  },
});

export const actionUploadPost =
  (contents) =>
  async (dispatch, getState, { history }) => {
    const preview = getState().image.preview;
    const user = getState().user.user;
    try {
      if (preview) {
        const upload_image = await firebaseStorage
          .ref(
            `images/${user.user_uid}_${moment().format("YYYY-MM-DD hh:mm:ss")}`
          )
          .putString(preview, "data_url");
        const image_url = await upload_image.ref.getDownloadURL();

        let user_info = {
          user_id: user.user_id,
          user_uid: user.user_uid,
          user_profile: user.user_profile,
          user_name: user.user_name,
        };

        let post_info = {
          image_url: image_url,
          contents: contents,
          comments_cnt: 0,
          like_cnt: 0,
          insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
        };

        const upload_post = await firebaseStore.collection("post").add({
          ...user_info,
          ...post_info,
        });
        const post = {
          post_id: upload_post.id,
          user_info: {
            ...user_info,
          },
          ...post_info,
        };
        dispatch(actionAddPost(post));
        history.replace("/");
      } else {
        let user_info = {
          user_id: user.user_id,
          user_uid: user.user_uid,
          user_profile: user.user_profile,
          user_name: user.user_name,
        };
        let post_info = {
          image_url: null,
          contents: contents,
          comments_cnt: 0,
          like_cnt: 0,
          insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
        };
        const upload_post = await firebaseStore.collection("post").add({
          ...user_info,
          ...post_info,
        });
        const post = {
          post_id: upload_post.id,
          user_info: {
            ...user_info,
          },
          ...post_info,
        };
        dispatch(actionAddPost(post));
        history.replace("/");
      }
    } catch (error) {
      window.alert(error.message);
    }
  };

export const actionGetPostFirebase =
  () =>
  async (dispatch, getState, { history }) => {};

export const { actionAddPost } = post.actions;

export default post;
