import React, { Component } from 'react';
import '../CSS/Homepage.css';
import center_logo from '../Images/center_logo.png';
import yellow_say from '../Images/yellow_say.png';
import mvp_image from '../Images/mvp_image.png';
import winner_team from '../Images/winner_team.png';

class Homepage extends Component {

    render() {
        return (
            <div class="wrap_content">
                <div class="main_logo_visual">
                    <img src={center_logo} alt="" ></img>
                </div>

                <div class="main_visual_img">
                </div>

                <div class="background_color">
                    <div class="content_01">
                        <img src={yellow_say} alt="" />
                    </div>
                </div>

                <div class="content_02">
                    <div class="content_02_01_banner">
                    </div>
                    <div class="count">
                        <p>21:13</p>
                    </div>
                    <div class="content_02_02_banner">
                    </div>
                </div>

                <div class="content_03">
                    <div class="content_03_wrap">
                        <p class="flex_col"><img src={mvp_image} alt=""></img></p>
                            <div class="flex_col">
                            <p><span>우승팀 : 한솔 레미콘(Hansol Remicon) </span> <br/><br/>
                                이승준 + 이동준 , 이현승-이현석 형제가 주축이 되어 팀을 이끄는<br/>
                                한솔 레미콘이 우승을 차지했다.비록 승부의 화신 이동준은 <br/>
                                플레이오프에 출전하지 못했지만 동생 이동준의 활약이 대신했다 <br/>
                                득점력이 좋은 이현승과 수비가 좋은 이현석의 호흡과<br/>
                                3x3신인왕 전태풍이 우승을 차지했다<br/>
                            </p>
                            </div>
                    </div>

                    <div class="content_03_wrap01">
                        <div class="flex_col_02">
                            <p><span>MVP : 전태풍(한솔 레미콘) </span> <br/><br/>
                                KBL을 은퇴하고 한솔 레미콘에서 새 인생을 시작한 전태풍. <br />
                                결승전에서 보여준 작은거인 한준혁과의 매치업은 모두를 열광하게 했다<br />
                                KBL감옥에서 탈출해서 자유로운 농구를 하고 싶었다는 전태풍 선수는 <br />
                                자신의 개인기를 마음껏 뽐낼 수 있는3x3에 금방 적응하여 실력을 뽐냈다.<br />
                            </p>
                        </div>
                        <p class="flex_col_03"><img src={winner_team} alt=""/></p>
                    </div>
                </div>



                <div class="video_box">
                    <iframe title="last" className="video"src="https://www.youtube.com/embed/uVJ5Ifc_HJE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>




                <div class="footer">
                </div>
        </div>
  
        )
    }
}
   

export default Homepage;