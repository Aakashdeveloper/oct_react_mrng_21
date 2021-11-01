import React, { Component } from 'react';
import QuickDisplay from './QuickDisplay';

const url = "https://developerfunnel.herokuapp.com/booking"

class QuickSearch extends Component {

    // 1
    constructor(){
        super()

        this.state={
            tripType:''
        }
    }

    // 2
    render(){
        return(
            <QuickDisplay tripData={this.state.tripType}/>
        )
    }

    // 3 api call 
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({tripType:data})
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export default QuickSearch

//176358 