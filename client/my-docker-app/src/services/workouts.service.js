import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.1.11:5002/api/workouts",
  timeout: 1000,
});

const getWorkouts = async () => {
  try {
    const result = await instance.get("/");
    return result.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const createWorkout = () => {};

export { getWorkouts, createWorkout };