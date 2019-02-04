import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class RawProduct extends Component{

  render() {
    return(
      <div>
        <p>
          <img src={require("./static/data/products/".concat(this.props.each.sku).concat("_2.jpg"))}/>
          <br />
          {this.props.each.title}
          <br />
          {this.props.each.price}

        </p>
        
      </div>
    );
  }
}


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: []
    };
  }
  render() {
    return (
      <div>
        {this.state.data.map(prod => <RawProduct each={prod} />)}
      </div>
    );
  }
  componentDidMount() {
    import('./products.json').then(json =>  this.setState({data: json.products}) );
  }
}


export default App;
