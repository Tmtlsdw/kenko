import React from "react";
import { withRouter } from "react-router-dom";
import MenuItemStyled from "./menu-item.styled.jsx";

const MenuItemComponent = ({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match,
}) => (
  <MenuItemStyled
    className={`${size}`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={"background-image"}
    />
    <div className={"content"}>
      <h1 className={"title"}>{title.toUpperCase()}</h1>
      <span className={"subtitle"}>Shop now</span>
    </div>
  </MenuItemStyled>
);
export default withRouter(MenuItemComponent);
