import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./SmitStyle.css";
import Gallery from "react-grid-gallery";

export default class SmitEvents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const displayimages = [
            {
                src:
                    "https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2Fimg-1.jpg?alt=media&token=93d7ebcf-d564-438f-871e-1c4fb6b79702",
                thumbnail:
                    "https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2Fimg-1.jpg?alt=media&token=93d7ebcf-d564-438f-871e-1c4fb6b79702",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                caption: "Basheer Farooqui Meet With GOVT Officer",
            },
            {
                src:
                    "https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2Fimg-5.jpg?alt=media&token=24948ded-1752-4d7d-b14e-ae3e28e98e2d",
                thumbnail:
                    "https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2Fimg-5.jpg?alt=media&token=24948ded-1752-4d7d-b14e-ae3e28e98e2d",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                caption: "Basheer Farooqui Meet With GOVT Officer",
            },
            {
                src:
                    "https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2Fimg-2.jpg?alt=media&token=12315048-2790-4f85-831f-4721a04b6600",
                thumbnail:
                    "https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2Fimg-2.jpg?alt=media&token=12315048-2790-4f85-831f-4721a04b6600",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                caption: "Basheer Farooqui Meet With GOVT Officer",
            },
            {
                src:
                    "https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2Fimg-5.jpg?alt=media&token=24948ded-1752-4d7d-b14e-ae3e28e98e2d",
                thumbnail:
                    "https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2Fimg-5.jpg?alt=media&token=24948ded-1752-4d7d-b14e-ae3e28e98e2d",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                caption: "Basheer Farooqui Meet With GOVT Officer",
            },
        ];
        return (
            <div>
                <div className='bg-light'>
                    <div className='container py-5'>
                        <div className='displayHeading'>
                            <h1 style={{color:'#0569b4'}}>SMIT Events</ h1>
                        </div>
                        <div className='py-4'>
                            <Gallery style={{ display: 'block' }} images={displayimages} />
                            <h3 className='text-m uted'>CCNA Entry Test</h3>
                        </div>
                        <div className='py-4'>
                            <Gallery style={{ display: 'block' }} images={displayimages} />
                            <h3 className='text-m uted'>Hocky Ground Entry Test Web and Mobile</h3>
                        </div>
                        <div className='py-4'>
                            <Gallery style={{ display: 'block' }} images={displayimages} />
                            <h3 className='text-m uted'>Graphic Designing Entry Test</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}