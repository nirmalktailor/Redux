import React, { Component } from 'react';

class Results extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }
  render() {
    return (
      <div>
        <header><strong>Result for Application State</strong></header><hr />
        <span className="label label-danger">Angular: {this.store.getState().angular}</span><br />
        <span className="label label-danger">React: {this.store.getState().react}</span><br />
        <span className="label label-danger">Vue: {this.store.getState().vue}</span><br />
      </div>
    )
  }
}

export default Results;