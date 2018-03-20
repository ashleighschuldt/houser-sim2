import React, { Component } from 'react';
import '../App.css';
import header_logo from '../Images/header_logo.png';
import { Link } from 'react-router-dom';

class Header extends Component {
    render(){
        return(
            <header className='header'>
            <div className='header-container'>
            <div><img alt='logo' src={header_logo}/></div>
            <div className='houser'><b>Houser</b></div> 
            <div className='header-dashboard'>Dashboard</div>
            <div className='logout'><Link to={`/`}>Logout</Link></div>
            </div>
            </header>
        )
    }
}
export default Header;