import React,{Component} from 'react';
import axios from 'axios';

const url = "https://developerfunnel.herokuapp.com/hotellist"

class CostFilter extends Component{

    filterCost = (event) => {
        let tripId = sessionStorage.getItem('tripId')
        let cost = (event.target.value).split('-');
        let lcost = cost[0];
        let hcost = cost[1];
        let costUrl;
        if(event.target.value == ""){
            costUrl = `${url}/${tripId}`
        }else{
            costUrl = `${url}/${tripId}?hcost=${hcost}&lcost=${lcost}`
        }
        axios.get(costUrl)
        .then((res) => {this.props.roomPerCost(res.data)})
    }

    render(){
        return(
            <>
                <center><h3>CostFilter</h3></center>
                <div onChange={this.filterCost}>
                    <label className="radio">
                        <input type="radio" value="" name="room"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1000-3000" name="room"/>1000-3000
                    </label>
                    <label className="radio">
                        <input type="radio" value="3001-6000" name="room"/>3001-6000
                    </label>
                    <label className="radio">
                        <input type="radio" value="6001-9000" name="room"/>6001-9000
                    </label>
                    <label className="radio">
                        <input type="radio" value="9001-15000" name="room"/>9001-15000
                    </label>
                </div>
            </>
        )
    }
}

export default CostFilter;