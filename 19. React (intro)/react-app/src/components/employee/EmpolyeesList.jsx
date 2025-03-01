import React from "react";
import PropTypes from "prop-types";

const EmpolyeesList = ({ children }) => {
  return <ul>{children}</ul>;
};

EmpolyeesList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default EmpolyeesList;
