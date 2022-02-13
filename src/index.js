import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const DATA = [
  { name: "Eat", completed: true, id: "todo-0" },
  { name: "Sleep", completed: false, id: "todo-1" },
  { name: "Repeat", completed: false, id: "todo-2" },
];

ReactDOM.render(
  <React.StrictMode>
    <App taskData={DATA} />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
