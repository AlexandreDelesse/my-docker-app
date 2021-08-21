const db = require("../models");

const Workout = db.workouts;
const Exercice = db.exercices;
const Serie = db.series;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty" });
    return;
  }
  const exercice = req.body;
  try {
    const result = await Exercice.create(exercice);
    res.status(401).send(result);
  } catch (err) {
    res.status(500).send({ message: "An error occured in exercice creation" });
    throw err;
  }
};

exports.findAll = async (req, res) => {
  try {
    const result = await Exercice.findAll();
    res.status(200).send(result);
  } catch (err) {
    res
      .status(500)
      .send({ message: "An error occured in finding all exercices" });
  }
};
