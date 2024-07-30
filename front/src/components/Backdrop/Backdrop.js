import React from "react";
import './Backdrop.css'

function Backdrop({ onClick }) {
  return <div className="backdrop" onClick={() => onClick(false)}></div>;
}

export default Backdrop;
