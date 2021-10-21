import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductDisplay from './productDisplay';
import JSON from './db.json';

class Home extends Component{
    constructor(){
        super()

        this.state={
            products: JSON
        }
    }
    render(){
        // console.log(this.state.products)
        return(
            <>
                <Header/>
                <ProductDisplay prodData={this.state.products}></ProductDisplay>
                <Footer year="2021" month="Oct"/>
            </>
        )
    }
}

export default Home;