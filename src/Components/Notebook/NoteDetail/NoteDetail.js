import React from "react";
import Note from "../Note/Note";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import NoteInput from "../NoteInput/NoteInput";
export default function NoteDetail(props) {
  let { id } = useParams();
  let history = useHistory();
  const removeAndRedirect = () => {
    props.removeNote(id);
    history.push("/");
  };
  const updateAndRedirect = (newNote) => {
    props.updateNote(id, newNote);
    history.push("/");
  };

  return (
    <div>
      <div className="note-list-note-button-wrapper">
        <Note text={props.notes[id]}></Note>
        <button className="input-button" onClick={() => removeAndRedirect()}>
          REMOVE
        </button>
        <NoteInput
          buttonText="UPDATE"
          addNewNote={(newNote) => updateAndRedirect(newNote)}
        />
      </div>
    </div>
  );
}
