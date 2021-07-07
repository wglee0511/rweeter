import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { shape, src, size, min_width } = props;

  const styles = {
    src:
      src === null && shape === "circle"
        ? "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
        : src,
    size,
    min_width,
  };

  if (shape === "circle") {
    return <ImageCircle {...styles} />;
  }
  return (
    <>
      {src !== null && (
        <AspectOutter {...styles}>
          <AspectInner {...styles} />
        </AspectOutter>
      )}
    </>
  );
};

Image.defaultProps = {
  shape: "circle",
  src: "https://cdn.pixabay.com/photo/2021/06/11/16/24/city-6328941_960_720.jpg",
  size: 50,
  min_width: "500px",
};

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: 4px;
`;

const AspectOutter = styled.div`
  width: 100%;
  min-width: ${(props) => props.min_width};
`;

const AspectInner = styled.div`
  border-radius: 15px;
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

export default Image;
