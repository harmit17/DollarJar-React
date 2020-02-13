import React, { Component } from "react";
import DollarJar from "./DollarJar";

class HomePage extends Component {

    state = {
        name: "",
        redirect: false
    }

    name = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        console.log(name);
        this.setState({
            name: name,
            redirect: true
        })

    }

    render() {
        return (
            <div>
                {this.state.redirect ?
                    <DollarJar name={this.state.name}/> :
                    <div>
                        <h1> Welcome</h1>
                        <div>
                            <form onSubmit={this.name}>
                                <input type="text" placeholder="Enter Your Name" name="name" />
                                <br />
                                <button name="enter" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                }

            </div>
        );
    }
}

export default HomePage;