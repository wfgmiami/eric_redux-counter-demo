import React, { Component } from 'react';
import Nav from './Nav';
import store from './store';
import PropTypes from 'prop-types';

class App extends Component{
  constructor(props){
    super();
    this.state = store.getState();
    //this.incrementer = this.incrementer.bind(this);
  }

  // incrementer(){
  //   this.setState( { counter: this.state.counter + 1 })
  // }

  render(){
    //const obj = Object.assign({}, this.state, { increment: this.incrementer })

    return(
      <div className="container">
        <Nav />
        {/*{ this.props.children && React.cloneElement(this.props.children, obj)}*/}
          {this.props.children}
      </div>
    )
  }
}


export default App;
