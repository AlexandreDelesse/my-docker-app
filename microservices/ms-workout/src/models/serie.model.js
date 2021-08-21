module.exports = (sequelize, Sequelize) => {
  const Serie = sequelize.define(
    "serie",
    {
      label: { type: Sequelize.STRING },
      reps: { type: Sequelize.INTEGER },
      mass: { type: Sequelize.INTEGER },
      break: { type: Sequelize.INTEGER },
    },
    { timestamps: false }
  );

  return Serie;
};
