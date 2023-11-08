import React, { useState } from "react";
import "./CreateNote.css";

export default function CreateNote(props) {
  // eslint-disable-next-line
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });

  const [isClicked, setIsClicked] = useState(false);

  function inputOnChangeHandler(event) {
    const { name, value } = event.target;

    setNewNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  function addNotex(event) {
    props.onAdd(newNote);
    setNewNote({
      title: "",
      content: "",
    });
    event.preventDefault();
    setIsClicked(false);
  }

  function expandInput(event) {
    event.preventDefault();
    setIsClicked(true);
  }

  return (
    <div>
      <form>
        {isClicked && (
          <input
            onChange={inputOnChangeHandler}
            name="title"
            placeholder="Title"
            value={newNote.title}
            style={{ visibility: isClicked ? "none" : "visible" }}
          />
        )}
        <textarea
          onChange={inputOnChangeHandler}
          name="content"
          placeholder="Take a note..."
          rows={isClicked ? 3 : 1}
          value={newNote.content}
          onClick={expandInput}
        />
        <button
          onClick={addNotex}
          style={{ visibility: isClicked ? "visible" : "hidden" }}>
          Add Note
        </button>
      </form>
    </div>
  );
}
