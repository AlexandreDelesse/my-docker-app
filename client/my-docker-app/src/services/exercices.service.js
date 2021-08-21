import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.1.11:5002/api/exercices",
  timeout: 1000,
});

const getExercices = async () => {
  try {
    const result = await instance.get("/");
    return result.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export { getExercices };
