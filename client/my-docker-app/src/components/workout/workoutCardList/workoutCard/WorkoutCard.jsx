import React from "react";
import PropTypes from "prop-types";
import "./workoutCard.css";

function WorkoutCard(props) {
  const { workout } = props;
  return (
    <div className="workoutCardContainer">
      <div className="workoutCardContent">
        <div className="workoutCardHeader">
          <div className="workoutCardDate">
            {workout.trainingDate ? workout.trainingDate : "workout Date"}
          </div>
        </div>
        <div className="workoutCardBody">
          <div className="workoutCardTitle">
            {workout.label ? workout.label : "Workout title"}
          </div>
        </div>
      </div>
    </div>
  );
}

WorkoutCard.propTypes = {
  workout: PropTypes.instanceOf(Object),
};

WorkoutCard.defaultProps = {
  workout: {},
};

export default WorkoutCard;
