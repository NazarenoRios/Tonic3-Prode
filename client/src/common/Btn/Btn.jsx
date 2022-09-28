import React from "react";
import { Link } from "react-router-dom";
import "./Btn.css";

function Btn() {
  return (
    <Link to="/Users" className="btn">
      Users
    </Link>
  );
}

export default Btn;
