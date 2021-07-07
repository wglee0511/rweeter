import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";
import theme from "../shared/theme";
import { useDispatch } from "react-redux";
import { actionLogoutToFirabase } from "../redux/modules/user";

const Navigation = (props) => {
  let urlname = props.location.pathname;
  const dispatch = useDispatch();
  const handleLougout = () => {
    dispatch(actionLogoutToFirabase());
  };

  const handleUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <TextDiv>{urlname === "/" ? "홈" : "내정보"}</TextDiv>
      <IconDiv>
        <EachLink to="/" title="홈">
          <HomeIcon fontSize="large" />
        </EachLink>
        <EachLink to="/" title="로그아웃" onClick={handleLougout}>
          <ExitToAppIcon fontSize="large" />
        </EachLink>
        <EachLink to="/" title="위로가기" onClick={handleUp}>
          <ArrowUpwardIcon fontSize="large" />
        </EachLink>
      </IconDiv>
    </>
  );
};

const TextDiv = styled.div`
  font-size: 25px;
  width: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconDiv = styled.div`
  box-sizing: border-box;
  width: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EachLink = styled(Link)`
  color: ${theme.fontColor};
  :hover {
    color: ${theme.buttonColor};
  }
`;

export default withRouter(Navigation);
