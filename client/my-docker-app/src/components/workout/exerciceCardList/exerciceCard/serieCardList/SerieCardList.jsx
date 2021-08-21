import React from "react";
import PropTypes from "prop-types";
import "./serieCardList.css";

import SerieCard from "./serieCard/SerieCard";
import SerieCardButton from "./serieCard/SerieCardButton";

import { useDispatch } from "react-redux";
import { deleteSerieWithNameAndIndex } from "../../../../../store";
import { addEmptySerie } from "../../../../../redux/workoutRedux";

export default function SerieCardList(props) {
  const { serieList, exerciceId } = props;
  const dispatch = useDispatch();

  const handleOnAddSerieClick = () => {
    dispatch(addEmptySerie(exerciceId));
  };

  const handleOnDeleteSerieClick = (index) => {
    const series = serieList.filter((serie, i) => i !== index);
    dispatch(deleteSerieWithNameAndIndex(exerciceId, series));
  };

  return (
    <div className="serieCardListContainer">
      {serieList &&
        serieList.map((serie, index) => (
          <SerieCard
            key={index}
            serie={serie}
            index={index}
            onDeleteSerieClick={handleOnDeleteSerieClick}
          />
        ))}
      <SerieCardButton onAddClick={handleOnAddSerieClick} />
    </div>
  );
}

SerieCardList.propTypes = {
  serieList: PropTypes.instanceOf(Object).isRequired,
  exerciceId: PropTypes.number.isRequired,
};

SerieCardList.defaultProps = {
  serieList: {},
};
