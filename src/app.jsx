import React from "react";
import path from "path";
import SearchBar from "./components/SearchBar";

export default class App extends React.Component {
  componentWillMount() {
    console.log("Mounted");
  }

  render() {
    return (
      <div>
        <h2>Welcome to React!</h2>
        <a href={path.join(__dirname, "/someText.txt")} download={true}>
          Fuck Exe
        </a>
      </div>
    );
  }
}
