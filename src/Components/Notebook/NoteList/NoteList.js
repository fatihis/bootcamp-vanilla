import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Note from "../Note/Note";
import "./NoteList.css";
import { UserContext } from "../../../Utils/UserContext/UserContext";

export default function NoteList() {
  const [noteListState, setNoteListState] = useState([]);
  const userContext = useContext(UserContext);

  useEffect(() => {
    console.log(noteListState);
    setNoteListState(userContext.notes);
  }, [userContext.notes]);

  //pointing deleteNote method of parent
  const deleteNote = (index) => {
    userContext.deleteNote(index);
  };
  return (
    <div className="note-list-container">
      {noteListState.map((text, index) => {
        return (
          //  Parsing through the array, each element renders a Note component and button with deleteNote function

          <div key={index} className="note-list-note-button-wrapper">
            <Link className="input-wrapper" to={"/notes/" + index}>
              <Note text={text}></Note>
            </Link>
            <button className="input-button" onClick={() => deleteNote(index)}>
              REMOVE
            </button>
          </div>
        );
      })}
    </div>
  );
}
