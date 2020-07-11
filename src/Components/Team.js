import React, { Component } from 'react';
import '../CSS/Team.css';

class Team extends Component {

    constructor(props) {
        super(props);
        this.state = {
            afreeca_img: "../../Images/Team_afreeca.png"
        }
    }

    render() {
        return (
            <div className="Team_Container" style={{width:'100%'}}>
                <div style={{display:'relative', paddingTop:'900px', width:'60%', height:'4405px', marginLeft:'auto', marginRight:'auto' }}>
                    <div className="TeamBOX" id="box1">
                    </div>

                    <div className="TeamBOX" id="box2">

                    </div>

                    <div className="TeamBOX" id="box3">

                    </div>

                    <div className="TeamBOX" id="box4">

                    </div>

                    <div className="TeamBOX" id="box5">

                    </div>

                    <div className="TeamBOX" id="box6">

                    </div>

                </div>


            </div>
        )
    }
}


export default Team;