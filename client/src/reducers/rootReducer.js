import {combineReducers} from 'redux'
import { CounterReducer } from '../counter/reducers/counterReducers';

const rootReducer = combineReducers({
    counter: CounterReducer
})

export default rootReducer