import React from "react";
import "./Note.css";
export default function Note(props) {
  console.log("note");
  return (
    <div className="note-wrapper">
      <p>{props.text}</p>
    </div>
  );
}
