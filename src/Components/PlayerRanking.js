import React, { Component } from 'react';
import '../CSS/PlayerRanking.css';
import ranking from '../Images/ranking.png';
class PlayerRanking extends Component {
    
    render() {
        return (
            <div className="PlayerRanking_Container">

                <img className="item" src={ranking} alt="" ></img>

            </div>
        )
    }
}


export default PlayerRanking;