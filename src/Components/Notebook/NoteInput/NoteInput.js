import React from "react";
import { useEffect, useState } from "react";
import "./NoteInput.css";

export default function NoteInput(props) {
  const [inputText, setInputText] = useState("");

  const sendData = () => {
    props.addNewNote(inputText);
  };

  return (
    <>
      <input
        type="text"
        className="note-input"
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="input-button" onClick={() => sendData()}>
        ADD
      </button>
    </>
  );
}
