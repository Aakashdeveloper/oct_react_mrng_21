import React, {Component} from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay';
import RoomFilter from '../filters/roomFilter';
import CostFilter from '../filters/costFilter';

const listingUrl = "https://developerfunnel.herokuapp.com/hotellist"

class Listing extends Component {
    constructor(){
        super()

        this.state={
            listing:''
        }
    }

    setDataAsPerFilter=(sortedData) => {
        this.setState({listing:sortedData})
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <center><h2>Filters</h2></center>
                        <RoomFilter roomPerType={(data) => {this.setDataAsPerFilter(data)}}/>
                        <CostFilter roomPerCost={(data) => {this.setDataAsPerFilter(data)}}/>
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
        const tripId = this.props.match.params.id;
        console.log(tripId)
        sessionStorage.setItem('tripId',tripId)
        axios.get(`${listingUrl}/${tripId}`)
        .then((res) =>  {this.setState({listing:res.data})})

    }
}

export default Listing