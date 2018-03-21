import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import stepActive from '../Images/step_active.png';
import stepCompleted from '../Images/step_completed.png';
import stepInactive from '../Images/step_inactive.png';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {stepOne, stepTwo, stepThree, updateProperty } from '../Redux/Actions/action';
import axios from 'axios';

class Wizard extends Component {
    constructor(props){
        super(props);
        // this.stepOne = this.stepOne.bind(this);
        // this.stepTwo = this.stepTwo.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addProperty = this.addProperty.bind(this);
    }

    componentDidMount(){
        // this.refs.name.value = this.props.stepOne.name?this.props.stepOne.name:'';
        // this.refs.description.value = this.props.stepOne.name?this.props.stepOne.description:'';
        // this.refs.address.value = this.props.stepTwo.address?this.props.stepTwo.address:'';
        // this.refs.city.value = this.props.stepTwo.city?this.props.stepTwo.city:'';
        // this.refs.state.value = this.props.stepTwo.state?this.props.stepTwo.state:'';
        // this.refs.zip.value = this.props.stepTwo.zip?this.props.stepTwo.zip:'';
     
    }

    // stepOne(){
    //     const stepOne = {
    //         name: this.refs.name.value,
    //         description: this.refs.description.value
    //     }
    //     this.props.stepOne(stepOne);
    //     this.props.history.push(`/wizard/2`)
    // }

    // stepTwo(){
    //     const stepTwo = {
    //         address: this.refs.address.value,
    //         city: this.refs.city.value,
    //         state: this.refs.state.value,
    //         zip: this.refs.zip.value
    //     }
    //     this.props.stepTwo(stepTwo);
    //     this.props.history.push(`/wizard/3`)
    // }

    // stepThree(){
    //     const stepThree = {
    //         image: this.refs.image.value
    //     }
    //     this.props.stepThree(stepThree);
    //     this.props.history.push(`/wizard/4`)
    // }

    handleChange(e){
        const updateProperty = ({
            [e.target.name]: e.target.value,
        });
        this.props.updateProperty(updateProperty);
    }

    addProperty(){
        axios.post(`/api/properties`, {
            name: this.props.property.name,
            description: this.props.property.description,
            address: this.props.property.address,
            city: this.props.property.city,
            state: this.props.property.state,
            zip: this.props.property.zip,
            image: this.props.property.image,
            loanAmount: this.props.property.loanAmount,
            monthlyMortgage: this.props.property.monthlyMortgage,
            desiredRent: this.props.property.desiredRent
        })
        .then( res => 
            this.props.history.push(`/Dashboard`))
        
    }

    render(){
        if (this.props.match.params.page==='1'){
            return(
                <div>
                <Header />
                <div className='wizard-container'>
                    <div className='wizard-listing'>
                    <b>Add new listing</b>
                    <Link to={`/Dashboard`}><button className='cancel'><b>Cancel</b></button></Link>
                    </div>
                    <div className='step'>
                    <div className='step-text'>
                    Step 1
                    </div>
                    <div className='bubbles'>
                    <img alt='active' src={stepActive}/>
                    <img alt='inactive' src={stepInactive}/>
                    <img alt='inactive' src={stepInactive}/>
                    <img alt='inactive' src={stepInactive}/>
                    <img alt='inactive' src={stepInactive}/>
                    </div>
                    </div>
                    <div className='step-container'>
                    <label><b>Property Name</b></label>
                    <br></br>
                    <input className='name' name='name' ref='name' value={this.props.property.name} onChange = { this.handleChange }/>
                    <br></br>
                    <label><b>Property Description</b></label>
                    <br></br>
                    <input name='description'className='description' ref='description' value={this.props.property.description} onChange = {this.handleChange}/>
                    <br></br>
                    <Link to={`/wizard/2`}><button className='next'>Next Step</button></Link>
                    </div>
                </div>
                </div>
            )
        } else if (this.props.match.params.page==='2'){
            return (
                <div>
                <Header />
                <div className='wizard-container'>
                    <div className='wizard-listing'>
                    Add new listing
                    <Link to={`/Dashboard`}><button className='cancel'>Cancel</button></Link>
                    </div>
                    <div className='step'>
                    <div className='step-text'>
                    Step 2
                    </div>
                    <div className='bubbles'>
                    <img alt="complete" src={stepCompleted}/>
                    <img alt='active' src={stepActive}/>
                    <img alt='inactive' src={stepInactive}/>
                    <img alt='inactive' src={stepInactive}/>
                    <img alt='inactive' src={stepInactive}/>
                    </div>
                    </div>
                    <div className='step-container'>
                    <label><b>Address</b></label>
                    <br></br>
                    <input className='address' ref='address' name='address' value={this.props.property.address} onChange={this.handleChange}/>
                    <br></br>
                    <label><b>City</b></label>
                    <label><b>State</b></label>
                    <br></br>
                    <div className='city-state'>
                    <input className='city' ref='city' name='city' value={this.props.property.city} onChange={this.handleChange}/>
                    <input className='state' ref='state' name='state'value={this.props.property.state} onChange={this.handleChange}/>
                    </div>
                    <br></br>
                    <label><b>Zip</b></label>
                    <br></br>
                    <input className='zip' name='zip' ref='zip' value={this.props.property.zip} onChange={this.handleChange}/>
                    <div className='buttons'>
                    <Link to={`/wizard/${1}`}><button className='next'>Previous Step</button></Link>
                    <Link to={`/wizard/3`}><button className='next'>Next Step</button></Link>
                    </div>
                    </div>
                </div>
                </div>
            )
        } else if (this.props.match.params.page==='3'){
            return (
                <div>
                <Header />
                <div className='wizard-container'>
                    <div className='wizard-listing'>
                    Add new listing
                    <Link to={`/Dashboard`}><button className='cancel'>Cancel</button></Link>
                    </div>
                    <div className='step'>
                    <div className='step-text'>
                    Step 3
                    </div>
                    <div className='bubbles'>
                    <img alt="complete" src={stepCompleted}/>
                    <img alt="complete" src={stepCompleted}/>
                    <img alt='active' src={stepActive}/>
                    <img alt='inactive' src={stepInactive}/>
                    <img alt='inactive' src={stepInactive}/>
                    </div>
                    </div>
                    <label>Image URL</label>
                    <input name='image' value={this.props.property.image} onChange={this.handleChange}/>
                    <div className='buttons'>
                    <Link to={`/wizard/${2}`}><button className='next'>Previous Step</button></Link>
                    <Link to={`/wizard/${4}`}><button className='next'>Next Step</button></Link>
                    </div>
                </div>
                </div>
            )
        } else if (this.props.match.params.page==='4'){
            return (
                <div>
                <Header />
                <div className='wizard-container'>
                    <div className='wizard-listing'>
                    Add new listing
                    <Link to={`/Dashboard`}><button className='cancel'>Cancel</button></Link>
                    </div>
                    <div className='step'>
                    <div className='step-text'>
                    Step 4
                    </div>
                    <div className='bubbles'>
                    <img alt="complete" src={stepCompleted}/>
                    <img alt="complete" src={stepCompleted}/>
                    <img alt="complete" src={stepCompleted}/>
                    <img alt='active' src={stepActive}/>
                    <img alt='inactive' src={stepInactive}/>
                    </div>
                    </div>
                    <label>Loan Amount</label>
                    <input name='loanAmount' value={this.props.property.loanAmount} onChange={this.handleChange}/>
                    <label>Monthly Mortgage</label>
                    <input name='monthlyMortgage'value={this.props.property.monthlyMortgage} onChange={this.handleChange}/>
                    <div className='buttons'>
                    <Link to={`/wizard/${3}`}><button className='next'>Previous Step</button></Link>
                    <Link to={`/wizard/${5}`}><button className='next'>Next Step</button></Link>
                    </div>
                </div>
                </div>
            )
        } else if (this.props.match.params.page==='5'){
            return(
                <div>
                <Header />
                <div className='wizard-container'>
                    <div className='wizard-listing'>
                    Add new listing
                    <Link to={`/Dashboard`}><button className='cancel'>Cancel</button></Link>
                    </div>
                    <div className='step'>
                    <div className='step-text'>
                    Step 5
                    </div>
                    <div className='bubbles'>
                    <img alt="complete" src={stepCompleted}/>
                    <img alt="complete" src={stepCompleted}/>
                    <img alt="complete" src={stepCompleted}/>
                    <img alt="complete" src={stepCompleted}/>
                    <img alt='active' src={stepActive}/>
                    </div>
                    </div>
                    Recommended Rent 
                    <label>Desired Rent</label>
                    <input name='desiredRent' value={this.props.property.desiredRent} onChange={this.handleChange}/>
                    <div className='buttons'>
                    <Link to={`/wizard/${4}`}><button className='next'>Previous Step</button></Link>
                    <button className='complete' onClick={this.addProperty}>Complete</button>
                    </div>
                </div>
                </div>
            )
        } else (
            <div> Oops! Something went wrong. </div>
        )
    }
    
}

    function mapDispatchToProps(dispatch){
        return bindActionCreators({stepOne, stepTwo, stepThree, updateProperty }, dispatch);
    }

export default connect (state => state, mapDispatchToProps)(Wizard);