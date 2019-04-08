class TripBooking {
    constructor(a, b, c, d, e) {
        if (typeof a == 'undefined')
            this['passenger Name'] = "";
        else
            this['passenger Name'] = a;

        if (typeof b == 'undefined')
            this['passenger Age'] = 0;
        else
            this['passenger Age'] = b;

        if (typeof c == 'undefined')
            this['passenger Gender'] = " ";
        else
            this['passenger Gender'] = c;

        if (typeof d == 'undefined')
            this['seat Number'] = 0;
        else
            this['seat Number'] = d;

        if (typeof e == 'undefined')
            this['phone Number'] = " ";
        else
            this['phone Number'] = e;
    }
}

export default TripBooking;