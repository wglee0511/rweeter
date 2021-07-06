import React from "react";
import LoginForm from "../components/LoginForm";
import TwitterIcon from "@material-ui/icons/Twitter";
import styled from "styled-components";
import Button from "../elements/Button";
import LoginInput from "../elements/LoginInput";
import LoginSubmitForm from "../elements/LoginSubmitForm";

const Signup = (props) => {
  const handleToLogin = () => {
    props.history.push("/login");
  };
  const handleOnSubmit = (event) => {
    event.preventDefalut();
    props.history.push("/login");
  };

  const emailChange = (event) => {};
  const nameChange = (event) => {};
  const passwordChange = (event) => {};
  const secondnameChange = (event) => {};

  return (
    <LoginForm height="600px">
      <TwitterIcon fontSize="large" />
      <Intro>계정을 생성하세요</Intro>
      <LoginSubmitForm _onSubmit={handleOnSubmit}>
        <LoginInput placeholder="이메일" _onChange={emailChange} />
        <LoginInput placeholder="닉네임" _onChange={nameChange} />
        <LoginInput placeholder="비밀번호" _onChange={passwordChange} />
        <LoginInput placeholder="비밀번호 확인" _onChange={secondnameChange} />
        <Button text="가입하기" size="20px" _onClick={handleToLogin} />
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

export default Signup;
