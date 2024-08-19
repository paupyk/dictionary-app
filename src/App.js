import './App.css';
import logo from "./logo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="spooky"/>
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by <a href="https://github.com/paupyk" target="_blank" rel="noreferrer">Kaylea Paup</a> and is <a href="https://github.com/paupyk/dictionary-app" target="_blank" rel="noreferrer">open-sourced on GitHub</a> and <a href="https://main--dictionary-app-shecodes-kp.netlify.app/" target="_blank" rel="noreferrer">hosted on Netlify</a>
            </small>
        </footer>
      </div>
      </div>
  );
}
