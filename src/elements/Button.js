import React from "react";
import styled from "styled-components";
import theme from "../shared/theme";

const Button = (props) => {
  const { _onClick, btnstyle, width, height, text, size, type, _disabled } =
    props;
  const styles = { btnstyle, width, height, size };
  return (
    <ButtonStyle type={type} onClick={_onClick} block={_disabled} {...styles}>
      {text}
    </ButtonStyle>
  );
};

Button.defaultProps = {
  _onClick: () => {},
  btnstyle: "blue",
  width: "410px",
  height: "50px",
  text: "르위터",
  size: "25px",
  type: "",
  disabled: false,
};

const ButtonStyle = styled.button`
  border: none;
  text-align: center;
  font-weight: 400;
  font-size: ${(props) => props.size};
  border-radius: 25px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) =>
    props.btnstyle === "blue" &&
    `background-color : ${theme.buttonColor};
     color: ${theme.fontColor};
     :hover{
         cursor: pointer;
         background-color : ${theme.fontColor};
         color : ${theme.buttonColor};
     }
     `}
  ${(props) =>
    props.btnstyle === "black" &&
    `border: 2px solid ${theme.buttonColor};
    background-color : ${theme.bgColor};
     color: ${theme.buttonColor};
     :hover{
         cursor: pointer;
         background-color : ${theme.buttonColor};
         color : ${theme.bgColor};
         border: 2px solid ${theme.bgColor};
     }
     `}
     ${(props) => props.block === "true" && `opacity: 0.5;`}
`;

export default Button;
