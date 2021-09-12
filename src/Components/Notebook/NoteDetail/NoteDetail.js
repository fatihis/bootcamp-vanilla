import React, { useContext } from "react";
import Note from "../Note/Note";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import NoteInput from "../NoteInput/NoteInput";
import { UserContext } from "../../../Utils/UserContext/UserContext";

export default function NoteDetail(props) {
  let { id } = useParams();
  let history = useHistory();
  const userContext = useContext(UserContext);
  const removeAndRedirect = () => {
    userContext.deleteNote(id);
    history.push("/");
  };

  return (
    <div>
      <div className="note-list-note-button-wrapper">
        <Note text={userContext.notes[id]}></Note>
        <button className="input-button" onClick={() => removeAndRedirect()}>
          REMOVE
        </button>
        <NoteInput func="update" buttonText="UPDATE" id={id} />
      </div>
    </div>
  );
}
