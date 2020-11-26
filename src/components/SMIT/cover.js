import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./SmitStyle.css";
import cover from "../../images/itback.png";


export default class Cover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div style={{ backgroundImage: `url(${cover})` }} className='back p-5'>
                    <div className='container py-5'>
                        <div className='my-5 shadow'>
                            <h1 style={{ fontSize: '4em' }}>Dummy Cover Text</h1>
                            <button className='prevbtn'>Apply</button>
                        </div>
                    </div>
                </div>
            </div>)
    }
}