import React,{Component} from 'react';
import axios from 'axios';

const url = "https://developerfunnel.herokuapp.com/hotelsdetails"

class Details extends Component{
    constructor(props){
        super(props);

        this.state={
            details:''
        }
    }

    render(){
        return(
            <h1>Details</h1>
        )
    }

    /// call api to get data of hotel 
    async componentDidMount(){
        let hotelId = this.props.match.params.id;
        let response = await axios.get(`${url}/${hotelId}`)
        this.setState({details: response.data})
    }

}

export default Details;