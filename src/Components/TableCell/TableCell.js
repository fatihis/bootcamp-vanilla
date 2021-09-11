import React from "react";
import "./TableCell.css";
export default function TableCell(props) {
  return (
    <div className="table-cell-container">
      <p className="table-cell-data">{props.text}</p>
    </div>
  );
}
