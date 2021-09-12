import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./NoteInput.css";
import { UserContext } from "../../../Utils/UserContext/UserContext";
export default function NoteInput(props) {
  const [inputText, setInputText] = useState("");
  const userContext = useContext(UserContext);
  let history = useHistory();

  const sendData = () => {
    if (props.func == "add") {
      userContext.pushNewNote(inputText);
    } else if (props.func == "update") {
      console.log("update");
      userContext.updateNote(props.id, inputText);
    }
    history.push("/");
  };

  return (
    <>
      <input
        type="text"
        className="note-input"
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="input-button" onClick={() => sendData()}>
        {props.buttonText}
      </button>
    </>
  );
}
