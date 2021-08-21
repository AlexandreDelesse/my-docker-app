const express = require("express");
const cors = require("cors");

const app = express();

const corsOption = {
  origin: "*",
};

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./src/models");

db.sequelize.sync().then(() => {
  console.log("drop and re-sync db");
});

app.get("/", (req, res) => {
  res.json({ message: "hello world from ms-workout" });
});

// TODO change route name
require("./src/routes/workouts.routes")(app);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
