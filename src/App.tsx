import React, { Component } from "react";
import Counter from "./counter/Counter";
import From from "./From";
import InputApplication from "./InputAppliaction";
import LoginPage from "./LoginPage/LoginPage";

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div>
          <button id="ClickMe" className="click-me">
            Click Me
          </button>
          <input type="text" placeholder="Name" className="name" />
        </div>
        <Counter />
        <From />

        <LoginPage />
      </>
    );
  }
}

export default App;
