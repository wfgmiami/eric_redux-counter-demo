import React, {Component} from 'react';
import { Link } from 'react-router';
import store from './store';


class Nav extends Component{
  constructor(){
    super();
    this.state = store.getState();
  }

componentDidMount(){

  this.unsubscribe = store.subscribe(()=> this.setState(store.getState()))
}

componentWillUnmount(){
  this.unsubscribe();
}

  render(){
    const { red } = this.state;
    const { blue } = this.state;
    const { people } = this.state;

    return(
       <ul className="nav nav-tabs">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blue">Blue ({blue})</Link></li>
        <li><Link to="/red">Red ({red})</Link></li>
        <li><Link to="/people">People ({people.length})</Link></li>
      </ul>
    )
  }

}




export default Nav;
