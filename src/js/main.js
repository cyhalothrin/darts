import React from 'react';
import ReactDOM from 'react-dom';
import Dartboard from './Dartboard';
import global from '../css/global.css';

class DartsApp extends React.Component {
  constructor() {
    super();
    this.state = {
      stepsCount: 0,
      player1Steps: [],
      player2Steps: [],
    };
  }
  addStep(point) {
    let stepsCount = this.state.stepsCount;
    const player1Steps = [...this.state.player1Steps];
    const player2Steps = [...this.state.player2Steps];
    if (stepsCount < 3) {
      player1Steps.push(point);
      stepsCount++;
    } else {
      player2Steps.push(point);
      stepsCount = stepsCount === 5 ? 0 : stepsCount + 1;
    }

    this.setState({
      stepsCount: stepsCount,
      player1Steps: player1Steps,
      player2Steps: player2Steps,
    });
  }
  removeLastStep() {

  }
  render() {
    let value = this.state.value;
    const player1Point = this.state.player1Steps.reduce((sum, point) => sum + point, 0);
    const player2Point = this.state.player2Steps.reduce((sum, point) => sum + point, 0);

    return (<div>
        <button onClick={this.addStep.bind(this, 10)}>+</button>
        <div>{this.state.player1Steps}</div>
        <div>{this.state.player2Steps}</div>
        <div>{player1Point} / {player2Point}</div>
        <Dartboard add={this.addStep.bind(this)} />
      </div>);
  }
}

window.React = React;

ReactDOM.render(<DartsApp />, document.getElementById('root'));
