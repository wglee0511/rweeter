import React from "react";
import theme from "./theme";
import { Helmet } from "react-helmet-async";

const MetaScript = () => {
  return (
    <Helmet>
      <title>Rweeter</title>
      <meta
        property="og:image"
        content="https://image.flaticon.com/icons/png/512/60/60580.png"
      />
      <meta property="og:description" content="르위터 - 트위터 클론 코딩" />
      <style>{`body { background-color: ${theme.bgColor}; }`}</style>
    </Helmet>
  );
};

export default MetaScript;
