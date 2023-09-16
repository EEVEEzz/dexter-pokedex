import React from "react";
import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <title>{title}</title>
    </Helmet>
  );
};

export default Meta;
