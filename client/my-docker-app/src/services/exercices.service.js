import axios from "axios";

const instance = axios.create({
  baseURL: "https://mywebservice-cr77nbfyhq-ew.a.run.app/api/exercices",
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
