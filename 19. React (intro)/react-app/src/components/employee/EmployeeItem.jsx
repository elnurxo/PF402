import React from "react";
import PropTypes from "prop-types";

const EmployeeItem = ({ fullName, salary, position, isMarried }) => {
  return (
    <li style={{ color: isMarried ? "red" : "green" }}>
      {fullName}, <i>{salary}</i> | <b>{position}</b>
    </li>
  );
};

EmployeeItem.propTypes = {
  fullName: PropTypes.string,
  salary: PropTypes.number,
  position: PropTypes.oneOf[("hr", "it", "manager", "developer", "marketing")],
  isMarried: PropTypes.bool,
};

export default EmployeeItem;
