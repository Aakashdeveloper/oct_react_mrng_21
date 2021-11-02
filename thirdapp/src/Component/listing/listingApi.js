import React, {Component} from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay';

const listingUrl = "https://developerfunnel.herokuapp.com/hotellist"

class Listing extends Component {
    constructor(){
        super()

        this.state={
            listing:''
        }
    }
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <h2>Filter Here</h2>
                    </div>
                    <div className="col-md-10">
                        <ListingDisplay listdata={this.state.listing}/>
                    </div>
                </div>
            </div>
        )
    }
    //api call 
    componentDidMount(){
        const hotelId = this.props.match.params.id;
        console.log(hotelId)
        axios.get(`${listingUrl}/${hotelId}`)
        .then((res) =>  {this.setState({listing:res.data})})

    }
}

export default Listing