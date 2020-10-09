import React from "react";
import '../App.css';
import Footer from '../components/Footer'
import HomeAbout from '../components/Home/HomeAbout'
import HomeHeader from '../components/Home/HomeHeader';
import HomeNews from '../components/Home/HomeNews'
import HomeContact from '../components/Home/HomeContact'


export default class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
        return (
            <div>
<HomeHeader />
<HomeAbout />
<HomeNews />
<HomeContact />
<Footer />
            </div>
            );
        }
        }
        