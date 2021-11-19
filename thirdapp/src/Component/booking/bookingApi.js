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
        if(this.props.location.search){
            var qparams = this.props.location.search;
            if(qparams){
                var data={
                    "status":qparams.split('&')[0].split('=')[1],
                    "date":qparams.split('&')[2].split('=')[1],
                    "bank":qparams.split('&')[3].split('=')[1]
                }
                var id = qparams.split('&')[1].split('=')[1].split('_')[1];
                fetch(`${url}/${id}`,
                {
                    method:'PATCH',
                    headers:{
                        'accept': 'application/json',
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
            }
        }
        if(sessionStorage.getItem('userData')){
            let email = sessionStorage.getItem('userData').split(',')[1];
            axios.get(`${url}?email=${email}`).then((res) => {this.setState({bookings:res.data})})
        }
        
    }

}

export default Booking