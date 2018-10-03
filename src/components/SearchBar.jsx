import React from "react";
import { Input } from "semantic-ui-react";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {}

  handleChange(event, data) {
    this.props.searchGithub(data.value)
  }

  render() {
    return (
      <div>
        <Input list="languages" placeholder="Choose language..." onChange={this.handleChange} />
        <datalist id="languages">
          <option value="English" />
          <option value="Chinese" />
          <option value="Dutch" />
        </datalist>
      </div>
    );
  }
}
