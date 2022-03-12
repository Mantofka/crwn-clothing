import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, ...restProps }) => {
  return (
    <CustomButtonContainer
      {...restProps}
    >
      {children}
    </CustomButtonContainer>
  );
};

export default CustomButton;
