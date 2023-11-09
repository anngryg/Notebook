import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import CreateNote from "./components/CreateNote";

export default function App() {
  const getFromLocalStorage = () => {
    const notesList = localStorage.getItem("notesList");
    return notesList ? JSON.parse(notesList) : [];
  };

  const [notesList, addToNotesList] = useState(getFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("notesList", JSON.stringify(notesList));
  }, [notesList]);

  function addNote(note) {
    addToNotesList((prevNotes) => {
      return [...prevNotes, note];
    });
  }
  function deleteNote(id) {
    addToNotesList((prevList) => {
      return prevList.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="app">
      <Header />
      <CreateNote onAdd={addNote} />
      <div className="notes">
        {notesList.map((note, noteIndex) => (
          <Note
            key={noteIndex}
            id={noteIndex}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
