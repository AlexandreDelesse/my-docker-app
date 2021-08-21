module.exports = {
  HOST: "db",
  // HOST: "localhost",
  // PORT: "3310",
  USER: "root",
  PASSWORD: "root",
  DB: "my-docker-app",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
