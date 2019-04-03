import React, { Component } from "react";
import GlobalStyle from "./globalStyle";
import Select from "./components/Select";

const options = [
  { id: 1, label: "One" },
  { id: 2, label: "Two" },
  { id: 3, label: "Three" }
];

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Select options={options} />
      </div>
    );
  }
}

export default App;
