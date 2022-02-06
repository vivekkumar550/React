import React, { Component } from "react";

class Info extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <h2>This is my Info Component</h2>

                <p>My name is {this.props.name}</p>
                <p>My Age is {this.props.age}</p>
                <p>My  YOE is {this.props.YOE}</p>
                <button>Hello</button>
                <hr />
            </div>
        );
    }
}
export default Info;
