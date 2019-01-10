import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class ProductTitle extends Component{
  render() {
    const title = this.props.PRODUCTS.title;
    return(
      <div>
        
      </div>
    );
  }
}


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: null,
    };
  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
  componentDidMount() {
    import('./products.json').then(json =>  this.props.PRODUCTS );
  }
}

const PRODUCTS = [

];


export default App;
