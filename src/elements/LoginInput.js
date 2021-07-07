import React from "react";
import styled from "styled-components";
import theme from "../shared/theme";

const LoginInput = ({ children, ...rest }) => {
  return <Input {...rest}>{children}</Input>;
};

LoginInput.defaultProps = {
  width: "410px",
  height: "60px",
  children: null,
  size: "18px",
  placeholder: "르위터",
  _onChange: () => {},
  type: "text",
};

const Input = styled.input`
  color: ${theme.fontColor};
  :focus {
    outline: none;
    border: 2px solid ${theme.buttonColor};
    ::placeholder {
      color: ${theme.buttonColor};
    }
  }
  font-size: ${(props) => props.size};
  border-radius: 12px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 2px solid ${theme.borderColor};
  background-color: ${theme.bgColor};
  padding: 0 10px 0 10px;
`;

export default LoginInput;
