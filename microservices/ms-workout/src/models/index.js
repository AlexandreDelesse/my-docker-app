const dbConfig = require("../../config/db.config");
const { applyExtraSetup } = require("./extra-setup");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.workouts = require("./workout.model")(sequelize, Sequelize);
db.exercices = require("./exercice.model")(sequelize, Sequelize);
db.series = require("./serie.model")(sequelize, Sequelize);
db.activities = require("./activity.model")(sequelize, Sequelize);

applyExtraSetup(sequelize);

module.exports = db;
