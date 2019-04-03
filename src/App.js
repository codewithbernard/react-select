import React, { Component } from "react";
import GlobalStyle from "./globalStyle";
import Select from "./components/Select";

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Select />
      </div>
    );
  }
}

export default App;
