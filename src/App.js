import React, { useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import theme from "./shared/theme";
import { useDispatch, useSelector } from "react-redux";
import { actionLoginChecker } from "./redux/modules/user";
import { actionGetPostFirebase } from "./redux/modules/post";
import MetaScript from "./shared/MetaScript";
import Loader from "./shared/Loader";
import Router from "./shared/Router";
import { withRouter } from "react-router-dom";


function App(props) {
  const is_login = useSelector((state) => state.user.is_login);
  const is_loading =useSelector(state=> state.user.is_loading);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!is_login) {
      dispatch(actionLoginChecker());
      dispatch(actionGetPostFirebase());
    }
  }, []);

  return (
    <Wrapper className="App">
      <MetaScript />
      {is_loading && <Loader /> }
      {!is_loading && <Router />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.bgColor};
  color: ${theme.fontColor};
  display: flex;
  justify-content: center;
`;

const MainDiv = styled.div`
  min-width: 320px;
  max-width: 600px;
  border: 1.3px solid ${theme.borderColor};
`;

export default withRouter(App);
