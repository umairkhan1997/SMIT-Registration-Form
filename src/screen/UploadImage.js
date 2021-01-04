// import React, { useState } from "react";

// export default function Upload() {
//     const [fileInputState, setFileInputState] = useState("");
//     const [previewSource, setPreviewSource] = useState([]);
//     const [selectedFile, setSelectedFile] = useState();
//     const [successMsg, setSuccessMsg] = useState("");
//     const [errMsg, setErrMsg] = useState("");

//     const handleFileInputChange = (e) => {
//         console.log("sadsdsd one", e.target.files);
//         const file = e.target.files;
//         previewFile(file);
//         setSelectedFile(file);
//         setFileInputState(e.target.value);
//         //handleSubmitFile(e);
//     };

//     const previewFile = async (file) => {
//         console.log("sadsdsd two", file);
//         const reader = new FileReader();
//         for (var i = 0; i < file.length; i++) {
//             function async() {
//                 const pic = await reader.readAsDataURL(file[i]);
//                 console.log(pic, 'picpicpic')
//             }
//             // pic.onloadend = () => {
//             //     // setPreviewSource(reader.result);
//             //     setPreviewSource([...previewSource, pic.result]);
//             // };
//         }
//     };

//     const handleSubmitFile = (e) => {
//         //     console.log("sadsdsd three", selectedFile);
//         //     e.preventDefault();
//         //     if (!selectedFile) return;
//         //     const reader = new FileReader();
//         //     reader.readAsDataURL(selectedFile);
//         //     reader.onloadend = () => {
//         //         uploadImage(reader.result);
//         //     };
//         //     reader.onerror = () => {
//         //         console.error("AHHHHHHHH!!");
//         //         setErrMsg("something went wrong!");
//         //     };

//     };

//     // const uploadImage = async (base64EncodedImage) => {
//     //     console.log("sadsdsd", base64EncodedImage);
//     //     try {
//     //         await fetch("http://localhost:3000/Books/BooksAllAdd", {
//     //             method: "POST",
//     //             body: JSON.stringify({
//     //                 // imgRoPlant: base64EncodedImage,
//     //                 // id: "5fb2560596fa6f033440e338",
//     //                 // logo: base64EncodedImage,
//     //                 // catName: "Al Quran-ul-Kareem",
//     //                 // publisher: "Dawateislami",
//     //                 bookName: "12 Mah K Orad-O-Wazaif",
//     //                 bookImgUrl: "https://res.cloudinary.com/dp8ybac11/image/upload/v1606286658/2019-11-101570779972_tsc9ge.jpg",
//     //                 bookLang: "urdu",
//     //                 bookAuthor: "Hazrat Basheer Farooqui",
//     //                 bookPublisher: "12-Mah-K-Orad-O-Wazaif",
//     //                 bookDnldUrl: "https://www.saylaniwelfare.com/download/12%20Mah%20K%20Orad-O-Wazaif.pdf",
//     //             }),
//     //             headers: { "Content-Type": "application/json" },
//     //         });
//     //         setFileInputState("");
//     //         setPreviewSource("");
//     //         setSuccessMsg("Image uploaded successfully");
//     //     } catch (err) {
//     //         console.error(err);
//     //         setErrMsg("Something went wrong!");
//     //     }
//     // };
//     return (
//         <div>
//             <h1 className="title">Upload an Image</h1>
//             {/* <Alert msg={errMsg} type="danger" />
//             <Alert msg={successMsg} type="success" /> */}
//             {/* <form
//         //    onSubmit={handleSubmitFile}
//         className="form"
//       > */}
//             <input
//                 id="fileInput"
//                 type="file"
//                 name="image"
//                 onChange={handleFileInputChange}
//                 multiple
//                 value={fileInputState}
//                 className="form-input"
//             />
//             <button className="btn" onClick={handleSubmitFile}>
//                 Submit
//       </button>
//             {/* </form> */}
//             {previewSource.length != 0 && (
//                 <img src={previewSource[0]} alt="chosen" style={{ height: "300px" }} />
//             )}
//         </div>
//     );
// }


import React, { Component } from 'react';
import axios from 'axios';

export default class FilesUploadComponent extends Component {

    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onPdfChange = this.onPdfChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            imgCollection: '',
            pdfCollection: '',
            imgPdf: []
        }
    }

    onFileChange(e) {

        this.setState({ imgCollection: e.target.files })
    }
    onPdfChange(e) {
        this.setState({ pdfCollection: e.target.files })
    }
    ////SAYLANI EVENTS FUNCTION 
    // onSubmit(e) {
    //     e.preventDefault()

    //     var formData = new FormData();
    //     for (const key of Object.keys(this.state.imgCollection)) {
    //         formData.append('imgCollection', this.state.imgCollection[key])
    //     }
    //     formData.append('eventName', 'event Awesome',)
    //     formData.append('eventDet', 'event Awesome is awesome')
    //     console.log(this.state.imgCollection)
    //     axios.post("http://localhost:3000/smit/SmitEventadd", formData, {
    //     }).then(res => {
    //         console.log(res)
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }

    //SAYLANI NEWS METHOD
    // onSubmit(e) {
    //     e.preventDefault()

    //     var formData = new FormData();
    //     for (const key of Object.keys(this.state.imgCollection)) {
    //         formData.append('imgCollection', this.state.imgCollection[key])
    //     }
    //     formData.append('name', 'News One',)
    //     formData.append('description', 'News One Description ')
    //     formData.append('newsdate', '11-12-2020')
    //     console.log(this.state.imgCollection)
    //     axios.post("http://localhost:3000/news/SaylaniNewsAdd", formData, {
    //     }).then(res => {
    //         console.log(res)
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }

    // onSubmit = async (e) => {
    //     e.preventDefault()
    //     let arr = [];
    //     arr.push(this.state.imgCollection);
    //     arr.push(this.state.pdfCollection);
    //     var formData = new FormData();
    //     console.log(arr, 'arrr')
    //     for (const key of Object.keys(arr)) {
    //         console.log(arr[key][0])
    //         formData.append('imgCollection', arr[key][0])
    //     }
    //     // for (const key of Object.keys(this.state.pdfCollection)) {
    //     //     formData.append('bookDnldUrl', this.state.pdfCollection[key])
    //     // }
    //     console.log('arrr two')
    //     formData.append('bookName', 'Adab-E-Maiyat')
    //     formData.append('bookLang', 'Urdu')
    //     formData.append('bookAuthor', 'Hazrat Basheer Farooqui')
    //     formData.append('bookPublisher', 'Azad Publisher')
    //     formData.append('bookDnldUrl', 'Azad Publisher')
    //     // console.log(formData)
    //     axios.post("http://localhost:3000/Books/BookSpecialAdd", formData, {
    //     }).then(res => {
    //         console.log(res)
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }



    //SAYLANI NOTIFICATION METHOD
    onSubmit(e) {
        e.preventDefault()

        var formData = new FormData();
        for (const key of Object.keys(this.state.imgCollection)) {
            formData.append('imgCollection', this.state.imgCollection[key])
        }
        formData.append('cityName', 'Islamabad',)
        formData.append('courseName', 'Web and Mobile ')
        formData.append('batchName', 'Batch 7');
        formData.append('viewForm', false);
        console.log(this.state.imgCollection)
        axios.post("http://localhost:3000/smit/SaylaniNotificationAdd", formData, {
        }).then(res => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="file"
                                //  accept="image/*"
                                name="imgCollection" onChange={this.onFileChange} multiple />
                            <input type="file"
                                accept="application/pdf"
                                name="pdfCollection" onChange={this.onPdfChange} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}