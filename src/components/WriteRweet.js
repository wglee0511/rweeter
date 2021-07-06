import React, { useRef, useState } from "react";
import styled from "styled-components";
import Image from "../elements/Image";
import RweetInput from "../elements/RweetInput";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import theme from "../shared/theme";
import Button from "../elements/Button";

const WriteRweet = (props) => {
  const file = useRef();
  const [preview, setPreview] = useState("");

  const handleButtonClick = () => {
    document.all.upload.click();
  };

  const handleOnChange = (event) => {
    console.log(event.target.value);
  };

  const handleSelect = () => {
    const fileForReader = file.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(fileForReader);
    reader.onloadend = (event) => {
      setPreview(event.target.result);
    };
  };
  // 햔재 유저의 사진을 넣을 것
  return (
    <InputRweet>
      <UserImageDiv>
        <Image />
      </UserImageDiv>

      <Form>
        <RweetInput placeholder="무슨일이 일어나고 있나요?" width="250px" />
        {preview && <Image shape="rectagle" src={preview} min_width="200px" />}
        <FileInput
          name="upload"
          type="file"
          onChange={handleSelect}
          ref={file}
        />

        <ButtonDiv>
          <PictureButton onClick={handleButtonClick}>
            <CropOriginalIcon fontSize="large" />
          </PictureButton>
          <Button text="르윗하기" height="40px" width="100px" size="15px" />
        </ButtonDiv>
      </Form>
    </InputRweet>
  );
};
const InputRweet = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1.3px solid ${theme.borderColor};
`;
const UserImageDiv = styled.div`
  display: flex;
  width: 63px;
  padding: 10px 0 0 10px;
`;
const Form = styled.div`
  margin: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const ButtonDiv = styled.div`
  border-top: 1.3px solid ${theme.borderColor};
  padding: 10px 0 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  align-items: center;
`;

const PictureButton = styled.div`
  color: ${theme.buttonColor};
  :hover {
    cursor: pointer;
    color: ${theme.fontColor};
  }
`;

const FileInput = styled.input`
  display: none;
`;

export default WriteRweet;
