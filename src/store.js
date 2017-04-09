import {createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

const initialState = {blue: 0, red:0, people: [] }

const reducer = ((state=initialState, action)=>{

  switch(action.type){
    case "INCREMENT_BLUE":
      state = Object.assign({}, state, { blue: state.blue + 1 });break;
    case "INCREMENT_RED":
      state = Object.assign({}, state, { red: state.red + 1 });break;
    case "LOAD_PEOPLE":
      state = Object.assign({}, state, { people: action.people });break;
    default:
      state;
  }
  return state;
})

const store = createStore(reducer,applyMiddleware(thunk));

const incrementBlue = () => store.dispatch({type: 'INCREMENT_BLUE'})
const incrementRed = () => store.dispatch({type: 'INCREMENT_RED'})

//store.subscribe(()=> console.log(store.getState()))
store.dispatch((dispatch)=>{
  axios.get('/api/people')
  .then(res => res.data)
  .then(people => dispatch({type: 'LOAD_PEOPLE', people }))
})
export {incrementBlue, incrementRed}
export default store;

