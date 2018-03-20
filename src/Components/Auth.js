import React, { Component } from 'react';
import '../App.css';
import logo from '../Images/auth_logo.png';
import axios from 'axios';

class Auth extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    createUserOrLogin(e, login){
        e.preventDefault();
        axios.post(`/api/auth/${login}`, {email:this.state.email, password:this.state.password})
            .then((response)=>{
                if(response.data.success){
                    this.props.history.push('/Dashboard');
                }else{
                    alert("your email or password is incorrect")
                }
            })
            .catch((err)=>{
                console.log(err)
            }) 
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render(){
        return (
            <div className="auth-container">
                <div className='auth'><img alt='logo-auth' src={logo}/>
                <br></br>
                <label>Email</label>
                <input name='email' value={this.state.email} onChange={this.handleChange} type='text'></input>
                <br></br>
                <label>Password</label>
                <input name='password' value={this.state.password} onChange={this.handleChange} type='text'></input>
                <br></br>
                <button onClick={(event)=>{this.createUserOrLogin(event, 'login')}}>Login</button>
                <button onClick={(event)=>{this.createUserOrLogin(event, 'register')}}>Register</button>
                </div>
            </div>
        )
    }
}
export default Auth;