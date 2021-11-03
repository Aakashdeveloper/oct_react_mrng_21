import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Component/Home/Home';
import Header from './Header';
import Footer from './Footer';
import Listing from './Component/listing/listingApi';
import Details from './Component/details/detailsPage';
import PlaceBooking from './Component/booking/placeBooking';
import ViewBooking from './Component/booking/bookingApi';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/list/:id" component={Listing}/>
            <Route path="/details/:id" component={Details}/>
            <Route path="/booking/:hotel_name" component={PlaceBooking}/>
            <Route path="/viewBooking" component={ViewBooking}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;