module.exports = {
  // HOST: "db",
  HOST: "86.198.202.75",
  PORT: "3310",
  USER: "root",
  PASSWORD: "root",
  DB: "mydockerdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
