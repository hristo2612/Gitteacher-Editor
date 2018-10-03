import React from "react";
import { Container, Button, Divider } from "semantic-ui-react";
import SearchBar from "./components/SearchBar";
import OwnerCard from "./components/OwnerCard";
import RepositoryCard from './components/RepositoryCard';
import { getRepositoryStats } from "./endpoints";
import request from "request";
var Diff = require('react-diff');

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      repoUrl: "",
      avatarUrl: "https://react.semantic-ui.com/images/avatar/large/elliot.jpg",
      ownerName: "...",
      repoName: "...",
      disableCloneButton: true,
    };
    this.searchGithub = this.searchGithub.bind(this);
  }
  componentWillMount() {
    console.log("Mounted");
    getRepositoryStats("github.com/hristo2612/Gitteacher-Editor")
      .then(stats => {
        console.log(stats);
        this.setState({ avatarUrl: stats.owner.avatar_url, ownerName: stats.owner.login, repoName: stats.name });
      })
      .catch(err => {
        console.log(err);
      });
  }

  searchGithub(url) {
    getRepositoryStats(url)
    .then(stats => {
      console.log(stats);
      this.setState({ avatarUrl: stats.owner.avatar_url, ownerName: stats.owner.login, repoName: stats.name, disableCloneButton: false });
    })
    .catch(err => {
      this.setState({ disableCloneButton: true });
      console.log(err);
    });
  }

  render() {
    return (
      <div className="content">
        <h2>Gitteacher Editor!</h2>
        <p>Please enter your own repository url then hit GO.</p>
        <Button style={{ float: 'right', margin: '5px' }} disabled={this.state.disableCloneButton} color="teal">Clone</Button>
        <SearchBar searchGithub={this.searchGithub} />
        <div className="grid-container">
          <OwnerCard avatarUrl={this.state.avatarUrl} name={this.state.ownerName}  />
          <RepositoryCard name={this.state.repoName} />
        </div>
        <Divider />
        <Diff inputA="gogol" inputB="google" type="chars" />
      </div>
    );
  } 
}
