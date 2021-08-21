import React from "react";
import PropTypes from "prop-types";
import "./serieCard.css";

import { AiOutlinePlus } from "react-icons/ai";

function SerieCardButton(props) {
  const { onAddClick } = props;

  const handleOnSerieCardButtonClick = () => {
    onAddClick();
  };

  return (
    <div
      className="serieCardButtonContainer"
      onClick={handleOnSerieCardButtonClick}
    >
      <div className="serieCardButtonHeader">
        <h4 className="serieCardButtonTitle">Add serie</h4>
      </div>
      <div className="serieCardButtonBody">
        <AiOutlinePlus className="serieCardButtonAdd" />
      </div>
    </div>
  );
}

SerieCardButton.propTypes = {
  onAddClick: PropTypes.func,
};

SerieCardButton.defaultProps = {
  onAddClick: () => {},
};

export default SerieCardButton;
