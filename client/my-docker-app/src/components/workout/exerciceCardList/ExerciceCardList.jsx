import React from "react";
import { useSelector } from "react-redux";
import SerieCardList from "./exerciceCard/serieCardList/SerieCardList";

import { getWorkoutInCreation } from "../../../redux/workoutRedux";
import ExerciceNameFormatter from "./exerciceNameFormatter/ExerciceNameFormatter";

import "./exerciceCardList.css";

export default function ExerciceCardList(props) {
  const workoutInCreation = useSelector(getWorkoutInCreation);

  return (
    <div>
      {workoutInCreation &&
        workoutInCreation.activities &&
        workoutInCreation.activities.map((activity) => (
          <div key={activity.exerciceId}>
            <div className="serieCardNameContainer">
              <ExerciceNameFormatter exerciceId={activity.exerciceId} />
            </div>

            <SerieCardList
              serieList={activity.series}
              exerciceId={activity.exerciceId}
            />
          </div>
        ))}
    </div>
  );
}
