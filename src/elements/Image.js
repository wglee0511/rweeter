import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { shape, src, size, min_width } = props;
  const styles = {
    src,
    size,
    min_width,
  };

  return (
    <div>
      {shape === "circle" ? (
        <ImageCircle {...styles} />
      ) : (
        <AspectOutter {...styles}>
          <AspectInner {...styles} />
        </AspectOutter>
      )}
    </div>
  );
};

Image.defaultProps = {
  shape: "circle",
  src: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
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
