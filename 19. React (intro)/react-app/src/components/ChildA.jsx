import ChildB from "./ChildB";
import PropTypes from "prop-types";

export const ChildA = ({ message }) => {
  return <ChildB message={message} />;
};

ChildA.propTypes = {
  message: PropTypes.string,
};
