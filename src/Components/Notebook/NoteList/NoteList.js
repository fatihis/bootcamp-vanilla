import React, { useEffect, useState } from "react";
import Note from "../Note/Note";
import "./NoteList.css";
export default function NoteList(props) {
  const [noteListState, setNoteListState] = useState([]);

  useEffect(() => {
    console.log(noteListState);
    setNoteListState(props.notes);
  }, [props.notes]);

  //pointing deleteNote method of parent
  const deleteNote = (index) => {
    props.removeNote(index);
  };

  return (
    <div className="note-list-container">
      {noteListState.map((text, index) => {
        return (
          //  Parsing through the array, each element renders a Note component and button with deleteNote function
          <div className="note-list-note-button-wrapper">
            <Note text={text}></Note>
            <button className="input-button" onClick={() => deleteNote(index)}>
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
}
