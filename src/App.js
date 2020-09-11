import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.jsx";

function App() {
  const bla= () => {
    return <h1>blabla</h1>
  }
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route exact path={"/Oil"} component={bla} />
      </Switch>{" "}
    </div>
  );
}

export default App;
