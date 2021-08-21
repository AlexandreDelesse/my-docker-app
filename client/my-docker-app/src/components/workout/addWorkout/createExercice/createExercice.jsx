import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import "./createExercice.css";
import * as ExerciceRedux from "../../../../redux/exerciceRedux";

export default function CreateExercice(props) {
  const { OnSelectExerciceChange } = props;
  const exercices = useSelector(ExerciceRedux.getExercices);

  return (
    <div className="container">
      <select className="selectInput" onChange={OnSelectExerciceChange}>
        <option value="DEFAULT">Choose an exercice...</option>
        {exercices &&
          exercices.map((exercice) => {
            return (
              <option key={exercice.id} value={exercice.label}>
                {exercice.label}
              </option>
            );
          })}
      </select>
    </div>
  );
}

CreateExercice.propTypes = {
  OnSelectExerciceChange: PropTypes.func,
};

CreateExercice.defaultProps = {
  OnSelectExerciceChange: () => {},
};
