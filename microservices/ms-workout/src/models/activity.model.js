module.exports = (sequelize, Sequelize) => {
  const Activity = sequelize.define("activity", {}, { timestamps: false });

  return Activity;
};
