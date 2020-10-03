import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import selectDirectorySections from "../../redux/directory/directory.selectors.js";
import MenuItem from "../menu-item/menu-item.component.jsx";
import DirectoryStyled from "./directory.styled.jsx";

const DirectoryComponent = ({ sections }) => (
  <DirectoryStyled>
    {sections.map(({ id, ...rest }) => (
      <MenuItem key={id} {...rest} />
    ))}
  </DirectoryStyled>
);
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(DirectoryComponent);
