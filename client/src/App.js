import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import List from './Home/List';
import Counter from './counter/components/counter';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers/rootReducer';

// const initialState = {
// 	count: 0
//   };
  
// function reducer(state = initialState, action) {
//   switch(action.type) {
//     case 'INCREMENT':
//       return {
//         count: state.count + 1
//       };
//     case 'DECREMENT':
//       return {
//         count: state.count - 1
//       };
//     default:
//       return state;
//   }
// }

const createStoreWithMiddleware = applyMiddleware()(createStore);

class App extends Component {
  render() {
    const App = () => (
        <Switch>
			<Route exact path='/' component={Home}/>
          <Route exact path='/counter' component={Counter}/>
          <Route path='/list' component={List}/>
        </Switch>
    )
    return (
      <Provider store={createStoreWithMiddleware(rootReducer)}>
        <App/>
      </Provider>
    );
  }
}

export default App;
