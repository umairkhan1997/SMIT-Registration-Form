import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
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
