import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Smit from './screen/Smit'
import Welfare from './screen/Welfare'
import ChairmenMessage from './screen/chairmenMessage'
import Medical from './screen/medical'
import Main from './screen/Main'
import Services from './screen/Services'
export default function MyRoute() {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route exact path="/chairmenmessage" component={ChairmenMessage} />
      <Route exact path="/Smit" component={Smit} />
      <Route exact path="/Welfare" component={Welfare} />
      <Route exact path="/medical" component={Medical} />
      <Route exact path="/Services" component={Services} />
    </Router>
  );
}
