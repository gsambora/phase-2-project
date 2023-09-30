import React from "react";
import NavBar from "./NavBar";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/meal-form">
          <NewMeal />
        </Route>
        {/* <Route path="/allmeals">
          <AllMeals />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
