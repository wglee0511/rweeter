import React from "react";
import styled from "styled-components";
import TwitterIcon from "@material-ui/icons/Twitter";
import Button from "../elements/Button";
import Image from "../elements/Image";
import theme from "../shared/theme";
import { withRouter } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const Enter = (props) => {
  const handleClickSign = () => {
    props.history.push("/signup");
  };
  const handleClicklogin = () => {
    props.history.push("/login");
  };

  return (
    <>
      <LoginForm>
        <TwitterIcon fontSize="large" />
        <Intro>지금 일어나고 있는 일</Intro>
        <Sub>오늘 르위터에 가입하세요.</Sub>
        <BtnDiv>
          <Button
            _onClick={handleClickSign}
            btnstyle="blue"
            text={"가입하기"}
          />
          <Button
            _onClick={handleClicklogin}
            btnstyle="black"
            text={"로그인"}
          />
        </BtnDiv>
      </LoginForm>
      <PicDiv>
        <Image
          shape="rectangle"
          src="https://cdn.pixabay.com/photo/2021/05/10/14/48/rain-6243559_960_720.jpg"
        />
      </PicDiv>
      <Footer>Cloned Twitter</Footer>
    </>
  );
};

/* Button.defaultProps = {
  _onClick: () => {},
  btnstyle: "blue",
  width: "410px",
  height: "50px",
  text: "르위터",
  size: "25px",
};
 */
/* Image.defaultProps = {
  shape: "circle",
  src: "https://cdn.pixabay.com/photo/2021/05/10/14/48/rain-6243559_960_720.jpg",
  size: 36,
  min_width: "500px",
};
 */

const Intro = styled.h1`
  font-weight: 800;
  font-size: 40px;
  text-align: start;
  margin: 60px 0 60px;
`;

const Sub = styled.h2`
  font-weight: 800;
  font-size: 25px;
  text-align: start;
  margin: 10px 0 10px 0;
`;

const BtnDiv = styled.div`
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const PicDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Footer = styled.footer`
  color: ${theme.fontColor};
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`;

export default withRouter(Enter);
