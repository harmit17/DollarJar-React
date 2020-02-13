import React, { Component } from 'react';

class DollarJar extends Component{

    state = {
        number: "",
        redirect: false
    }

    render(){
        return(

         <div>
             <input type="number" placeholder="Enter Amount" name="amount" />
            <h1>{this.props.name}</h1>
            <div >
                <button name="plus" type="submit">+</button>
            </div>
            <div>
                <button name="minus" type="submit">-</button>
            </div>
         </div>   
        
        );
    }
}
export default DollarJar;