import { useEffect, useState } from "react";
import "./App.css";
import { start } from "./services/terminal-service";
import logo from "./logo.svg";

// import { start, runCommand } from "./utils/index";

function App() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      start();
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="terminal-container" style={{ width: "100%" }}></div>
      </header>
    </div>
  );
}

export default App;
