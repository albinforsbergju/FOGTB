// Import react
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./static/App.css";

// Import components
import Dashboard from "./Components/dashboard";
import Navbar from "./Components/navbar";
import Login from "./Components/login";
import SignUp from "./Components/signup";
import Drills from "./Components/drills";
import User from "./Components/user";
import DrillCreator from "./Components/drillcreator";
import Drill from "./Components/drill";
import Sessions from "./Components/sessions";
import Createsession from "./Components/createsession";
import Session from "./Components/session";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/drills">
          <Drills />
        </Route>
        <Route path="/sessions">
          <Sessions />
        </Route>
        <Route path="/createsession">
          <Createsession />
        </Route>
        <Route path="/drillcreator">
          <DrillCreator />
        </Route>
        <Route path="/drill/:id">
          <Drill />
        </Route>
        <Route path="/session/:id">
          <Session />
        </Route>
        <Route path="/user/:id">
          <User />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
