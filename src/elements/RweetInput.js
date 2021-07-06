import React from "react";
import styled from "styled-components";
import theme from "../shared/theme";

const RweetInput = (props) => {
  const { children, width, height, size, placeholder, _onChange } = props;
  const styles = {
    width,
    height,
    size,
  };

  return (
    <Input {...styles} placeholder={placeholder} onChange={_onChange}>
      {children}
    </Input>
  );
};

RweetInput.defaultProps = {
  width: "400px",
  height: "60px",
  children: null,
  size: "18px",
  placeholder: "르위터",
  _onChange: () => {},
};

const Input = styled.input`
  color: ${theme.fontColor};
  border: none;
  :focus {
    outline: none;
  }
  font-size: ${(props) => props.size};
  border-radius: 12px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  background-color: ${theme.bgColor};
`;
export default RweetInput;
