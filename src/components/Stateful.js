import React, { Component } from 'react';


class Stateful extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hello: 'hola Mundo'
        }
    }
    render(){
        return(
            <h1> {this.state.hello} </h1>
        )
    }
};

export default Stateful;