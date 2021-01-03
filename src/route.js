import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Smit from "./screen/Smit";
import Welfare from "./screen/Welfare";
import ChairmenMessage from "./screen/chairmenMessage";
import Medical from "./screen/medical";
import Main from "./screen/Main";
import Services from "./screen/Services";
import Contact from "./screen/contact";
import Media from "./screen/media";
import Donation from "./screen/Donation";
import incubation from "./components/Incubation/incubationMain";
import Dasterkhwan from "./screen/dastarkhwan";
import BookStoreScreen from "./screen/BookStoreScreen";
import Istikhara from "./screen/onlineIstikhara";
import ROplant from "./screen/roplant";
import OnlineQu from "./screen/OnlineQu";
import OnlineM from "./components/OnlineM/OnlineM";
import BloodBank from "./screen/bloodBank";
import JobBank from "./screen/JobBankScreen";
import QuranApp from "./components/QuranApp/QuranApp";
import News from "./screen/news";
import Admin from "./adminscreen/mainadminscreen";
import HomeAdmin from "./adminscreen/subadminscreen/adminhome";
import SMITAdmin from "./adminscreen/subadminscreen/adminsmit";
import ServicesAdmin from "./adminscreen/subadminscreen/adminservices";
import BloodBankAdmin from "./adminscreen/subadminscreen/adminbloodbank";
import ContactAdmin from "./adminscreen/subadminscreen/admincontact";
import ChairmenAdmin from "./adminscreen/subadminscreen/adminchairmenmessage";
import DasterkhwanAdmin from "./adminscreen/subadminscreen/admindasterkhwan";
import JobBankAdmin from "./adminscreen/subadminscreen/adminjobbank";
import MedicalAdmin from "./adminscreen/subadminscreen/adminmedical";
import MediaAdmin from "./adminscreen/subadminscreen/adminmedia";
import NEWSAdmin from "./adminscreen/subadminscreen/adminnews";
import OnlineIstikharaAdmin from "./adminscreen/subadminscreen/adminonlineistikhara";
import OnlineQuranAdmin from "./adminscreen/subadminscreen/adminonlinequran";
import ROPlantAdmin from "./adminscreen/subadminscreen/adminroplant";
import WelfareAdmin from "./adminscreen/subadminscreen/adminwelfare";
import Education from "./screen/education";
import UploadImage from "./screen/UploadImage";
import JobForm from "./screen/jobform";
import CourseRegistration from "./screen/courseregistration";
import OverView from "./screen/overview";
import SBIL from "./screen/sbil";

export default function MyRoute() {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route path="/news" component={News} />
      <Route path="/sbil" component={SBIL} />
      <Route path="/apply" component={CourseRegistration} />
      <Route path="/job" component={JobForm} />
      <Route path="/bloodbank" component={BloodBank} />
      <Route path="/roplant" component={ROplant} />
      <Route path="/istikhara" component={Istikhara} />
      <Route path="/dastarkhwan" component={Dasterkhwan} />
      <Route path="/media" component={Media} />
      <Route path="/contact" component={Contact} />
      <Route path="/bookStore" component={BookStoreScreen} />
      <Route path="/smit" component={Smit} />
      <Route path="/welfare" component={Welfare} />
      <Route path="/medical" component={Medical} />
      <Route path="/incubation" component={incubation} />
      <Route path="/projects" component={Services} />
      <Route path="/donation" component={Donation} />
      <Route path="/onlineQ" component={OnlineQu} />
      <Route path="/onlineM" component={OnlineM} />
      <Route path="/jobBank" component={JobBank} />
      <Route path="/education" component={Education} />
      <Route path="/admin" component={Admin} />
      <Route path="/quranApp" component={QuranApp} />
      <Route path="/adminHome" component={HomeAdmin} />
      <Route path="/adminsmit" component={SMITAdmin} />
      <Route path="/adminServices" component={ServicesAdmin} />
      <Route path="/adminbloodbank" component={BloodBankAdmin} />
      <Route path="/admincontact" component={ContactAdmin} />
      <Route path="/adminchairmenmessage" component={ChairmenAdmin} />
      <Route path="/admindasterkhwan" component={DasterkhwanAdmin} />
      <Route path="/adminjobbank" component={JobBankAdmin} />
      <Route path="/adminmedical" component={MedicalAdmin} />
      <Route path="/adminmedia" component={MediaAdmin} />
      <Route path="/adminnews" component={NEWSAdmin} />
      <Route path="/administikhara" component={OnlineIstikharaAdmin} />
      <Route path="/adminquran" component={OnlineQuranAdmin} />
      <Route path="/adminro" component={ROPlantAdmin} />
      <Route path="/adminwelfare" component={WelfareAdmin} />
      <Route path="/uploadImage" component={UploadImage} />
      <Route path="/overview" component={OverView} />
    </Router>
  );
}
