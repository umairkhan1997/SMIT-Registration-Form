import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Smit from './screen/Smit'
import Welfare from './screen/Welfare'
import ChairmenMessage from './screen/chairmenMessage'
import Medical from './screen/medical'
import Main from './screen/Main'
import Services from './screen/Services';
import Contact from './screen/contact';
import Media from './screen/media';
import Donate from './screen/donate'
export default function MyRoute() {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route path="/donate" component={Donate} />
      <Route path="/media" component={Media} />
      <Route path="/chairmenmessage" component={ChairmenMessage} />
      <Route path="/contact" component={Contact} />
      <Route path="/Smit" component={Smit} />
      <Route path="/Welfare" component={Welfare} />
      <Route path="/medical" component={Medical} />
      <Route path="/Services" component={Services} />
    </Router>
  );
}
