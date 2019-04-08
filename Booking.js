import React, { Component } from 'react';

export class Booking extends Component{
    constructor(props){
        super(props);
    }

    render(){

        var output=<tr>
                    <td>{this.props.data["passenger Name"]}</td>
                    <td>{this.props.data["passenger Age"]}</td>
                    <td>{this.props.data["passenger Gender"]}</td>
                    <td>{this.props.data["seat Number"]}</td>
                    <td>{this.props.data["phone Number"]}</td>
                    </tr>
        return output;
    }
}

export default Booking;