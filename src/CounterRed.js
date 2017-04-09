import React, { Component } from 'react';
import store, { incrementRed } from './store';


/*const CounterRed = (props)=> (
  <div>
    <button className="btn btn-danger" onClick={props.increment}>{ props.counter} </button>
  </div>
)*/

class CounterRed extends Component{
  constructor(){
    super();
    this.state = { count: store.getState().red };
  }

  componentDidMount(){
    this.unsubscribe = store.subscribe(()=>this.setState( { count: store.getState().red }))
    //this.setState({ count: store.getState().red })
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  render(){
    return(
      <div>
        <button className="btn btn-danger" onClick = { incrementRed }>{ this.state.count }</button>
      </div>
    )
  }
}

export default CounterRed;
