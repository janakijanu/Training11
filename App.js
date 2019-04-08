import React, { Component } from 'react';

import Booking from './Booking.js';
import Heading from './Heading.js';
import CopyRight from './CopyRight.js';
import tripBookings from './BookingGenerator.js';


class App extends Component{

    constructor(){
        super();
        this.state={
            "appTitle":"Ticket Resevation System Version 1.0",
            "appData" : tripBookings,
            "appFooter": "Copy Right @ Parveen Travels, Chennai"
        }
    }

    render(){
       var rowElements=this.state.appData.map(
            function(bookingData, idx){
                return <Booking data={bookingData}></Booking>
            }
       );
       var styleJSon={
            backgroundColor:'lightgrey',
            border:'Solid',
            width: "20cm",
            height:"15cm"
        }
        var output=<div>
                    <Heading title={this.state.appTitle}/>
                    <div>
                        <table style={styleJSon}>
                        <tbody>
                              {rowElements}
                        </tbody>
                        </table>
                    </div>
                    <CopyRight message={this.state.appFooter}/>
                    </div>
        return output;
    }

}

export default App;

//ReactDOM.render(<App/>, document.getElementById("rootUI"));