import React, { Component } from 'react';

class Heading extends Component{
    constructor(props){
        super(props);

    }

    render(){
        var output=<h1>{this.props.title}</h1>
        return output;
    }
}

export default Heading;
