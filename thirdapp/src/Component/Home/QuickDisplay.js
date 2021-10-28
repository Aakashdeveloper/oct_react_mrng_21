import React from 'react';
import './QuickSearch.css'

const QuickDisplay = (props) => {
        console.log(props)

        const listTrip = ({tripData}) => {
            if(tripData){
                return tripData.map((item,index) => {
                    return(
                        <div className="tileContainer" key={item._id}>
                            <div className="tileComponent1">
                                <img src={item.image}/>
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    {item.name}
                                </div>
                                <div className="componentSubHeading">
                                    Plan Your {item.name} Trip With Us
                                </div>
                            </div>
                        </div>
                    )
                })
            } 
        }


        return(
            <div id="quickSearch">
                <span id="QuickSearchHeading">
                    Quick Searches
                </span>
                <span id="QuickSearchSubHeading">
                    Discover Hotels By Type
                </span>
                <div id="mainTileContainer">
                    {listTrip(props)}
                </div>
            </div>
        )
}

export default QuickDisplay