import React, {Component} from 'react';
import {Link} from 'react-router-dom'

const url = "https://developerjwt.herokuapp.com/api/auth/userinfo";
class Profile extends Component {
    constructor(){
        super()

        this.state={
            user:''
        }
    }

    conditionalRender = () => {
        if(this.state.user.role){
            if(this.state.user.role == 'Admin'){
                return(
                    <Link className="btn btn-primary" to="/user">
                        Users
                    </Link>
                )
            }
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('ltk');
        this.props.history.push('/')
    }

    render(){
        let {user} = this.state
        if(sessionStorage.getItem('ltk') === null){
            this.props.history.push('/')
        }
        sessionStorage.setItem('rtk',user.role)
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>Profile</h3>
                    </div>
                    <div className="panel-body">
                        <h1>Hi {user.name}</h1>
                        <h2>Your Email id is {user.email}</h2>
                        <h2>Your Phone is {user.phone}</h2>
                        <h2>Your Role is {user.role}</h2>
                        {this.conditionalRender()} &nbsp;
                        <button  class="btn btn-danger" onClick={this.handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        )
    }

    //get userinfo
    componentDidMount(){
        fetch(url,{
            method: 'GET',
            headers: { 
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({user:data})
        })
    }
}

export default Profile