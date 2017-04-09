import React, {Component} from 'react';
import store from './store';

class People extends Component{
  constructor(){
    super()
    this.state = store.getState();
  }

  componentDidMount(){
    this.unsubscribe = store.subscribe(()=>this.setState(store.getState()))
  }
  componentWillUnmount(){
    this.unsubscribe();
  }

  render(){
    const { people } = this.state;
    return(
      <div>
        { people.map(person=> <ul key={person.id}>{person.id} {'.'} {person.name}</ul>) }
      </div>
    )
  }


}

export default People;
