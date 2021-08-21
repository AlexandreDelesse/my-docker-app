module.exports = (app) => {
  const users = require("../controllers/users.controller");

  const router = require("express").Router();

  router.post("/", users.create);
  router.post("/nameAndPassword", users.findWithNameAndPassword);

  router.get("/", users.findAll);
  router.get("/admin", users.findAllAdmin);
  router.get("/:id", users.findOne);

  router.put("/:id", users.update);

  router.delete("/:id", users.delete);
  router.delete("/", users.deleteAll);

  app.use("/api/users", router);
};
