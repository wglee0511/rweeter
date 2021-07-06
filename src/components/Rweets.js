import React from "react";
import styled from "styled-components";
import Image from "../elements/Image";
import theme from "../shared/theme";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
const Rweets = () => {
  // 아래 map 각각의 정보를 넣어줘야함
  return (
    <InputRweet>
      <UserImageDiv>
        <Image />
      </UserImageDiv>
      <MainDiv>
        <UserInfoDiv>
          <Font>ddd</Font>
          <CheckCircleIcon style={{ margin: "0 3px 0 3px" }} />
          <CreatAt>2222-22-22</CreatAt>
        </UserInfoDiv>
        <ContentsDiv>
          <Font>sdfsda</Font>
          <Image shape="rectangle" min_width="230px" />
          <LikeButton is_like={"false"}>
            <FavoriteIcon />
            100 개
          </LikeButton>
        </ContentsDiv>
      </MainDiv>
    </InputRweet>
  );
};

const InputRweet = styled.div`
  display: flex;
  min-height: 150px;
  border-bottom: 1.3px solid ${theme.borderColor};
`;

const UserImageDiv = styled.div`
  display: flex;
  width: 63px;
  padding: 10px 0 0 10px;
`;

const MainDiv = styled.div`
  display: flex;
  width: 100%;
  min-width: 200px;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 0 0 10px;
`;

const UserInfoDiv = styled.div`
  display: flex;
  height: 15px;
  align-items: center;
`;

const Font = styled.h1`
  color: ${theme.fontColor};
  font-weight: 600;
  margin: 10px 0 15px 0;
`;
const CreatAt = styled.h1`
  color: ${theme.borderColor};
  font-weight: 600;
`;

const ContentsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const LikeButton = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: none;
  font-weight: 600;
  color: ${(props) =>
    props.is_like === "true" ? theme.likeColor : theme.fontColor};
  :hover {
    cursor: pointer;
  }
`;

export default Rweets;
