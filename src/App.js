import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import Main from "./components/Main";
function App() {
  return (
    <Router className="App">
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
      <Main />
    </Router>
  );
}

export default App;
