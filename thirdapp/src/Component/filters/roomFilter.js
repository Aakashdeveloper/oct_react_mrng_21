import React,{Component} from 'react';
import axios from 'axios';

const url = "https://developerfunnel.herokuapp.com/hotellist"

class RoomFilter extends Component{

    filterRoom = (event) => {
        let tripId = sessionStorage.getItem('tripId')
        let roomId = event.target.value;
        let roomUrl;
        if(roomId == ""){
            roomUrl = `${url}/${tripId}`
        }else{
            roomUrl = `${url}/${tripId}?roomtype=${roomId}`
        }
        axios.get(roomUrl)
        .then((res) => {this.props.roomPerType(res.data)})
    }

    render(){
        return(
            <>
                <center><h3>RoomFilter</h3></center>
                <div onChange={this.filterRoom}>
                    <label className="radio">
                        <input type="radio" value="" name="room"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1" name="room"/>Deluxe Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="2" name="room"/>Premiere Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="3" name="room"/>Travel Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="4" name="room"/>Semi Deluxe Room
                    </label>
                </div>
            </>
        )
    }
}

export default RoomFilter;