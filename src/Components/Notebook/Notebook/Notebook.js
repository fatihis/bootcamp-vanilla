import React, { useContext } from "react";
import { useEffect, useState } from "react";
import NoteInput from "../NoteInput/NoteInput";
import NoteList from "../NoteList/NoteList";
import { UserContext } from "../../../Utils/UserContext/UserContext";
import useLogin from "../../../Utils/useLoginHook/useLoginHook";
export default function Notebook(props) {
  const userContext = useContext(UserContext);
  const useLoginCallback = useLogin(userContext.token);

  return (
    <>
      {/* Sending both methods as props */}
      {useLoginCallback.status && <NoteInput func="add" buttonText="ADD" />}
      {/* Calling NoteList component in order to list added notes */}
      {useLoginCallback.status && <NoteList></NoteList>}
      {!useLoginCallback.status && <p>"Unauth"</p>}
    </>
  );
}
