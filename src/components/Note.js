import React from "react";
import "./Note.css";

export default function Note(props) {
  return (
    <div className="note">
      <div className="content">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </div>
      <button
        className="deleteBtn"
        onClick={() => {
          props.onDelete(props.id);
        }}>
        ✖️
      </button>
    </div>
  );
}
