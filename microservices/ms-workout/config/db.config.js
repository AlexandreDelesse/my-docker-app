module.exports = {
  // HOST: "db",
  HOST: "34.77.43.129",
  PORT: "",
  USER: "root",
  PASSWORD: "root",
  DB: "mydockerapp",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
