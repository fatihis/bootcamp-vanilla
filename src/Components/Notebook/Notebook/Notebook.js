import React, { useContext } from "react";
import { useEffect, useState } from "react";
import NoteInput from "../NoteInput/NoteInput";
import NoteList from "../NoteList/NoteList";
import { UserContext } from "../../../Utils/UserContext/UserContext";
import useLogin from "../../../Utils/useLoginHook/useLoginHook";
export default function Notebook(props) {
  const token = useContext(UserContext);
  const [loginStatus, setLoginStatus] = useState(false);
  const useLoginCallback = useLogin(token);

  return (
    <>
      {/* Sending both methods as props */}
      {useLoginCallback.status && (
        <NoteInput
          buttonText="ADD"
          addNewNote={(newNote) => props.addNewNote(newNote)}
        />
      )}
      {/* Calling NoteList component in order to list added notes */}
      {useLoginCallback.status && (
        <NoteList
          notes={props.notes}
          removeNote={(index) => props.removeNote(index)}
        ></NoteList>
      )}
      {!useLoginCallback.status && <p>"Unauth"</p>}
    </>
  );
}
