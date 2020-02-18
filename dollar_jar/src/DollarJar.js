import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class DollarJar extends Component {

    constructor(props){

        super(props);
        this.state = {
            username:{

                        name: '',
                        id: '',
                        dueAmount: 0
                },   
            nameList : [],
            amount:10,
            totalAmount : 0
        };
    }

    // Handler Function for User Name
    handleName =(e) =>{

        e.preventDefault();
        let name = e.target.value;
        let id = this.state.nameList.length + 1;
        this.setState({

            username :{
                name : name,
                id : id,
                dueAmount :0
            }            
        })
        console.log(name)
    }

    //Handler Function for adding Users to array
    handleList =()=>{
        
        let newPerson = this.state.username;
        this.setState({

            nameList : [...this.state.nameList,newPerson]
        })
        //console.log(this.state.nameList); 
    };

    addValue(e){

           
           e.dueAmount += this.state.amount 
            this.setState({

                    totalAmount: this.state.totalAmount +  this.state.amount
            })
     };

    subtractValue(e){

        e.dueAmount -= this.state.amount 
        this.setState({

                totalAmount: this.state.totalAmount -  this.state.amount
        })
    };   

    render() {
        return (
               
                <div>
                    <h3>{this.props.location.name}</h3>
                   <div>   
                            <input type="text" placeholder="Enter Your Name" name="username" value={this.state.username.name} onChange={this.handleName}/>       
                            <button name="enter" type="submit" onClick={this.handleList}>Add User</button>        
                        <div>
                                {/* {(this.state.nameList)}
                                <button name="minus" type="submit" onClick={this.subtractValue}>-</button>
                                {this.state.amount} 
                                <button name="plus" type="submit" onClick={this.addValue}>+</button> */}
                                {/* <ul>
                                    {this.state.nameList.map( (val)=> 
                                    <li>{val}<button name="minus" type="submit" onClick={this.subtractValue}>-</button>
                                    {this.state.username.dueAmount}
                                    <button name="plus" type="submit" onClick={this.addValue}>+</button></li>)}
                                    <br/>
                                    {this.state.totalAmount}
                                </ul>  */}
                                <h3>Total = {this.state.totalAmount}</h3>
                                {
                                    this.state.nameList.map((user)=>{

                                        return <div key={user.id}>
                                            <ul>
                                                <li>{user.name}
                                                <button type="button" onClick={()=> this.addValue(user)}>+</button>
                                                {user.dueAmount}
                                                <button type="button" onClick={()=>this.subtractValue(user)}>-</button>
                                                </li>
                                            </ul>
                                        </div>
                                    })
                                }
                            </div>

                   </div>
                </div>
        );
    }
}
export default DollarJar;