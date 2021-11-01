import React, {Component} from 'react';
import axios from 'axios'

const listingUrl = " https://developerfunnel.herokuapp.com/hotellist/1"

class Listing extends Component {
    render() {
        return(
            <h1>Listing</h1>
        )
    }
    //api call 
    componentDidMount(){
        const hotelId = this.props.match.params.id;
        console.log(hotelId)

    }
}

export default Listing