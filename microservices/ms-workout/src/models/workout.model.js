module.exports = (sequelize, Sequelize) => {
  const Workout = sequelize.define("workout", {
    label: { type: Sequelize.STRING },
    trainingDate: {
      type: Sequelize.STRING,
    },
  });

  return Workout;
};
