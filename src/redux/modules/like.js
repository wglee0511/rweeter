import { createSlice } from "@reduxjs/toolkit";
import { firebaseStore } from "../../shared/firebase";
import firebase from "firebase/app";
import { actionGetPostFirebase, actionLikeUpdate } from "./post";
import { decomposeColor } from "@material-ui/core";

const initialState = {
  list: [],
};
const like = createSlice({
  name: "like",
  initialState,
  reducers: {
    actionSetLike: (state, action) => {
      state.list = action.payload;
    },
    actionAddLike: (state, action) => {
      state.list.push(action.payload);
    },
    actionDelLike: (state, action) => {
      const newArr = state.list.filter((each) => {
        return each.post_id !== action.payload;
      });
      state.list = newArr;
    },
  },
});

export const actionGetLike =
  () =>
  async (dispatch, getState, { history }) => {
    let like_arr = [];
    try {
      await firebaseStore
        .collection("like")
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            const like_obj = {
              post_id: doc.data().post_id,
              user_uid: doc.data().user_uid,
              like_id: doc.id,
            };
            like_arr.push(like_obj);
          });
        });
      dispatch(actionSetLike(like_arr));
    } catch (error) {
      window.alert(error.message);
    }
  };

export const actionLikeUpadate =
  (post_id) =>
  async (dispatch, getState, { history }) => {
    try {
      const user_uid = getState().user.user.user_uid;
      const get_like = await firebaseStore.collection("like").get();
      //// 확인용 array
      let like_list_user = [];
      ////
      get_like.forEach((doc) => {
        if (user_uid === doc.data().user_uid) {
          const like_obj = {
            post_id: doc.data().post_id,
            like_id: doc.id,
          };
          like_list_user.push(like_obj);
        }
      });
      dispatch(actionSetLike(like_list_user));
      // 여기서 like_list_user 내에 존재하는 post_id 값과
      // 파라미터의 post_id 값이 일치하면 삭제
      // 없으면  like 추가
      const like_checker = like_list_user.find(
        (each) => each.post_id === post_id
      );
      if (like_checker === undefined) {
        await firebaseStore
          .collection("like")
          .add({
            post_id,
            user_uid,
          })
          .then((doc) => {
            const like_list = {
              post_id,
              like_id: doc.id,
            };
            dispatch(actionAddLike(like_list));
          });
        await firebaseStore
          .collection("post")
          .doc(post_id)
          .update({
            like_cnt: firebase.firestore.FieldValue.increment(1),
          });
        dispatch(actionLikeUpdate({ post_id, value: 1 }));
      } else {
        await firebaseStore
          .collection("like")
          .doc(like_checker.like_id)
          .delete();
        dispatch(actionDelLike(post_id));
        await firebaseStore
          .collection("post")
          .doc(post_id)
          .update({
            like_cnt: firebase.firestore.FieldValue.increment(-1),
          });
        dispatch(actionLikeUpdate({ post_id, value: -1 }));
      }
    } catch (error) {
      window.alert(error.message);
    }
  };

export const { actionSetLike, actionAddLike, actionDelLike } = like.actions;

export default like;
