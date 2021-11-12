import React,{Component} from 'react';
import axios from 'axios';
import UserDisplay from './UserDisplay';

const url = "https://developerjwt.herokuapp.com/api/auth/users";

class Users extends Component {
    constructor(){
        super()

        this.state={
            users:''
        }
    }
    render(){
        return(
            <>
                <UserDisplay usersData={this.state.users}/>
            </>
        )
    }

    // api calls 
    componentDidMount(){
        axios.get(url).then((res) => {this.setState({users:res.data})})
    }

}

export default Users