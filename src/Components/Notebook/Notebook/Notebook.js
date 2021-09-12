import React from "react";
import { useEffect, useState } from "react";
import NoteInput from "../NoteInput/NoteInput";
import NoteList from "../NoteList/NoteList";

export default function Notebook(props) {
  return (
    <>
      {/* Sending both methods as props */}

      <NoteInput
        buttonText="ADD"
        addNewNote={(newNote) => props.addNewNote(newNote)}
      />
      {/* Calling NoteList component in order to list added notes */}
      <NoteList
        notes={props.notes}
        removeNote={(index) => props.removeNote(index)}
      ></NoteList>
    </>
  );
}
