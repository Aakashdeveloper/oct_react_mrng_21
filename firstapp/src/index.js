import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';

const App = () => {
    return (
        <>
            <Header/>
            <h1>This is React App</h1>
            <h2>Hiiiii</h2>
            <Footer/>
        </>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))

/*
//var React = require('react');

//build component
function App(){
    return (
         <h1>Hiii From react</h1>
     ) 
}
*/
