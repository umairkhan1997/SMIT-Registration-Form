import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './screen/home'
import Smit from './screen/Smit'
import Welfare from './screen/Welfare'
import ChairmenMessage from './screen/chairmenMessage'
import Medical from './screen/medical'
import Main from './screen/Main'
export default function MyRoute() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/Main" component={Main} />
      <Route exact path="/chairmenmessage" component={ChairmenMessage} />
      <Route exact path="/Smit" component={Smit} />
      <Route exact path="/Welfare" component={Welfare} />
      <Route exact path="/medical" component={Medical} />
    </Router>
  );
}
