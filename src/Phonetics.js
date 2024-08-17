import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic} target="_blank" rel="noopener noreferrer">
        Listen
      </a>
      <span className="text">{props.phonetic}</span>
    </div>
  );
}