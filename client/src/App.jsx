import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {LandingPage} from "../src/pages/Landing"
import { Home } from "./pages/Home";
import {Detalles} from "../src/pages/Detail"
import {Form} from "../src/pages/Form"
import {Search} from "../src/pages/Search"
import axios from "axios";

axios.defaults.baseURL = 'https://videogames-app-production-9403.up.railway.app'

const App = () =>  {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={LandingPage}></Route>
      <Route exact path="/home" component={Home} />
      <Route path="/detail/:id" component={Detalles} exact/>
      <Route path="/form" component={Form}/>
      <Route path="/search" component={Search}/>
    </Switch>
  </Router>
  );
}

export default App;
