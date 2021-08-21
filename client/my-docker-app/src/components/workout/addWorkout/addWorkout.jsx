import React, { useState } from "react";
import "./addWorkout.css";
import { useDispatch } from "react-redux";
// import * as WorkoutService from "../../../services/workouts.service";
import ExerciceCardList from "../exerciceCardList/ExerciceCardList";

// import { clearWorkout } from "../../../store";
// import { useHistory } from "react-router-dom";
import ExerciceSelector from "./exerciceSelector/ExerciceSelector";
import * as WorkoutRedux from "../../../redux/workoutRedux";

export default function AddExercice() {
  // const history = useHistory();
  const dispatch = useDispatch();

  const [isSelectingExercice, setIsSelectingExercice] = useState(false);

  const handleOnSelectExercice = (exercice) => {
    const activity = WorkoutRedux.emptyActivity(exercice.id);
    dispatch({ type: "app/workoutInCreation/addActivity", data: activity });
    setIsSelectingExercice(false);
  };

  // const handleOnSaveWorkout = () => {
  //   WorkoutService.createWorkout();
  //   dispatch(clearWorkout());
  //   history.goBack();
  // };

  const handleOnShowExerciceSelectorButton = () => {
    setIsSelectingExercice(true);
  };

  return (
    <div className="container">
      <div className="row m-3">
        {!isSelectingExercice && (
          <button
            className="addActivityButton"
            type="button"
            onClick={handleOnShowExerciceSelectorButton}
          >
            Add activity
          </button>
        )}
        {isSelectingExercice && (
          <ExerciceSelector onSelectExercice={handleOnSelectExercice} />
        )}
      </div>
      {!isSelectingExercice && (
        <div className="row">
          <ExerciceCardList />
        </div>
      )}
    </div>
  );
}

AddExercice.propTypes = {};

AddExercice.defaultProps = {};
