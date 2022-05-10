import React from "react";
import Login from "./Login";
//to change screen shown depending on Login status
var isLoggedIn = false;

//using if-else 
function renderConditionally() {
if (isLoggedIn) {
  return <h1>Hello</h1>
} else {
  return <Login />;
}
}

//doesn't work to sub function into App because it is not an expression, it is a statement. Need to use ternary operator to format it as an expression
function App() {
  return {renderConditionally()}
}

export default App;
