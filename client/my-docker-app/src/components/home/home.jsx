import React from "react";
import { Link } from "react-router-dom";

import "./home.css";

export default function Home() {
  return (
    <div className="linkContainer">
      <Link to="/workout" className="link">
        Workout
      </Link>
      <Link to="/food" className="link">
        Food
      </Link>
    </div>
  );
}
