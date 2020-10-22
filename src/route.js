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
import Donation from './screen/Donation';
import Dasterkhwan from './screen/dastarkhwan'
import RoPlant from './screen/RoPlant'
import incubation from './components/Incubation/incubationMain'
export default function MyRoute() {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route exact path="/dastarkhwan" component={Dasterkhwan} />
      <Route exact path="/media" component={Media} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/chairmenmessage" component={ChairmenMessage} />
      <Route exact path="/Smit" component={Smit} />
      <Route exact path="/Welfare" component={Welfare} />
      <Route exact path="/medical" component={Medical} />
      <Route exact path="/Services" component={Services} />
      <Route exact path="/Donation" component={Donation} />
      <Route exact path="/incubation" component={incubation} />
      <Route exact pat="/RoPlant" component={RoPlant} />
      
    </Router>
  );
}
