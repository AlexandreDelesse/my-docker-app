import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./exerciceNameFormatter.css";
import { useSelector } from "react-redux";
import { getExercices } from "../../../../redux/exerciceRedux";

function ExerciceNameFormatter(props) {
  const { exerciceId } = props;
  const [exerciceName, setExerciceName] = useState(exerciceId);
  const exercices = useSelector(getExercices);

  useEffect(() => {
    const exercice = exercices.find((el) => el.id === exerciceId);
    const name = exercice.label || "unknown";
    setExerciceName(name);
  }, [exercices, exerciceId]);

  return <div className="exerciceName">{exerciceName}</div>;
}

ExerciceNameFormatter.propTypes = {
  exerciceId: PropTypes.number.isRequired,
};

export default ExerciceNameFormatter;
