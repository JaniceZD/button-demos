import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/button";
import "./styles.css";

function App() {
  return <Button value="Click Me" />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
