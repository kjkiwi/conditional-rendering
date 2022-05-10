import React from "react";

import Login from "./Login";
//to change screen shown depending on Login status
var isLoggedIn = false;

//function to get current hour as a number
const currentTime = new Date().getHours();
console.log(currentTime);

//ternary operator when you only want an action if condition is truthy, and no action if condition is falsy
function App() {
  return (
    <div className="container">
      {currentTime < 12 ? <h1> Time for lunch </h1> : null}
      {/* {isLoggedIn ? <h1>Hello</h1> : <Login />}{" "} */}
    </div>
  );
}

export default App;
