import "./App.css";
import Notebook from "./Components/Notebook/Notebook/Notebook";
import Table from "./Components/Table/Table";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoteDetail from "./Components/Notebook/NoteDetail/NoteDetail";
import { useState } from "react";
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
  const updateNote = (id, newText) => {
    let notesArray = [...notes];
    notesArray[id] = newText;
    setNotes(notesArray);
  };
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Notebook
              notes={notes}
              addNewNote={(newNote) => pushNewNote(newNote)}
              removeNote={(index) => deleteNote(index)}
            />
          </Route>
          <Route path="/table">
            {/*       First Task*/}
            <Table />
          </Route>
          <Route path="/notes/:id">
            <NoteDetail
              notes={notes}
              removeNote={(index) => deleteNote(index)}
              updateNote={(id, newText) => updateNote(id, newText)}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
