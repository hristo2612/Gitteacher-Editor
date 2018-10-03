import React from "react";
import { Input } from "semantic-ui-react";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.timeout = null;
  }
  componentWillMount() {}

  handleChange(event, data) {
    clearInterval(this.timeout);
    this.timeout = setTimeout(() => {
      this.props.searchGithub(data.value)
    }, 879);
  }

  render() {
    return (
      <div>
        <Input style={{ width: '100%' }} list="siteList" autoComplete="on" placeholder="github.com/hristo2612/Gitteacher-Editor" onChange={this.handleChange} />
        <datalist id="siteList">
          <option value="github.com/" />
        </datalist>
      </div>
    );
  }
}
