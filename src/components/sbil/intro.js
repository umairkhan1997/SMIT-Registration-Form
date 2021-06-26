// import React from "react";

// export default class Intro extends React.Component {
//   render() {
//     return (
//       <div id="sbilIntroTable">
//         <div className="backgroundLight py-5">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-6 p-3">
//                 <div className="py-5 px-4 bg-white shadow rounded introCard">
//                   <h2>Introduction</h2>
//                   <p className="color">
//                     Our Vision : Saylani will make Pakistan, the international
//                     hub of professional qualifications
//                   </p>
//                   <p className="color">
//                     Our Mission : Financial problems are no longer a hurdle in
//                     higher education. Saylani will Educate you, support you and
//                     make you shinning star of Pakistan.
//                   </p>
//                 </div>
//               </div>
//               <div className="col-md-6 p-3">
//                 <iframe
//                   className="video"
//                   width="100%"
//                   src="https://www.youtube.com/embed/xQbzeGOiFuU"
//                   frameborder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowfullscreen="allowfullscreen"
//                 ></iframe>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }


import React from "react";

export default class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        id="smitIntro"
        style={{ backgroundColor: "#f5f8ff" }}
        className=""
      >
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 p-2">
              <div className="py-4 px-4 bg-white shadow rounded introCard">
                <h3 className="color"><b><u>INTRODUCTION</u></b></h3>
                <p className="color mt-4 text-muted font-weight-bold">
                  <span className="color">Our Vision</span> : Saylani will make Pakistan, the international
                     hub of professional qualifications </p>
                <p className="color mt-4 text-muted font-weight-bold">
                  <span className="color">Our Mission</span> : Financial problems are no longer a hurdle in
                  higher education. Saylani will Educate you, support you and
                  make you shinning star of Pakistan.
                </p>
              </div>
            </div>
            <div className="col-md-6 p-2">
              <iframe
                className="video"
                width="100%"
                src="https://www.youtube.com/embed/El6Ed7l-WeQ"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="allowfullscreen"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}