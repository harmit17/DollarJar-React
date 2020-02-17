import React, { Component } from "react";
import DollarJar from "./DollarJar";
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';

class HomePage extends Component {

    constructor(props){

         super(props);
         this.state = {username: ''};
     }

    handleInput = (e) =>{

        e.preventDefault();
        const name = e.target.value;
        this.setState({ name: name });
    }

    render() {

            return(

                <div>
                    <input type="text" placeholder="Enter Your Name" name="username" value={this.state.name} onChange={this.handleInput}/>
                    <br />
                    <Link to={{pathname:'/DollarJar', name:this.state.name}}>
                    <button name="enter" type="submit">Submit</button>
                    </Link>
                </div>
            )
        }
}

export default HomePage;