const db = require("../models");

const Workout = db.workouts;
const Exercice = db.exercices;
const Serie = db.series;
const Activity = db.activities;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty" });
    return;
  }

  const today = new Date(Date.now()).toLocaleDateString("fr-GB", {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  console.log(today);

  const workout = {
    ...req.body,
    trainingDate: today,
  };

  const exist = await Workout.findOne({ where: { trainingDate: today } });

  if (exist && req.query.force !== "true") {
    res.status("409").send({ message: "workout already exist" });
    return;
  }

  try {
    const newWorkout = await Workout.create(workout, {
      include: [
        { model: Activity, include: [{ model: Exercice }, { model: Serie }] },
      ],
    });
    res.send(newWorkout);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occured while creating the User",
    });
  }
};

// Retrieve all Workouts from the database.
exports.findall = (req, res) => {
  Workout.findAll({
    include: [
      { model: Activity, include: [{ model: Exercice }, { model: Serie }] },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving Workouts",
      });
    });
};

// Delete all Users from the database.
exports.deleteById = async (req, res) => {
  if (!req.params.id) {
    res.status("404").send({ message: "missing id argument" });
  }
  const { id } = req.params;
  console.log(id);

  const exist = await Workout.findOne({ where: { id } });
  if (!exist) {
    res.status("404").send({ message: "workout does not exist" });
    return;
  }
  Workout.destroy({
    where: { id },
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Workout were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing Workout.",
      });
    });
};

// // Find all published Users
// exports.findAllAdmin = (req, res) => {
//   User.findAll({ where: { isAdmin: true } })
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || "Some error occurred while retrieving Users.",
//       });
//     });
// };
