import React from "react";
// import { useSelector } from "react-redux";
import "./workout.css";
import plusAddIcon from "../../assets/images/plusAddIcon.svg";
import { useHistory } from "react-router-dom";
import WorkoutCardList from "./workoutCardList/WorkoutCardList";
import { useGetWorkout } from "../../redux/workoutRedux";
import { useGetExercices } from "../../redux/exerciceRedux";

export default function Workout() {
  useGetWorkout();
  useGetExercices();
  const history = useHistory();

  const handleOnClickAddWorkout = () => {
    history.push("/addWorkout");
  };
  return (
    <div>
      <img
        src={plusAddIcon}
        alt=""
        onClick={handleOnClickAddWorkout}
        className="plusAddIcon"
      />

      <WorkoutCardList />
    </div>
  );
}
