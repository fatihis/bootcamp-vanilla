import React from "react";
import "./Note.css";
//Base component for each note
export default function Note(props) {
  return (
    <div className="note-wrapper">
      <p>{props.text}</p>
    </div>
  );
}
