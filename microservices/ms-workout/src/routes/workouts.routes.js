module.exports = (app) => {
  const workouts = require("../controllers/workouts.controller");
  const exercices = require("../controllers/exercices.controller");
  const series = require("../controllers/series.controller");

  const router = require("express").Router();

  router.post("/workouts", workouts.create);
  router.get("/workouts", workouts.findall);
  router.delete("/workouts/:id", workouts.deleteById);

  router.post("/exercices", exercices.create);
  router.get("/exercices", exercices.findAll);

  router.post("/series", series.create);
  // router.post("/nameAndPassword", users.findWithNameAndPassword);

  // router.get("/admin", users.findAllAdmin);
  // router.get("/:id", users.findOne);

  // router.put("/:id", users.update);

  // router.delete("/:id", users.delete);
  // router.delete("/", users.deleteAll);

  app.use("/api", router);
};
