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
        if(!sessionStorage.getItem('userData')){
            return(
                <div>
                    <h1>Login First To See Your Booking</h1>
                </div>
            )
        }
        return(
            <>
                <BookingDisplay bookdata={this.state.bookings}/>
            </>
        )
    }

    // api calls 
    componentDidMount(){
        if(sessionStorage.getItem('userData')){
            let email = sessionStorage.getItem('userData').split(',')[1];
            axios.get(`${url}?email=${email}`).then((res) => {this.setState({bookings:res.data})})
        }
        
    }

}

export default Booking