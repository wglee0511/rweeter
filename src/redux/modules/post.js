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
// isloading 만들것
// paging 정보 추가할 것
const post = createSlice({
  name: "post",
  initialState,
  reducers: {
    actionAddPost: (state, action) => {
      state.list.unshift(action.payload);
      state.is_loading = false;
    },
    actionGetPost: (state, action) => {
      state.list.push(...action.payload.post_list);
      state.paging = action.payload.paging;
      state.is_loading = false;
    },
    actionLoading: (state, action) => {
      state.is_loading = true;
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
  (start = null, size = 6) =>
  async (dispatch, getState, { history }) => {
    dispatch(actionLoading());
    try {
      let post_list = [];
      const prepare = firebaseStore.collection("post");

      let query = prepare.orderBy("insert_dt", "desc");

      if (start) {
        query = query.startAt(start);
      }

      let get_post_list = await query.limit(size + 1).get();

      let paging = {
        start: get_post_list.docs[0],
        next:
          get_post_list.docs.length === size + 1
            ? get_post_list.docs[get_post_list.docs.length - 2]
            : null,
      };
      get_post_list.forEach((doc) => {
        const doc_info = doc.data();
        const each_post = {
          post_id: doc.id,
          user_info: {
            user_id: doc_info.user_id,
            user_uid: doc_info.user_uid,
            user_profile: doc_info.user_profile,
            user_name: doc_info.user_name,
          },
          contents: doc_info.contents,
          image_url: doc_info.image_url,
          comments_cnt: doc_info.comments_cnt,
          like_cnt: doc_info.like_cnt,
          insert_dt: doc_info.insert_dt,
        };
        post_list.push(each_post);
      });
      dispatch(actionGetPost({ paging, post_list }));
    } catch (error) {
      window.alert(error.message);
    }
  };

export const { actionAddPost, actionGetPost, actionLoading } = post.actions;

export default post;
