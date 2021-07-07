import React from "react";
import styled from "styled-components";
import Image from "../elements/Image";
import theme from "../shared/theme";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { useSelector } from "react-redux";
const Rweets = () => {
  const post_list = useSelector((state) => state.post.list);
  const checker = post_list.length !== 0 ? true : false;

  return (
    <>
      {checker &&
        post_list.map((each) => {
          return (
            <InputRweet key={each.post_id}>
              <UserImageDiv>
                <Image src={each.user_info.user_profile} />
              </UserImageDiv>
              <MainDiv>
                <UserInfoDiv>
                  <Font>{each.user_info.user_name}</Font>
                  <CheckCircleIcon style={{ margin: "0 3px 0 3px" }} />
                  <CreatAt>{each.insert_dt}</CreatAt>
                </UserInfoDiv>
                <ContentsDiv>
                  <Font>{each.contents}</Font>
                  <Image
                    shape="rectangle"
                    min_width="230px"
                    src={each.image_url}
                  />
                  <LikeButton is_like={"false"}>
                    <FavoriteIcon />
                    {each.like_cnt} 개
                  </LikeButton>
                </ContentsDiv>
              </MainDiv>
            </InputRweet>
          );
        })}
      {!checker && <PleaseDiv>르위터에 오신 것을 환영합니다.</PleaseDiv>}
    </>
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

const PleaseDiv = styled.div`
  font-size: 20px;
  font-weight: 600;
  display: flex;
  height: 600px;
  justify-content: center;
  align-items: center;
  color: ${theme.fontColor};
`;

export default Rweets;
