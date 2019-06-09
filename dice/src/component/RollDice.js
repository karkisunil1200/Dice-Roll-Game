import React, {Component} from 'react';
import Dice from './Dice';

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice1: 'one',
      dice2: 'two'
    };
  }
  render() {
    return (
      <>
        <div className='rollDice'>
          <Dice face={this.state.dice1} />
          <Dice face={this.state.dice2} />
        </div>
        <button className='btn btn-primary btn-lg' onClick={this.roll}>
          Roll Dice!
        </button>
      </>
    );
  }
}

export default RollDice;
