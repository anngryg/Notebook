import React, { useState } from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import CreateNote from "./components/CreateNote";

export default function App() {
  const [notesList, addToNotesList] = useState([]);

  function addNote(note) {
    addToNotesList((prevNotes) => {
      return [...prevNotes, note];
    });
  }
  function deleteNote(id, event) {
    addToNotesList((prevList) => {
      return prevList.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote} />
      {notesList.map((note, noteIndex) => (
        <Note
          key={noteIndex}
          id={noteIndex}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}
