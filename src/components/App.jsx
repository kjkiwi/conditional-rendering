import React from "react";
import { render } from "react-dom";
import Login from "./Login";
//to change screen shown depending on Login status
var isLoggedIn = false;

//renderConditionally() converted to expression so it can be passed inline to App()
function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <Login />}{" "}
      {/* this is the renderConditionally() function */}
    </div>
  );
}

export default App;
