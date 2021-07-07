import React from "react";
import styled from "styled-components";
import Image from "../elements/Image";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import FavoriteIcon from "@material-ui/icons/Favorite";
import theme from "../shared/theme";

const Rweet = () => {
  return (
    <>
      <UserDiv>
        <UserImageDiv>
          <Image />
        </UserImageDiv>
        <UserInfoDiv>
          <NameWrapper>
            <Font>dsfdsf</Font>
            <CheckCircleIcon
              fontSize="small"
              style={{ margin: "0 3px 0 3px" }}
            />
          </NameWrapper>
          <Email>asda@sadsad.asda</Email>
        </UserInfoDiv>
      </UserDiv>
      <ContentsDiv>
        <FontWord>내에용</FontWord>
        <Image shape="rectangle" min_width="230px" />
      </ContentsDiv>

      <Enddiv>
        <CreatAt>2222-22-22</CreatAt>
        <LikeButton is_like={"false"}>
          <FavoriteIcon style={{ margin: "0 5px" }} />
          100
        </LikeButton>
      </Enddiv>
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
