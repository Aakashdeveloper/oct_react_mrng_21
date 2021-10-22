import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductDisplay from './productDisplay';
import JSON from './db.json';

class Home extends Component{
    constructor(){
        super()

        this.state={
            products: JSON,
            filtered: JSON
        }
    }

    /*
        var a = [0,1,2,3]
        a.filter((data) => {return data*2})
    */

    filterProduct = (userInput) => {
        var output = this.state.products.filter((data) => {
            return data.name.toLowerCase().indexOf(userInput.toLowerCase())>-1
        })

        this.setState({filtered:output})
    }

    render(){
        // console.log(this.state.products)
        return(
            <>
                <Header userText={(data) => {this.filterProduct(data)}}/>
                <ProductDisplay prodData={this.state.filtered}></ProductDisplay>
                <Footer year="2021" month="Oct"/>
            </>
        )
    }
}

export default Home;