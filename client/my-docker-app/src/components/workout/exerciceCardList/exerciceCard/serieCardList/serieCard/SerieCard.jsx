import React, { useState } from "react";
import PropTypes from "prop-types";
import "./serieCard.css";

import { TiDelete } from "react-icons/ti";
import { IoIosStats, IoIosFitness } from "react-icons/io";
import { RiTimerLine } from "react-icons/ri";

export default function SerieCard(props) {
  const { serie, index, onDeleteSerieClick } = props;
  const [serieField, setSerieField] = useState(serie);
  console.log(serieField);

  const handleOnRepsChange = (e) => {
    setSerieField({ ...serieField, reps: e.target.value });
  };

  const handleOnMassChange = (e) => {
    setSerieField({ ...serieField, poid: e.target.value });
  };

  const handleOnReposChange = (e) => {
    setSerieField({ ...serieField, repos: e.target.value });
  };

  return (
    <div className="serieCardContainer">
      <TiDelete
        className="serieCardCloseImg"
        onClick={() => onDeleteSerieClick(index)}
      />

      <div className="serieCardHeader">
        <h4>Serie n° {index}</h4>
      </div>
      <div className="serieCardBody">
        <div className="serieCardBodyElement">
          <IoIosStats className="serieCardIco" />
          <input
            className="serieCardInput"
            type="number"
            value={serieField.reps}
            placeholder="0"
            onChange={handleOnRepsChange}
          />
        </div>
        <div className="serieCardBodyElement">
          <IoIosFitness className="serieCardIco" />
          <input
            className="serieCardInput"
            type="number"
            value={serieField.mass}
            onChange={handleOnMassChange}
          />
        </div>
        <div className="serieCardBodyElement">
          <RiTimerLine className="serieCardIco" />
          <input
            className="serieCardInput"
            type="number"
            value={serieField.break}
            onChange={handleOnReposChange}
          />
        </div>
      </div>
    </div>
  );
}

SerieCard.propTypes = {
  serie: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.number.isRequired,
  onDeleteSerieClick: PropTypes.func.isRequired,
};
