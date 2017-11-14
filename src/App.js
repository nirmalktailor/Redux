import React, { Component } from 'react';
import { voteAngular , voteReact , voteVuejs ,addTodo } from './actions';
import { alert, buttons, jumbotron } from 'bootstrap-css'

class App extends Component {

  constructor(props){
    super(props);
    this.store = this.props.store;
  }

  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
  }
  handleVoteReact = () => {
    this.store.dispatch(voteReact());
  }
  handleVoteVuejs = () => {
    this.store.dispatch(voteVuejs());
  }
  handleAddTodo = () => {
    this.store.dispatch(addTodo());
    console.log(this.store);
  }

  render() {

    let listStyle = {
      textAlign : 'left',
      cursor : 'pointer'
    }

    return (
      <div>
        <div className="jumbotron" style={{'textAlign': 'center'}}>
          <h2>What is your favorite front-end development framework 2017?</h2>
          <h4>Click on the logos below to vote!</h4>
          <br />
          <div className="row">
            <ul style = {listStyle}>
              <li onClick={this.handleVoteAngular}>Angular</li>
              <li onClick={this.handleVoteReact}>React</li>
              <li onClick={this.handleVoteVuejs}>Vue</li>
            </ul>
          </div>
        </div>
        <div className="jumbotron" style={{'textAlign': 'center'}}>
          <h2>To Do Application</h2>
          <br />
          <div className="row">
            <ul style = {listStyle}>
              <li onClick={this.handleAddTodo}><strong>Add ToDo</strong></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
