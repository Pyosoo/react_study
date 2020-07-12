import { TrophyFilled, YoutubeFilled, HomeFilled, QuestionCircleOutlined , UserOutlined ,CrownOutlined  } from '@ant-design/icons';
import React, { Component } from 'react';
import '../CSS/Navibar.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PlayerRanking from './PlayerRanking';
import Result from './Result';
import VideoClip from './VideoClip';
import Team from './Team';
import About3x3 from './About3x3';
import Homepage from './Homepage';
import { Layout, Menu } from 'antd';
const { Header, Content } = Layout;


class Navibar extends Component {

  constructor(props){
    super(props);
    this.state = {
      a : "About Com2us 3x3",
      b : "Home",
      c : "Team",
      d : "Match Result",
      e : "Player Rank",
      f : "Video Clip",
      Navimode : "horizontal",
      floatmode : "right",
      wid : "100%",
      ta : "",
      headerR : "",
      headerPR : "50px"
    }
  }
  render() {
    function debounce(func, wait, immediate) {
      var timeout;
      return function() {
          var context = this, args = arguments;
          var later = function() {
              timeout = null;
              if (!immediate) func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
      };
  };
   
  var myEfficientFn = debounce(function() {
    if(window.innerWidth < 1000){
      this.setState({
       Navimode : "vertical",
       floatmode : "",
       wid : '',
       ta : "right",
       headerR : "0",
       headerPR : "0"
      })
    }else if(window.innerWidth >= 1000){
      this.setState({
       Navimode : "horizontal",
       floatmode: "right",
       wid : '100%',
       ta : "",
       headerR :"",
       headerPR : "50px"
      })
    }
  }.bind(this), 250);
   
  window.addEventListener('resize', myEfficientFn);



    
    return (
      <Router basename="/react_study">
        <Layout className="layout" >
              <Header className="Header" style={{display:'flex',right:this.state.headerR, width:this.state.wid,  backgroundColor:'transparent', justifyContent:'center'}}> 
                  <Menu className="menu_bar" style={{textAlign:this.state.ta}}  theme="dark" mode={this.state.Navimode} defaultSelectedKeys={['0']}>

                      <Menu.Item  key="0" icon={<HomeFilled />}>
                        <Link className="linkitem" to="/"><b>{this.state.b}</b></Link>
                      </Menu.Item>
                      <Menu.Item  key="1" icon={<UserOutlined />}>
                        <Link className="linkitem" to="/team"><b>{this.state.c}</b></Link>
                      </Menu.Item>
                      <Menu.Item  key="2" icon={<TrophyFilled />}>
                        <Link className="linkitem" to="/result"><b>{this.state.d}</b></Link>
                      </Menu.Item>
                      <Menu.Item  key="3" icon={<CrownOutlined />}>
                        <Link className="linkitem" to="/playerranking"><b>{this.state.e}</b></Link>
                      </Menu.Item>
                      <Menu.Item  key="4" icon={<YoutubeFilled />}>
                        <Link className="linkitem" to="/videoclip"><b>{this.state.f}</b></Link>
                      </Menu.Item>
                      <Menu.Item  key="5" icon={<QuestionCircleOutlined />}>
                        <Link className="linkitem" to="/about3x3"><b>{this.state.a}</b></Link>
                      </Menu.Item>
                      
                      
                      
                      
                      

                </Menu>
              </Header>
              <Content>
                <div className="main_div">
                  <Route exact path='/' component={Homepage} />
                  <Route path='/team' component={Team} />
                  <Route path='/result' component={Result} />
                  <Route path='/playerranking' component={PlayerRanking} />
                  <Route path='/videoclip' component={VideoClip} />
                  <Route path='/about3x3' component={About3x3} />
                </div>
              </Content>
            </Layout>

      </Router>
 










    )
  }
}


export default Navibar;