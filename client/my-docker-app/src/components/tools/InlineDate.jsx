import React from "react";
import PropTypes from "prop-types";

function InlineDate(props) {
  const { date } = props;
  return <div>{new Date(date).toLocaleDateString()}</div>;
}

InlineDate.propTypes = {
  date: PropTypes.string,
};

InlineDate.defaultProps = {
  date: "",
};

export default InlineDate;
