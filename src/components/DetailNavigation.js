import React from "react";
import styled from "styled-components";
import theme from "../shared/theme";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";

const DetailNavigation = () => {
  const history = useHistory();
  return (
    <NavDiv>
      <Button onClick={() => history.goBack()}>
        <ArrowBackIcon fontSize="medium" title="돌아가기" />
      </Button>
      르윗
    </NavDiv>
  );
};

const NavDiv = styled.div`
  background-color: ${theme.bgColor};
  z-index: 10;
  position: sticky;
  height: 60px;
  top: -0.1px;
  border-bottom: 1px solid ${theme.borderColor};
  font-weight: 600;
  font-size: 20px;
  display: flex;
  align-items: center;
  padding: 0 17px 0 17px;
`;
const Button = styled.div`
  border: none;
  margin-right: 12px;
  color: ${theme.buttonColor};
  :hover {
    cursor: pointer;
    color: ${theme.fontColor};
  }
`;

export default DetailNavigation;
