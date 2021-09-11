import { useEffect, useState } from "react";
import "./App.css";
import Note from "./Components/Notebook/Note/Note";
import NoteInput from "./Components/Notebook/NoteInput/NoteInput";
import NoteList from "./Components/Notebook/NoteList/NoteList";
import Table from "./Components/Table/Table";

const App = () => {
  const [notes, setNotes] = useState([]);

  const pushNewNote = (newNote) => {
    let notesArray = [...notes];
    notesArray.push(newNote);
    setNotes(notesArray);
  };
  const deleteNote = (index) => {
    let notesArray = [...notes];
    notesArray.splice(index, 1);
    setNotes(notesArray);
  };

  return (
    <div className="App">
      {/*       First Task
      <Table />
      */}
      {/* Sending both methods as props */}
      <NoteInput addNewNote={(newNote) => pushNewNote(newNote)} />
      {/* Calling NoteList component in order to list added notes */}
      <NoteList
        notes={notes}
        removeNote={(index) => deleteNote(index)}
      ></NoteList>
    </div>
  );
};

export default App;
