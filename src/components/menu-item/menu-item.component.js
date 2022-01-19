import React from "react";
import { withRouter } from "../withRouter";

import "./menu-item.styles.scss";

const MenuItem = ({
  title,
  imageUrl,
  size,
  linkUrl,
  navigate,
  location,
}) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => navigate(`${location.pathname}${linkUrl}`)}
    >
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
