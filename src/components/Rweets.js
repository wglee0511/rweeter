import React, { useEffect } from "react";
import styled from "styled-components";
import Image from "../elements/Image";
import theme from "../shared/theme";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { useDispatch, useSelector } from "react-redux";
import InfinityScroll from "../shared/InfinityScroll";
import {
  actionGetOnePostFirebase,
  actionGetPostFirebase,
} from "../redux/modules/post";
import { actionGetLike, actionLikeUpadate } from "../redux/modules/like";
import Loader from "../shared/Loader";

const Rweets = (props) => {
  const post_list = useSelector((state) => state.post.list);
  const like_list = useSelector((state) => state.like.list);
  const is_loading = useSelector((state) => state.post.is_loading);
  const get_next = useSelector((state) => state.post.paging.next);
  const dispatch = useDispatch();
  let next_checker = get_next ? true : false;
  let list_length_checker = post_list.length !== 0 ? true : false;

  const nextCall = () => {
    dispatch(actionGetPostFirebase(get_next));
  };

  useEffect(() => {
    dispatch(actionGetLike());
  }, []);

  return (
    <>
      <InfinityScroll
        is_loading={is_loading}
        is_next={next_checker}
        nextCall={nextCall}
      >
        {list_length_checker &&
          post_list?.map((each) => {
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

                  <ContentsDiv
                    onClick={() => {
                      dispatch(actionGetOnePostFirebase(each.post_id));
                    }}
                  >
                    <Font>{each.contents}</Font>
                    <Image
                      shape="rectangle"
                      min_width="230px"
                      src={each.image_url}
                    />
                  </ContentsDiv>

                  <Enddiv>
                    <LikeButton
                      title="?????????"
                      is_like={
                        like_list.findIndex((like_each) => {
                          return like_each.post_id === each.post_id;
                        }) === -1
                          ? "false"
                          : "true"
                      }
                      onClick={() => {
                        dispatch(actionLikeUpadate(each.post_id));
                      }}
                    >
                      <FavoriteIcon style={{ margin: "0 5px" }} />
                      {each.like_cnt}
                    </LikeButton>
                  </Enddiv>
                </MainDiv>
              </InputRweet>
            );
          })}
      {is_loading && <Loader />}
      </InfinityScroll>
      {!list_length_checker && (
        <PleaseDiv>???????????? ?????? ?????? ???????????????.</PleaseDiv>
      )}
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
  font-weight: 800;
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
    color: ${theme.likeColor};
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
const Enddiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export default Rweets;
