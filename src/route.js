import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Smit from './screen/Smit';
import Welfare from './screen/Welfare';
import ChairmenMessage from './screen/chairmenMessage'
import Medical from './screen/medical';
import Main from './screen/Main';
import Services from './screen/Services';
import Contact from './screen/contact';
import Media from './screen/media';
import Donation from './screen/Donation';
import incubation from './components/Incubation/incubationMain'
import Dasterkhwan from './screen/dastarkhwan';
import BookStoreScreen from './screen/BookStoreScreen'
import Istikhara from './screen/onlineIstikhara';
import ROplant from './screen/roplant';
import OnlineQu from './screen/OnlineQu';
import OnlineM from './components/OnlineM/OnlineM';
import BloodBank from './screen/bloodBank';
import JobBank from './screen/JobBankScreen';
export default function MyRoute() {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route exact path="/bloodbank" component={BloodBank} />
      <Route  path="/roplant" component={ROplant} />
      <Route  path="/istikhara" component={Istikhara} />  
      <Route  path="/dastarkhwan" component={Dasterkhwan} />
      <Route  path="/media" component={Media} />
      <Route  path="/contact" component={Contact} />
      <Route  path="/bookStore" component={BookStoreScreen} />
      <Route  path="/chairmenmessage" component={ChairmenMessage} />
      <Route  path="/Smit" component={Smit} />
      <Route  path="/Welfare" component={Welfare} />
      <Route  path="/medical" component={Medical} />
      <Route  path="/incubation" component={incubation} />
      <Route  path="/Services" component={Services} />
      <Route  path="/Donation" component={Donation} />
      <Route  path="/OnlineQ" component={OnlineQu} />
      <Route  path="/OnlineM" component={OnlineM} />
      <Route  path="/JobBank" component={JobBank} />
    </Router>
  );
}
