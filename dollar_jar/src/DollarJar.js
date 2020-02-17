import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class DollarJar extends Component {

    constructor(props){

        super(props);
        this.state = {username:'',
            nameList : [],
            amount:10
        };
    }

    // Handler Function for User Name
    handleName =(e) =>{

        e.preventDefault();
        const name = e.target.value;
        this.setState({

            username : name            
        })
        console.log(name)
    }

    //Handler Function for adding Users to array
    handleList =(e)=>{

        e.preventDefault();
        let newPerson = this.state.username;
        this.setState({

            nameList : [...this.state.nameList, newPerson]
        })
        console.log(this.state.nameList);
    }

    addValue = () =>{

         this.setState({

                 amount: parseInt(this.state.amount) + parseInt(this.state.amount)
         })
     }

    subtractValue = () =>{

        this.setState({

                amount: parseInt(this.state.amount) - parseInt(this.state.amount)
        })
    }

    render() {
        return (
               
                <div>
                    <h3>{this.props.location.name}</h3>
                   <div>   
                        <input type="text" placeholder="Enter Your Name" name="username" value={this.state.namesLists} onChange={this.handleName}/>       
                        <button name="enter" type="submit" onClick={this.handleList}>Add User</button>        
                       
                        <div>
                                {/* {(this.state.nameList)}
                                <button name="minus" type="submit" onClick={this.subtractValue}>-</button>
                                {this.state.amount} 
                                <button name="plus" type="submit" onClick={this.addValue}>+</button> */}
                                <ul>
                                 {this.state.nameList.map( (val)=> 

                                    <li>{val}<span><button name="minus" type="submit" onClick={this.subtractValue}>-</button></span>
                                 {this.state.amount}<span><button name="plus" type="submit" onClick={this.addValue}>+</button></span></li>)}
                                </ul>
                            </div>

                   </div>
                </div>
        );
    }
}
export default DollarJar;