import React from 'react';
import Collin from './img/alex.jpg';
import './Header.css';

const mystyle = {
    backgroundImage: `url(${Collin})`,
    height: '900px',
    width: "100%",
    backgroundSize: 'cover',
    margin: '0 auto'
    
    
    

}

class Headerson extends React.Component{
    render(){
        return(
            <header style = {mystyle}>
                <h1> {this.props.title} </h1>
                <p>This is my First React Project</p>
                <a href = "http://www.data.gov.au/">{this.props.button}</a>
            </header>
        )
    }
}

export default Headerson;