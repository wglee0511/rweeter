import React from "react";
import LoginForm from "../components/LoginForm";
import TwitterIcon from "@material-ui/icons/Twitter";
import Button from "../elements/Button";
import LoginInput from "../elements/LoginInput";
import LoginSubmitForm from "../elements/LoginSubmitForm";
import styled from "styled-components";

const Login = (props) => {
  const handleOnClick = () => {
    props.history.push("/");
  };
  return (
    <LoginForm height="450px">
      <TwitterIcon fontSize="large" />
      <Intro>르위터 로그인</Intro>
      <LoginSubmitForm _onSubmit>
        <LoginInput placeholder="이메일" _onChange />
        <LoginInput placeholder="닉네임" _onChange />
        <Button text="가입하기" size="20px" _onClick={handleOnClick} />
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

export default Login;
