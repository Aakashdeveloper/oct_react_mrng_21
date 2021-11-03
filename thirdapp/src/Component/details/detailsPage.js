import React,{Component} from 'react';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {Link} from 'react-router-dom';

const url = "https://developerfunnel.herokuapp.com/hotelsdetails"

class Details extends Component{
    constructor(props){
        super(props);

        this.state={
            details:'',
            rooms:[{},{},{}],
            tripId:sessionStorage.getItem('tripId')?sessionStorage.getItem('tripId'):1
        }
    }

    render(){
        // let details = this.state.details
        let {details} = this.state
        let {rooms} = this.state
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>{this.state.details.name}</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-12">
                                <img src={details.thumb} style={{height:400, width:1100}}/>
                            </div>
                            <div className="col-md-12">
                                <h3>
                                    <span className="label label-danger">
                                        {details.locality}
                                    </span>
                                </h3>
                                <h4>
                                    <span className="label label-info">
                                        {details.address}
                                    </span>
                                </h4>
                                <h4>
                                    <span className="label label-primary">
                                        Rs. {details.cost}
                                    </span>
                                </h4>
                            </div>
                        </div>
                        <hr/>
                        <Tabs>
                            <TabList>
                                <Tab>Details</Tab>
                                <Tab>Contact</Tab>
                                <Tab>Rooms</Tab>
                            </TabList>

                            <TabPanel>
                                <h2>{details.name}</h2>
                                <p>{details.name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                            </TabPanel>
                            <TabPanel>
                                <h2>{details.address}</h2>
                                <h2>9876543210</h2>
                            </TabPanel>
                            <TabPanel>
                                <h3>
                                    <span className="label label-warning">
                                        {rooms[0].name}
                                    </span>&nbsp;
                                    <span className="label label-success">
                                        {rooms[1].name}
                                    </span>&nbsp;
                                    <span className="label label-info">
                                        {rooms[2].name}
                                    </span>
                                </h3>
                            </TabPanel>
                        </Tabs>
                        <Link className="btn btn-danger" to={`/list/${this.state.tripId}`}>Back</Link> &nbsp;
                        <Link className="btn btn-success" to={`/booking/${details.name}`}>Proceed</Link>
                    </div>
                </div>
            </div>
        )
    }

    /// call api to get data of hotel 
    async componentDidMount(){
        let hotelId = this.props.match.params.id;
        let response = await axios.get(`${url}/${hotelId}`)
        console.log(response.data[0])
        this.setState({details: response.data[0],rooms:response.data[0].type})
    }

}

export default Details;