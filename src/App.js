import "./App.css";
import Notebook from "./Components/Notebook/Notebook/Notebook";
import Table from "./Components/Table/Table";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoteDetail from "./Components/Notebook/NoteDetail/NoteDetail";
import { useEffect, useState } from "react";
import { UserContext } from "./Utils/UserContext/UserContext";

const App = () => {
  const [notes, setNotes] = useState([]);
  const token = "111222333aaabbb";
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
      <UserContext.Provider
        value={{
          token,
          deleteNote,
          updateNote,
          pushNewNote,
        }}
      >
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Notebook notes={notes} />
            </Route>
            <Route path="/table">
              {/*       First Task*/}
              <Table />
            </Route>
            <Route path="/notes/:id">
              <NoteDetail notes={notes} />
            </Route>
          </Switch>
        </div>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
