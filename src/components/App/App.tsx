import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <main className="page"></main>
        <footer className="footer"></footer>
      </div>
    </Router>
  );
}

export default App;
