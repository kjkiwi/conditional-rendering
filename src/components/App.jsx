import React from "react";
import { render } from "react-dom";
import Login from "./Login";
//to change screen shown depending on Login status
var isLoggedIn = false;

//using if-else
function renderConditionally() {
  if (isLoggedIn) {
    return <h1>Hello</h1>;
  } else {
    return <Login />;
  }
}

//works to sub in renderConditionally() function, just not in-line, unless it is in expression format
function App() {
  return <div className="container">{renderConditionally()}</div>;
}

export default App;
