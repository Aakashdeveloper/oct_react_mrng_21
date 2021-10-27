import React, { Component } from 'react';
import './Search.css'

class Search extends Component {
    render(){
        return(
            <div id="search">
                <div id="header">
                    <div id="brand">
                        Developer Funnel
                    </div>
                    <div class="social">
                        <a href="https://www.facebook.com/">
                            <img src="images/facebook.png" class="socialIcon"/>
                        </a>
                        <a href="https://www.instagram.com/">
                            <img src="images/insta.png" class="socialIcon"/>
                        </a>
                    </div>
                </div>
                <hr/>
                <div id="logo">
                    <span>D!</span>
                </div>
                <div id="heading">
                    Find The Best Place To Enjoy
                </div>
                <div id="dropdown">
                <select>
                    <option>------SELECT CITY----</option>
                </select> 
                <select id="secondSelect">
                    <option>------SELECT HOTELS----</option>
                </select> 
                </div>
            </div>
        )
    }
}

export default Search