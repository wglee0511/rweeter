import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import styled from "styled-components";
import Enter from '../pages/Enter';
import Login from '../pages/Login';
import Main from '../pages/Main';
import RweetDetail from '../pages/RweetDetail';
import Signup from '../pages/Signup';
import { useDispatch, useSelector } from "react-redux";
import theme from './theme';


const Router = () => {
    const is_login = useSelector((state) => state.user.is_login);
    return (
        <>
            {is_login ? (
        <MainDiv>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/detail/:id" component={RweetDetail} />
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
        </>
    )
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


export default Router
