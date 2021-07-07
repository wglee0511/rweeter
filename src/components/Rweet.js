import React, { useEffect } from "react";
import styled from "styled-components";
import Image from "../elements/Image";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import FavoriteIcon from "@material-ui/icons/Favorite";
import theme from "../shared/theme";
import { useSelector } from "react-redux";

const Rweet = () => {
  const is_loading = useSelector((state) => state.post.is_loading);
  const post = useSelector((state) => state.post.detail_rweet);

  console.log(post);
  return (
    <>
      {!is_loading && (
        <>
          <UserDiv>
            <UserImageDiv>
              <Image src={post.user_info.user_profile} />
            </UserImageDiv>
            <UserInfoDiv>
              <NameWrapper>
                <Font>{post.user_info.user_name}</Font>
                <CheckCircleIcon
                  fontSize="small"
                  style={{ margin: "0 3px 0 3px" }}
                />
              </NameWrapper>
              <Email>{post.user_info.user_id}</Email>
            </UserInfoDiv>
          </UserDiv>
          <ContentsDiv>
            <FontWord>{post.contents}</FontWord>
            <Image shape="rectangle" min_width="300px" src={post.image_url} />
          </ContentsDiv>

          <Enddiv>
            <CreatAt>{post.insert_dt}</CreatAt>
            <LikeButton is_like={"false"}>
              <FavoriteIcon style={{ margin: "0 5px" }} />
              {post.comments_cnt}
            </LikeButton>
          </Enddiv>
        </>
      )}
    </>
  );
};

const UserDiv = styled.div`
  height: 70px;
  display: flex;
`;
const UserImageDiv = styled.div`
  display: flex;
  width: 63px;
  padding: 10px 0 0 10px;
`;
const UserInfoDiv = styled.div`
  display: flex;
  margin-left: 10px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Font = styled.h1`
  color: ${theme.fontColor};
  font-weight: 600;
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Email = styled.h1`
  color: ${theme.borderColor};
  font-weight: 800;
`;

const ContentsDiv = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FontWord = styled.h1`
  color: ${theme.fontColor};
  font-weight: 600;
  margin-bottom: 20px;
`;

const Enddiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CreatAt = styled.h1`
  color: ${theme.borderColor};
  font-weight: 800;
  margin-left: 10px;
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
    color: ${theme.likeColor};
  }
`;

export default Rweet;
