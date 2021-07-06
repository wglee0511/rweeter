import React from "react";
import styled from "styled-components";

const LoginForm = (props) => {
  const { height, children } = props;

  const styles = {
    height,
  };

  return <Banner {...styles}>{children}</Banner>;
};

LoginForm.defaultProps = {
  height: "380px",
};

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  height: ${(props) => props.height};
  padding: 35px 30px 35px 30px;
`;

export default LoginForm;
