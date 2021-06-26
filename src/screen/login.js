// import React, { useState } from "react";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";

// function Login() {
//   const [emale, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   return (
//     <div className="backgroundLight">
//       <div
//         style={{ height: "100vh" }}
//         className="d-flex justify-content-center align-items-center"
//       >
//         <div
//           className="rounded shadow bg-white rounded p-4 py-5"
//           style={{ width: "350px" }}
//         >
//           <h3 className="pb-5">
//             <u> Admin Login</u>
//           </h3>
//           <form>
//             <div className="py-2">
//               <TextField
//                 id="outlined-basic"
//                 label="Email"
//                 variant="outlined"
//                 fullWidth={true}
//               />
//             </div>
//             <div className="py-2">
//               <TextField
//                 id="outlined-basic"
//                 label="Password"
//                 variant="outlined"
//                 fullWidth={true}
//               />
//             </div>
//             <div className="py-2">
//               <button className="btn btn-block backgroundDark text-white rounded-pill">
//                 login
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Login;





import React, { useState } from "react";
import AppInput from "../components/input";
import Button from "../components/button";
import Alerts from "../components/alerts";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router-dom";
import axios from 'axios';

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [passCheck, setPassCheck] = useState(false);
  const [alertTxt, setAlertTxt] = useState("");
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  function login(e) {
    e.preventDefault();
    let obj = {
      email,
      password,
    };
    console.log(obj);
    if (!email) {
      setAlertTxt('Email is Invalid!')
      setEmailCheck(true);
    }
    else if (!password) {
      setAlertTxt('Password is Invalid!')
      setEmailCheck(true);
    }
    else {
      setLoading(true)
      const obj = {
        email: email,
        pass: password
      }
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: obj,
        url: "https://swit-app.herokuapp.com/smit/smitRegauthUserLogin",
      };
      axios(options).
        then((res) => {
          setLoading(false);
          console.log(res.data, 'resres');
          if (res.data.success) {
            localStorage.setItem('login', res.data.token);
            localStorage.setItem('city', res.data.result[0].city);
            setAlertTxt('Login Successfully!')
            setEmailCheck(true);
            history.push("/admin")
          }
          else {
            localStorage.setItem('login', '');

            setAlertTxt('Invalid Credential!')
            setEmailCheck(true);
          }
          // setDonRes(res.data.result)
        })
        .catch((e) => {
          localStorage.setItem('login', '');
          setLoading(false);
          setAlertTxt('Invalid Credential!')
          setEmailCheck(true);
          console.log(e, "eee")
        })
    }

  }
  return (
    <div
      style={{ height: "100%", minHeight: "100vh" }}
      className="row p-0 m-0 backgroundLight"
    >
      <div
        style={{ borderRadius: "0% 9% 9% 0% / 10% 50% 50% 10% " }}
        className="col-md-6 backgroundDark shadow"
      >
        <div
          className="d-flex justify-content-center flex-column align-items-center text-white"
          style={{ height: "100%", width: "100%" }}
        >
          <h1>Saylani Donation Mobile App</h1>
          <h3>Admin Panel Login</h3>
        </div>
      </div>
      <div className="col-md-6">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100%", width: "100%" }}
        >
          <div className="loginDiv">
            {console.log(props)}
            <form onSubmit={(e) => login(e)}>
              <h2 className="py-2">login</h2>
              <AppInput
                onChange={(e) => { setEmail(e.target.value); setEmailCheck(false) }}
                otherClass="loginInput"
                placeholder="Email"
                type="email"
              />
              <AppInput
                onChange={(e) => { setPassword(e.target.value); setEmailCheck(false) }}
                otherClass="loginInput"
                placeholder="Password"
                type="password"
              />
              <div className="py-3 ml-5">
                {
                  loading ?
                    <Loader
                      type="Puff"
                      color="#00BFFF"
                      height={100}
                      width={100}
                      visible={true} //3 secs
                    />
                    :
                    <Button
                      style={{ width: "100%" }}
                      btnValue="login"
                      otherClass="btn-block"
                    />
                }
              </div>
            </form>

          </div>
          {
            emailCheck ?

              <Alerts texts={alertTxt} />
              : null
          }
        </div>
      </div>
    </div>
  );
}
export default Login;
