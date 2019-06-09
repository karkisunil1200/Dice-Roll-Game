import React, {Component} from 'react';
import Dice from './Dice';

class RollDice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  };
  constructor(props) {
    super(props);
    this.state = {
      dice1: 'one',
      dice2: 'two'
    };
  }

  roll = event => {
    const newDice1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const newDice2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    this.setState({
      dice1: newDice1,
      dice2: newDice2
    });
  };

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
