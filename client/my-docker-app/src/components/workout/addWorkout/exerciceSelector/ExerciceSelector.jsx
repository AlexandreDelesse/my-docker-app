import React, { useState } from "react";
import PropTypes from "prop-types";
import "./exerciceSelector.css";

import { useDispatch, useSelector } from "react-redux";
import {
  useGetExercices,
  addExerciceSelected,
  getExercices,
  getExercicesSelected,
} from "../../../../redux/exerciceRedux";

function ExerciceSelector(props) {
  const { onSelectExercice } = props;

  useGetExercices();
  const exercices = useSelector(getExercices);
  const exercicesSelected = useSelector(getExercicesSelected);
  const dispatch = useDispatch();

  const [exercicesFiltered, setExercicesFiltered] = useState(
    exercices ? exercices : undefined
  );
  const categoryFilters = ["all", "back", "legs", "pecs"];

  const handleOnFilterClick = (filter) => {
    if (exercices && filter === "all") {
      setExercicesFiltered(exercices);
      return;
    }
    if (exercices)
      setExercicesFiltered(
        exercices.filter((exercice) => exercice.category === filter)
      );
  };

  const handleOnExerciceClick = (exercice) => {
    if (exercicesSelected.includes(exercice.id)) return;

    dispatch(addExerciceSelected(exercice.id));
    onSelectExercice(exercice);
  };

  return (
    <div>
      <div className="exerciceSelectorFiltersContainer">
        {categoryFilters.map((filter) => (
          <button
            type="button"
            className="exerciceSelectorFilterButton"
            key={filter}
            onClick={() => handleOnFilterClick(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="exerciceSelectorContainer">
        {exercicesFiltered &&
          exercicesFiltered.map((exercice) => (
            <div
              onClick={() => handleOnExerciceClick(exercice)}
              key={exercice.id}
              className={`exerciceSelectorItem ${
                exercicesSelected.includes(exercice.id) &&
                "exerciceSelectorItemDisabled"
              }`}
            >
              {exercice.label ? exercice.label : "failed to get name"}
            </div>
          ))}
      </div>
    </div>
  );
}

ExerciceSelector.propTypes = {
  onSelectExercice: PropTypes.func,
};

ExerciceSelector.defaultProps = {
  onSelectExercice: () => {},
};

export default ExerciceSelector;
