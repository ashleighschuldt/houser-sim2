import React, { Component } from 'react';
import '../App.css';
import header_logo from '../Images/header_logo.png';
import { Link } from 'react-router-dom';

class Header extends Component {
    render(){
        return(
            <header className='header'>
            <span><img alt='logo' src={header_logo}/></span>
            <span><b>Houser</b></span> 
            <span>Dashboard</span>
            <span><Link to={`/`}>Logout</Link></span>
            </header>
        )
    }
}
export default Header;