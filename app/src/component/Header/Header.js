import React, { Component } from 'react';
import './header.css';
import shelfieLogo from './shelfieLogo.jpg';

class Header extends Component {
    render() {
    return(
        <div className="header">
            <img src={shelfieLogo} alt="logo"/>
            <h1>SHELFIE {this.props.title}</h1>
        </div>
    )
 }
}


export default Header;