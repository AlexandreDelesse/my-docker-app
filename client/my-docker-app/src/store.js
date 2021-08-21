// import { useEffect } from "react";
import { createStore } from "redux";
// import { useDispatch } from "react-redux";
// import Workout from "./components/workout/workout";
// import * as WorkoutService from "./services/workouts.service";

const initialState = {
  workoutInCreation: {
    label: "cool workout",
    activities: [],
  },
  workouts: [],
  exercices: [],
  exercicesSelected: [],
};

function workoutReducer(state = initialState, action) {
  switch (action.type) {
    case "app/workouts":
      return { ...state, workouts: action.data };
    case "app/exercices":
      return { ...state, exercices: action.data };
    case "app/exercicesSelected/add":
      return {
        ...state,
        exercicesSelected: [...state.exercicesSelected, action.data],
      };
    case "app/workoutInCreation":
      return { ...state, workoutInCreation: action.data };
    case "app/workoutInCreation/addActivity":
      return {
        ...state,
        workoutInCreation: {
          ...state.workoutInCreation,
          activities: [...state.workoutInCreation.activities, action.data],
        },
      };
    case "app/workoutInCreation/addSerie":
      return {
        ...state,
        workoutInCreation: {
          ...state.workoutInCreation,
          activities:
            state.workoutInCreation.activities.length > 0
              ? state.workoutInCreation.activities.map((el) =>
                  el.exerciceId === action.data.id
                    ? { ...el, series: [...el.series, action.data.serie] }
                    : el
                )
              : [action.data.serie],
        },
      };
    case "app/workoutInCreation/deleteSerie":
      return {
        ...state,
        workoutInCreation: {
          ...state.workoutInCreation,
          activities: state.workoutInCreation.activities.map((activity) =>
            activity.exerciceId === action.data.exerciceId
              ? {
                  ...activity,
                  series: action.data.serie,
                }
              : activity
          ),
        },
      };
    default:
      return state;
  }
}

const clearWorkout = () => {
  return { type: "workout/workout", data: {} };
};

const createExerciceWithEmptySerie = (name) => {
  return {
    type: "workout/workout/addExercice",
    data: { name, series: [{ reps: undefined, poid: 0, repos: 0 }] },
  };
};

const deleteSerieWithNameAndIndex = (exerciceId, serie) => {
  return {
    type: "app/workoutInCreation/deleteSerie",
    data: { exerciceId, serie },
  };
};

const store = createStore(
  workoutReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export {
  store,
  createExerciceWithEmptySerie,
  clearWorkout,
  deleteSerieWithNameAndIndex,
};
