import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import stepActive from '../Images/step_active.png';
import stepCompleted from '../Images/step_completed.png';
import stepInactive from '../Images/step_inactive.png';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateName} from '../Redux/Actions/action';

class Wizard extends Component {
    constructor(props){
        super(props);
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
                    <input className='name'name='name' onChange={(e) => updateName(e.target.value)}></input>
                    <br></br>
                    <label><b>Property Description</b></label>
                    <br></br>
                    <input name='description'className='description'></input>
                    <br></br>
                    <Link to={`/wizard/${2}`}><button className='next'>Next Step</button></Link>
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
                    <input className='address' name='address'></input>
                    <br></br>
                    <label><b>City</b></label>
                    <label><b>State</b></label>
                    <br></br>
                    <div className='city-state'>
                    <input className='city' name='city'></input>
                    <input className='state' name='state'></input>
                    </div>
                    <br></br>
                    <label><b>Zip</b></label>
                    <br></br>
                    <input className='zip' name='zip'></input>
                    <div className='buttons'>
                    <Link to={`/wizard/${1}`}><button className='next'>Previous Step</button></Link>
                    <Link to={`/wizard/${3}`}><button className='next'>Next Step</button></Link>
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
                    <input name='image'></input>
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
                    <input name='loanAmount'></input>
                    <label>Monthly Mortgage</label>
                    <input name='monthlyMortgage'></input>
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
                    <input name='desiredRent'></input>
                    <div className='buttons'>
                    <Link to={`/wizard/${4}`}><button className='next'>Previous Step</button></Link>
                    <Link to={`/Dashboard`}><button className='complete'>Complete</button></Link>
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
        return bindActionCreators( dispatch);
    }

export default connect (state => state)(Wizard);