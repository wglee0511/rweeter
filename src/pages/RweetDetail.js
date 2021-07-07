import React from "react";
import styled from "styled-components";
import DetailNavigation from "../components/DetailNavigation";
import Rweet from "../components/Rweet";

const RweetDetail = () => {
  return (
    <Wrapper>
      <DetailNavigation />
      <Rweet />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
`;

export default RweetDetail;
