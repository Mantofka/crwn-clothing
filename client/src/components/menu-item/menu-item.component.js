import React from "react";
import { withRouter } from "../withRouter";

import {
  MenuItemContainer,
  BackgroundImage,
  ContentContainer,
  Title,
  Subtitle,
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, linkUrl, navigate, location }) => {
  return (
    <MenuItemContainer
      className={size}
      onClick={() => navigate(`${location.pathname}${linkUrl}`)}
    >
      <BackgroundImage
        imageUrl={imageUrl}
        className='background-image'
      ></BackgroundImage>
      <ContentContainer className='content'>
        <Title>{title}</Title>
        <Subtitle>SHOP NOW</Subtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
