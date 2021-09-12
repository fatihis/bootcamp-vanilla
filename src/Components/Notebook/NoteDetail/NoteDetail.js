import React from "react";
import Note from "../Note/Note";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
export default function NoteDetail(props) {
  let { id } = useParams();
  let history = useHistory();
  const removeAndRedirect = () => {
    props.removeNote(id);
    history.push("/");
  };

  return (
    <div>
      <div className="note-list-note-button-wrapper">
        <Note text={props.notes[id]}></Note>
        <button className="input-button" onClick={() => removeAndRedirect()}>
          remove
        </button>
      </div>
    </div>
  );
}
