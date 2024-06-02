import React from "react";

export default function NextImageMock({ objectFit, fill, ...props }) {
  const fillProp = fill === true ? "true" : fill;

  return <img {...props} fill={fillProp} />;
}
