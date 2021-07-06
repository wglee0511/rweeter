import React from "react";
import styled from "styled-components";

const LoginSubmitForm = (props) => {
  const { _onSubmit, children } = props;
  return <Form onSubmit={_onSubmit}>{children}</Form>;
};
LoginSubmitForm.defaltProps = {
  _onSubmit: () => {},
  children: null,
};
const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export default LoginSubmitForm;
