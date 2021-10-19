import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductDisplay from './productDisplay';
import JSON from './db.json';

class Home extends Component{
    render(){
        return(
            <>
                <Header/>
                <ProductDisplay></ProductDisplay>
                <Footer year="2021" month="Oct"/>
            </>
        )
    }
}

export default Home;