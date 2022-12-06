import React, { Component } from "react";
import "./App.css";
// import ModalComponent from "./component/ModalComponent";
import MyModal from "./component/MyModal";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyModal />
      </div>
    );
  }
}

export default App;
