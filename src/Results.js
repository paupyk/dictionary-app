import React from "react";
import Phonetics from "./Phonetics";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return <div className="Results">
        <section>
        <h2>{props.results.word}</h2>
        <Phonetics phonetic={props.results.phonetic} />
        </section>
          {props.results.meanings.map(function (meaning, index){
              return (
                  <section key={index}>
                      <Meaning meaning={meaning} />
                      </section>
              )
          })}
    </div>;
  } else {
    return null;
  }
}