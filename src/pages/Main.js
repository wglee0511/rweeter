import React from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import WriteRweet from "../components/WriteRweet";
import Rweets from "../components/Rweets";
import theme from "../shared/theme";

const Main = () => {
  return (
    <Wrapper>
      <NavDiv>
        <Navigation />
      </NavDiv>
      <WriteRweet />
      <Rweets />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const NavDiv = styled.div`
  background-color: ${theme.bgColor};
  position: sticky;
  height: 60px;
  top: -0.1px;
  border-bottom: 1px solid ${theme.borderColor};
  font-weight: 600;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 17px 0 17px;
`;

export default Main;
