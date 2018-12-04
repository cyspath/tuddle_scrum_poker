import { INCREMENT, DECREMENT } from '../actions/actionTypes'

const initialState = {
	count: 0
};

export const CounterReducer = (state = initialState, action) => {
	switch(action.type) {
		case INCREMENT:
		  return {
			count: state.count + 1
		  };
		case DECREMENT:
		  return {
			count: state.count - 1
		  };
		default:
		  return state;
	  }
};

// const INITIAL_DATA = []

// const TodoReducer = (state=INITIAL_DATA, action) => {
//     switch (action.type){
//         case ADD_TODO:
//         return [
//             ...state,{
//                 id: action.id,
//                 text: action.text,
//                 completed: false,
//             }
//         ]
//         case TOGGLE_TODO:
//         return state.map(todo =>
//         (todo.id === action.id)
//           ? {...todo, completed: !todo.completed}
//           : todo
//          )
//         case REMOVE_TODO:
//         const numIndex = parseInt(action.id)
//         return state.filter(todo => todo.id !== numIndex);
//         default:
//         return state
//     }
// }