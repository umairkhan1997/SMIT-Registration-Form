import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyRoute from "./route";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/lib/integration/react";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <MyRoute />
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
