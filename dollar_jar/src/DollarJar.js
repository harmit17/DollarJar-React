import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class DollarJar extends Component {

    // state = {
    //     namesList:[],
    //     amount:10
    // }

    constructor(props){

        super(props);
        this.state = {username: []};
    }

    // addPerson = (e) =>{
    //     e.preventDefault();
    //     const name = e.target.value;
    //     console.log(name);
    // }

    handleName =(e) =>{

        e.preventDefault();
        const name = e.target.value;
        this.setState({

            username : name            
        })
        console.log(name)
    }

    handleList(){


        // let nameLists = this.target.value;
        // this.setState({

        //     username : [...this.state.username,nameLists]
        // })
        // nameLists.push(list);
        // let name=   list;
        // this.setState({

        //     nameLists : nameLists
        // })
        console.log(this.state.namesLists);
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

                            <button name="minus" type="submit" onClick={this.subtractValue}>-</button>
                            {this.state.amount} 
                            <button name="plus" type="submit" onClick={this.addValue}>+</button>
                         </div>
                   </div>
                </div>
        );
    }
}
export default DollarJar;