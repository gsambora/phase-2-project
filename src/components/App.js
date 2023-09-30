import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import NewMeal from "./NewMeal";

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
