import React, { Component } from 'react'

class Card1 extends Component {
    constructor(props) {
        super(props)
        this.fname = "Vivek"
        this.lname = "Kumar"
    }
    render() {
        return (
            <div className='class-container'>
                <h2>{this.fname}</h2>
                <p>This is Paragraph</p>
                <button>Explore More</button>
            </div>
        );
    }
}
export default Card1;