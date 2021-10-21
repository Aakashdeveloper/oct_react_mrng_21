import React,{Component, Fragment} from 'react';
import './Header.css';

class Header extends Component{
    constructor(){
        super()
        console.log("inside>>>>>>>>constructor")
        this.state={
            title:'React Search',
            keyword:'User Input Here'
        }
    }

    handleChange = (event) => {
        // console.log(event.target.value)
        console.log("inside>>>>>>>>handleChange")
        this.setState({keyword:event.target.value})
    }

    render(){
        console.log("inside>>>>>>>>render")
        return(
            <Fragment>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input onChange={this.handleChange}/>
                        <div style={{color:'white'}}>{this.state.keyword}</div>
                    </center>
                </header>
                <hr/>
            </Fragment>
        )
    }
}
export default Header;