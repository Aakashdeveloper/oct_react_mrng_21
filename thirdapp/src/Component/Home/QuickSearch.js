import React, { Component } from 'react';
import './QuickSearch.css'

class QuickSearch extends Component {
    render(){
        return(
            <div id="quickSearch">
                <span id="QuickSearchHeading">
                    Quick Searches
                </span>
                <span id="QuickSearchSubHeading">
                    Discover Hotels By Type
                </span>
                <div id="mainTileContainer">
                    <div class="tileContainer">
                        <div class="tileComponent1">
                            <img src="https://i.ibb.co/HBc81qR/luxury.jpg"/>
                        </div>
                        <div class="tileComponent2">
                            <div class="componentHeading">
                                Travel
                            </div>
                            <div class="componentSubHeading">
                                Plan Your Travel Trip With Us
                            </div>
                        </div>
                    </div>
                    <div class="tileContainer">
                        <div class="tileComponent1">
                            <img src="https://i.ibb.co/CVNX8NZ/holiday.jpg"/>
                        </div>
                        <div class="tileComponent2">
                            <div class="componentHeading">
                                Travel
                            </div>
                            <div class="componentSubHeading">
                                Plan Your Travel Trip With Us
                            </div>
                        </div>
                    </div>
                    <div class="tileContainer">
                        <div class="tileComponent1">
                            <img src="https://i.ibb.co/8P41bJx/business.jpg"/>
                        </div>
                        <div class="tileComponent2">
                            <div class="componentHeading">
                                Travel
                            </div>
                            <div class="componentSubHeading">
                                Plan Your Travel Trip With Us
                            </div>
                        </div>
                    </div>
                    <div class="tileContainer">
                        <div class="tileComponent1">
                            <img src="https://i.ibb.co/KrmBprr/travel.jpg"/>
                        </div>
                        <div class="tileComponent2">
                            <div class="componentHeading">
                                Travel
                            </div>
                            <div class="componentSubHeading">
                                Plan Your Travel Trip With Us
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuickSearch