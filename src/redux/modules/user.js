import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    user_id: "ranazang@naver.com",
    user_uid: "safsafknsdkflk",
    user_profile: "",
    user_name: "라쿤",
  },
  is_Loading: false,
  is_Login: false,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default user;
