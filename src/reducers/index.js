import { combineReducers } from 'redux'
import catsReducer from './cats_reducer'

const rootReducer = combineReducers({
  loading: false,
  pictures: catsReducer
})

export default rootReducer;
