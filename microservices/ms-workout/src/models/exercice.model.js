module.exports = (sequelize, Sequelize) => {
  const Exercice = sequelize.define(
    "exercice",
    {
      label: { type: Sequelize.STRING },
      category: { type: Sequelize.STRING },
    },
    { timestamps: false }
  );

  return Exercice;
};
