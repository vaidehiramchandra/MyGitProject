import React, { Component } from 'react';

class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color:'red',
            count: 0
        }
    }
    
    handleColorChange=()=>{
        this.setState({
            color:"green"
        })
    }

    handleIncreament=()=>{
        this.setState({
            count: this.state.count + 1
        })
    }
  
    handleDecreament=()=>{
        this.setState({
            count: this.state.count - 1
        })
    }
    render() {
        return (
            <div>
                <h3>We learn state</h3>
                <h4>Color: {this.state.color}</h4>
                <button onClick={this.handleColorChange}>Change Color</button>
               <h4>Count :{this.state.count}</h4>
               <button onClick={this.handleIncreament}>Increament</button>
               <button onClick={this.handleDecreament}>Decreament</button>
           
            </div>
        );
    }
}

export default State;