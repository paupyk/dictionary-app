import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        setResults(response.data);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleSheCodesResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
        let apiKey = "dt1bb39f7643d6635aece74b30o7b493";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);

        let sheCodesApiKey = "dt1bb39f7643d6635aece74b30o7b493";
        let sheCodesApiUrl= `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${sheCodesApiKey}`;
        axios.get(sheCodesApiUrl).then(handleSheCodesResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    function load() {
        setLoaded(true);
        search();
}

    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                    <h1>What word do you want to look up?</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword} />
                    </form>
                    <div className="hint">
                        suggested words: flower, spooky, wine, moon...
                    </div>
                    <Results results={results} />
                    <Photos photos={photos} />
                </section>
            </div>
        );
    } else {
        load();
        return "Loading..."
    }
}
