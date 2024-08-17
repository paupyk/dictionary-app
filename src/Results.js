import React from "react";
import Phonetics from "./Phonetics";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return <div className="Results">
        <section>
        <h2>{props.results.word}</h2>
        <Phonetics props={props.results.phonetics} />
        </section>
          {props.results.meanings.map(function (meaning, index){
              return (
                  <div key={index}>
                      <Meaning meaning={meaning} />
                      </div>
              )
          })}
    </div>;
  } else {
    return null;
  }
}