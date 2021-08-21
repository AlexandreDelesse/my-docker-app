import React from "react";
import Workout from "./components/workout/workout";
import AddWorkout from "./components/workout/addWorkout/addWorkout";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/home/home";

import "./App.css";
import "./styles/Aliment.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/workout">
            <Workout />
          </Route>
          <Route path="/addWorkout">
            <AddWorkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
