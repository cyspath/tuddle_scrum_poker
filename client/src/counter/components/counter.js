import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { increment, decrement } from '../actions/counterActions';


class Counter extends React.Component {
//   increment = () => {
//     this.props.dispatch({ type: 'INCREMENT' });
//   }

//   decrement = () => {
//     this.props.dispatch({ type: 'DECREMENT' });
//   }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={() => this.props.decrement(this.count)}>-</button>
          <span>{this.props.count}</span>
          <button onClick={() => this.props.increment(this.count)}>+</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {	
	return {
		count: state.counter.count
	};
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
		increment,
		decrement
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);