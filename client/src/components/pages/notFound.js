import React, { Component } from 'react';

class NotFound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>No routes matched</h1>
      </div>
    );
  }
}

export default NotFound;
