const db = require("../models");

const Workout = db.workouts;
const Exercice = db.exercices;
const Serie = db.series;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty" });
    return;
  }

  const exerciceId = req.body.exercice.id;
  const serie = req.body.serie;
  console.log(serie);

  try {
    const newSerie = await Serie.bulkCreate(
      serie.map((el) => ({ ...el, exerciceId }))
    );
    res.send(newSerie);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occured while creating the User",
    });
  }
};
