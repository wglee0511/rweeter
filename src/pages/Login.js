import React from "react";
import LoginForm from "../components/LoginForm";
import TwitterIcon from "@material-ui/icons/Twitter";
import Button from "../elements/Button";
import LoginInput from "../elements/LoginInput";
import LoginSubmitForm from "../elements/LoginSubmitForm";
import styled from "styled-components";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import theme from "../shared/theme";
import { actionLoginForAuth } from "../redux/modules/user";

const Login = (props) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      userId: "",
      pwd: "",
    },

    validationSchema: Yup.object({
      userId: Yup.string()
        .email("이메일 형식이 아닙니다.")
        .required("아이디를 입력해주세요!"),
      pwd: Yup.string()
        .min(8, "비밀번호는 8자리 이상이여야 합니다.")
        .matches(/[a-zA-Z]/, "패스워드에는 반드시 영문을 포함해야합니다.")
        .required("패스워드를 입력해주세요."),
    }),

    onSubmit: (values) => {
      // dispatch 자리
      dispatch(actionLoginForAuth(values));
    },
  });
  return (
    <LoginForm height="450px">
      <TwitterIcon fontSize="large" />
      <Intro>르위터 로그인</Intro>
      <LoginSubmitForm _onSubmit={formik.handleSubmit}>
        <LoginInput
          placeholder="이메일"
          id="userId"
          name="userId"
          type="userId"
          onChange={formik.handleChange}
          value={formik.values.userId}
        />
        {formik.touched.userId && formik.errors.userId ? (
          <HelperMsg>{formik.errors.userId}</HelperMsg>
        ) : null}
        <LoginInput
          placeholder="비밀번호"
          id="pwd"
          name="pwd"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.pwd}
        />
        {formik.touched.pwd && formik.errors.pwd ? (
          <HelperMsg>{formik.errors.pwd}</HelperMsg>
        ) : null}
        <Button text="로그인하기" size="20px" type="submit" />
      </LoginSubmitForm>
    </LoginForm>
  );
};

const Intro = styled.h1`
  font-weight: 800;
  font-size: 40px;
  text-align: start;
  margin: 60px 0 60px;
`;
const HelperMsg = styled.div`
  margin-top: 1rem;
  font-size: 15px;
  font-weight: 600;
  color: ${theme.buttonColor};
`;

export default Login;
