import React, { PropTypes, Component } from 'react'


class Counter extends Component {

  render() {
    console.log(this.props.actions)
    return (

    <div>
      Some state changes:
      {this.props.value}
      <button onClick={() => this.props.actions.increase(1)}>Increase</button>
      <button onClick={() => this.props.actions.decrease(1)}>Decrease</button>
    </div>
    );
  }
}
export default Counter
