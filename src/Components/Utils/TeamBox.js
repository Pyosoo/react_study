import React, { Component } from 'react';
// import '../../CSS/TeamBox.css';

class TeamBox extends Component {
    render() {
        var Img = this.props.params;
        var sectionStyle = {
            width: "30vw",
            height: "20vh",
            borderStyle: 'groove',
            backgroundImage: 'url(' + Img + ')',
            marginLeft: 'auto',
            marginRight: 'auto'
          };

          console.log(Img);
          console.log(typeof(Img));
        return (
            <div className="Teambox" style={sectionStyle}>
                
            </div>
        )
    }
}


export default TeamBox;