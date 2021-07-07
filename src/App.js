import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Enter from "./pages/Enter";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import theme from "./shared/theme";
import { useDispatch, useSelector } from "react-redux";
import { actionLoginChecker } from "./redux/modules/user";
import { actionGetPostFirebase } from "./redux/modules/post";

function App(props) {
  const is_login = useSelector((state) => state.user.is_login);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!is_login) {
      dispatch(actionLoginChecker());
      dispatch(actionGetPostFirebase());
    }
  }, []);

  return (
    <Wrapper className="App">
      {is_login ? (
        <MainDiv>
          <Switch>
            <Route exact path="/" component={Main} />
            <Redirect from="*" to="/" />
          </Switch>
        </MainDiv>
      ) : (
        <MainDiv>
          <Switch>
            <Route exact path="/" component={Enter} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Redirect from="*" to="/" />
          </Switch>
        </MainDiv>
      )}
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

export default App;
