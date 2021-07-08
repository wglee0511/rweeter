import React from "react";
import LoginForm from "../components/LoginForm";
import TwitterIcon from "@material-ui/icons/Twitter";
import styled from "styled-components";
import Button from "../elements/Button";
import LoginInput from "../elements/LoginInput";
import LoginSubmitForm from "../elements/LoginSubmitForm";
import { useFormik } from "formik";
import * as Yup from "yup";
import theme from "../shared/theme";
import { useDispatch } from "react-redux";
import { actionSignupforAuth } from "../redux/modules/user";

const Signup = (props) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      userId: "",
      userName: "",
      pwd: "",
      pwdCheck: "",
    },

    validationSchema: Yup.object({
      userId: Yup.string()
        .email("이메일 형식이 아닙니다.")
        .required("아이디를 입력해주세요!"),
      userName: Yup.string().required("이름을 입력해주세요."),
      pwd: Yup.string()
        .min(8, "비밀번호는 8자리 이상이여야 합니다.")
        .matches(/[a-zA-Z]/, "패스워드에는 반드시 영문을 포함해야합니다.")
        .required("패스워드를 입력해주세요."),
      pwdCheck: Yup.string()
        .min(8, "비밀번호는 8자리 이상이여야 합니다.")
        .required("패스워드를 재입력해주세요")
        .oneOf([Yup.ref("pwd"), null], "비밀번호가 일치하지 않습니다."),
    }),

    onSubmit: (values) => {
      // dispatch 자리
      dispatch(actionSignupforAuth(values));
    },
  });

  return (
    <LoginForm height="500px">
      <TwitterIcon fontSize="large" />
      <Intro>계정을 생성하세요</Intro>
      <LoginSubmitForm _onSubmit={formik.handleSubmit}>
        <LoginInput
          placeholder="이메일"
          id="userId"
          name="userId"
          type="userId"
          onChange={formik.handleChange}
          value={formik.values.userId}
          width="250px"
          height="30px"
          size="15px"
        />
        {formik.touched.userId && formik.errors.userId ? (
          <HelperMsg>{formik.errors.userId}</HelperMsg>
        ) : null}
        <LoginInput
          placeholder="닉네임"
          id="userName"
          name="userName"
          type="userName"
          onChange={formik.handleChange}
          value={formik.values.userName}
          width="250px"
          height="30px"
          size="15px"
        />
        {formik.touched.userName && formik.errors.userName ? (
          <HelperMsg>{formik.errors.userName}</HelperMsg>
        ) : null}
        <LoginInput
          placeholder="비밀번호"
          id="pwd"
          name="pwd"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.pwd}
          width="250px"
          height="30px"
          size="15px"
        />
        {formik.touched.pwd && formik.errors.pwd ? (
          <HelperMsg>{formik.errors.pwd}</HelperMsg>
        ) : null}
        <LoginInput
          placeholder="비밀번호 확인"
          id="pwdCheck"
          name="pwdCheck"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.pwdCheck}
          width="250px"
          height="30px"
          size="15px"
        />
        {formik.touched.pwdCheck && formik.errors.pwdCheck ? (
          <HelperMsg>{formik.errors.pwdCheck}</HelperMsg>
        ) : null}
        <Button  text="가입하기"  width="300px"
            height="50px"
            size="15px" type="submit" />
      </LoginSubmitForm>
    </LoginForm>
  );
};

const Intro = styled.h1`
  font-weight: 800;
  font-size: 30px;
  text-align: start;
  margin: 60px 0 60px;
`;
const HelperMsg = styled.div`
  margin-top: 1rem;
  font-size: 15px;
  font-weight: 600;
  color: ${theme.buttonColor};
`;

export default Signup;
