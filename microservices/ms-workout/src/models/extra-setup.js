function applyExtraSetup(sequelize) {
  const { exercice, workout, serie, activity } = sequelize.models;

  workout.hasMany(activity);
  activity.belongsTo(workout);

  exercice.hasMany(activity);
  activity.belongsTo(exercice);

  activity.hasMany(serie);
  serie.belongsTo(activity);
}

module.exports = { applyExtraSetup };
