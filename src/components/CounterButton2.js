import React, { Component } from 'react';

class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  shouldComponentUpdate(nextProps,
                nextState) {
    if (this.state.count !== nextState.count) {
                                return true;
    }
  return false;
  }

  updateCount = () => {
    this.setState(state => {
      return { count: state.count + 1 }
    })
  }

  render() {
    return (
          <button id='counter' color={this.props.color} onClick={this.updateCount} className="f4 ba bw1 ph3 pv2 mb2 dib pa3 bw2 ma2 blue shadow-5 pointer">
            Count: {this.state.count}
          </button>
    );
  }
}


export default CounterButton;
