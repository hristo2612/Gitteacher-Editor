import React from "react";
import { Container } from "semantic-ui-react";
import SearchBar from "./components/SearchBar";
import OwnerCard from "./components/OwnerCard";
import RepositoryCard from './components/RepositoryCard';
import { getRepositoryStats } from "./endpoints";
import request from "request";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      repoUrl: "",
      repoName: "",
      avatarUrl: "https://react.semantic-ui.com/images/avatar/large/elliot.jpg",
      ownerName: "",
      repositoryName: "...",
    };
    this.searchGithub = this.searchGithub.bind(this);
  }
  componentWillMount() {
    console.log("Mounted");
    getRepositoryStats("https://github.com/hristo2612/Random-Cat")
      .then(stats => {
        console.log(stats);
        this.setState({ avatarUrl: stats.owner.avatar_url, ownerName: stats.owner.login, repositoryName: stats.name });
      })
      .catch(err => {
        console.log(err);
      });
  }

  searchGithub(url) {
    getRepositoryStats(url)
    .then(stats => {
      console.log(stats);
      this.setState({ avatarUrl: stats.owner.avatar_url, ownerName: stats.owner.login });
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="grid-container">
        <h2>Gitteacher Editor!</h2>
        <p>Please enter your own repository url then hit GO.</p>
        <SearchBar searchGithub={this.searchGithub} />
        <OwnerCard avatarUrl={this.state.avatarUrl} name={this.state.ownerName}  />
        <RepositoryCard name={this.state.repositoryName} />
      </div>
    );
  }
}
