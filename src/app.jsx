import React from 'react';

export default class App extends React.Component {

  componentWillMount() {
    console.log('Mounted');
  }

  render() {
    return (<div>
      <h2>Welcome to React!</h2>
    </div>);
  }
}
