import React, { Component } from 'react';

class CopyRight extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        var output=<h3><i>{this.props.message}</i></h3>
        return output;
    }

}
export default CopyRight;