import React from "react";

import "./workoutCardList.css";
import WorkoutCard from "./workoutCard/WorkoutCard";
import { useSelector } from "react-redux";
import { getWorkouts } from "../../../redux/workoutRedux";

function WorkoutCardList(props) {
  const workouts = useSelector(getWorkouts);
  return (
    <div className="workoutCardListContainer">
      {workouts
        ? workouts.map((workout) => (
            <div key={workout.createdAt} className="workoutCardListItem">
              <WorkoutCard workout={workout} />
            </div>
          ))
        : "No workout"}
    </div>
  );
}

export default WorkoutCardList;
