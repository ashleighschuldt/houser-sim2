import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import stepActive from '../Images/step_active.png';
import stepCompleted from '../Images/step_completed.png';
import stepInactive from '../Images/step_inactive.png';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import {updateProperty} from '../Redux/Actions/action';

class Wizard extends Component {
    constructor(props){
        super(props);
    }

    render(){
        if (this.props.match.params.page==='1'){
            return(
                <div>
                <Header />
                    Add new listing
                    <Link to={`/Dashboard`}><button>Cancel</button></Link>
                    Step 1
                    <img alt='active' src={stepActive}/>
                    <img alt='inactive' src={stepInactive}/>
                    <img alt='inactive' src={stepInactive}/>
                    <img alt='inactive' src={stepInactive}/>
                    <img alt='inactive' src={stepInactive}/>
                    <label>Property Name</label>
                    <input name='name' ></input>
                    <label>Property Description</label>
                    <input name='description'></input>
                    <Link to={`/wizard/${2}`}><button>Next Step</button></Link>
                </div>
            )
        } else if (this.props.match.params.page==='2'){
            return (
                <div>
                <Header />
                    Add new listing
                    <Link to={`/Dashboard`}><button>Cancel</button></Link>
                    Step 2
                    <img alt="complete" src={stepCompleted}/>
                    <img alt='active' src={stepActive}/>
                    <img alt='inactive' src={stepInactive}/>
                    <img alt='inactive' src={stepInactive}/>
                    <img alt='inactive' src={stepInactive}/>
                    <label>Address</label>
                    <input name='address'></input>
                    <label>City</label>
                    <input name='city'></input>
                    <label>State</label>
                    <input name='state'></input>
                    <label>Zip</label>
                    <input name='zip'></input>
                    <Link to={`/wizard/${1}`}><button>Previous Step</button></Link>
                    <Link to={`/wizard/${3}`}><button>Next Step</button></Link>
                </div>
            )
        } else if (this.props.match.params.page==='3'){
            return (
                <div>
                <Header />
                    Add new listing
                    <Link to={`/Dashboard`}><button>Cancel</button></Link>
                    Step 3
                    <img alt="complete" src={stepCompleted}/>
                    <img alt="complete" src={stepCompleted}/>
                    <img alt='active' src={stepActive}/>
                    <img alt='inactive' src={stepInactive}/>
                    <img alt='inactive' src={stepInactive}/>
                    <label>Image URL</label>
                    <input name='image'></input>
                    <Link to={`/wizard/${2}`}><button>Previous Step</button></Link>
                    <Link to={`/wizard/${4}`}><button>Next Step</button></Link>
                </div>
            )
        } else if (this.props.match.params.page==='4'){
            return (
                <div>
                <Header />
                    Add new listing
                    <Link to={`/Dashboard`}><button>Cancel</button></Link>
                    Step 4
                    <img alt="complete" src={stepCompleted}/>
                    <img alt="complete" src={stepCompleted}/>
                    <img alt="complete" src={stepCompleted}/>
                    <img alt='active' src={stepActive}/>
                    <img alt='inactive' src={stepInactive}/>
                    <label>Loan AmountL</label>
                    <input name='loanAmount'></input>
                    <label>Monthly Mortgage</label>
                    <input name='monthlyMortgage'></input>
                    <Link to={`/wizard/${3}`}><button>Previous Step</button></Link>
                    <Link to={`/wizard/${5}`}><button>Next Step</button></Link>
                </div>
            )
        } else if (this.props.match.params.page==='5'){
            return(
                <div>
                <Header />
                    Add new listing
                    <Link to={`/Dashboard`}><button>Cancel</button></Link>
                    Step 5
                    <img alt="complete" src={stepCompleted}/>
                    <img alt="complete" src={stepCompleted}/>
                    <img alt="complete" src={stepCompleted}/>
                    <img alt="complete" src={stepCompleted}/>
                    <img alt='active' src={stepActive}/>
                    Recommended Rent 
                    <label>Desired Rent</label>
                    <input name='desiredRent'></input>
                    <Link to={`/wizard/${4}`}><button>Previous Step</button></Link>
                    <Link to={`/Dashboard`}><button>Complete</button></Link>
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

export default connect (state => state, mapDispatchToProps)(Wizard);