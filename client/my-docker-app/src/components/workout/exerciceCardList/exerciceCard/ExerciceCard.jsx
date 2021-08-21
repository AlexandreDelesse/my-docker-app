import React from "react";
import PropTypes from "prop-types";
import SerieCardList from "./serieCardList/SerieCardList";

function ExerciceCard(props) {
  const { exercice } = props;
  return (
    <div>
      <h4>{exercice.name}</h4>
      <div>
        <SerieCardList
          serieList={exercice.serie}
          exerciceName={exercice.name}
        />
      </div>
    </div>
  );
}

ExerciceCard.propTypes = {
  exercice: PropTypes.instanceOf(Object).isRequired,
};

export default ExerciceCard;
