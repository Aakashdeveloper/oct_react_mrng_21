import React,{Component} from 'react';
import axios from 'axios';
import BookingDisplay from './bookingDisplay';

const url = "http://localhost:7601/booking";
class Booking extends Component {
    constructor(){
        super()

        this.state={
            bookings:''
        }
    }
    render(){
        return(
            <>
                <BookingDisplay bookdata={this.state.bookings}/>
            </>
        )
    }

    // api calls 
    componentDidMount(){
        axios.get(url).then((res) => {this.setState({bookings:res.data})})
    }

}

export default Booking