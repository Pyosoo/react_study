import React, { Component } from 'react';
import rules from '../Images/3x3rules.png';
import '../CSS/About3x3.css';
class About3x3 extends Component {

    render() {
        return (
            <div style ={{width:'100%'}}>
                <img className="aboutimg" alt="" src={rules} />
            </div>
        )
    }
}


export default About3x3;