import "./index.css";

import React from "react";
import { render } from "react-dom";

import App from "./App";

function start() {
  return render(<App />, document.getElementById("root"));
}

start();
