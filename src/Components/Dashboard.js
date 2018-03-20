import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import axios from 'axios';
import deleteIcon from '../Images/delete_icon.png';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            properties: []
        }
        this.deleteProperty = this.deleteProperty.bind(this);
    }

    componentDidMount(){
        axios.get(`/api/properties`)
            .then( response => {
                this.setState({
                    properties: response.data
                })
            })
    }

    deleteProperty(id){
        axios.delete(`/api/properties/${id}`)
        .then(res => {
            this.setState({
                properties: res.data
            })
        })
           
    }

    


    render(){      
  const properties = this.state.properties.map((e, i)=> {
      return (<div key={i} className='properties'>
                <img alt='house' src={this.state.properties[i].image}/>
                <span className='property'>
                <p><b>Property:</b> {this.state.properties[i].property_name}</p>
                <p>{this.state.properties[i].description}</p>
                </span>
                <span className='details'>
                <p><b>Loan:</b> ${this.state.properties[i].loan_amount}</p>
                <p><b>Monthly Mortgage:</b> ${this.state.properties[i].monthly_mortgage}</p> 
                <p><b>Recommended Rent:</b> ${this.state.properties[i].monthly_mortgage*1.25}</p>
                <p><b>Desired Rent:</b> ${this.state.properties[i].desired_rent}</p>
                <p><b>Address:</b> {this.state.properties[i].address}</p>
                <p><b>City:</b> {this.state.properties[i].city}</p>
                <p><b>State:</b> {this.state.properties[i].state}</p>
                <p><b>Zip:</b> {this.state.properties[i].zip}</p>
                </span>
                <img alt='delete' onClick={() => {this.deleteProperty(e.id)}} className='delete' src={deleteIcon}/>
             </div>)
  })

        return(
            <div>
                <Header />
                <div className='dashboard'>
                <Link to={`/wizard/1`}><button className='add-property'> <b>Add new property</b> </button></Link>
                <div className='filter-container'>List properties with "desired rent" greater than: $<input className='filter-input'></input>
                <button className='filter'>Filter</button>
                <button className='reset'>Reset</button>
                </div>
                <div className='listings'>
                <p className='home-listing'><b>Home Listings</b></p>
                {properties}
                </div>
            </div>
            </div>
        )
    }
}
export default Dashboard;