import React, {useState} from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import NewMeal from "./NewMeal";

function App() {
  const [page, setPage] = useState("/")

  return (
    <div className="App">
      <NavBar onChangePage={setPage}/>

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
      </Switch>
    </div>
  );
}

export default App;
