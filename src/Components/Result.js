import React, { Component } from 'react';
import MatchResult1 from '../MatchResult1.json'
import MatchResult2 from '../MatchResult2.json'
import MatchResult3 from '../MatchResult3.json'
import MatchResult4 from '../MatchResult4.json'
import MatchResult5 from '../MatchResult5.json'
import MatchResult6 from '../MatchResult6.json'
import MatchResult7 from '../MatchResult7.json'
import afreeca from '../Images/afreeca.png';
import '../CSS/Result.css';
import { Card, Col, Row , Typography } from 'antd';
import { CheckCircleOutlined, StopOutlined } from '@ant-design/icons';
const { Title } = Typography;
class Result extends Component {

    constructor(props) {

        super(props);
        this.state = {
            Afreeca_win: 0,
            Afreeca_point: 0,
            Bacchus_win: 0,
            Bacchus_point: 0,
            Hansol_win: 0,
            Hansol_point: 0,
            Hanwool_win: 0,
            Hanwool_point: 0,
            Descente_win: 0,
            Descente_point: 0,
            Scorecenter_win: 0,
            Scorecenter_point: 0,


            MR1: MatchResult1,
            MR2: MatchResult2,
            MR3: MatchResult3,
            MR4: MatchResult4,
            MR5: MatchResult5,
            MR6: MatchResult6,
            MR7: MatchResult7,
            result_dp1: "none",
            result_dp2: "none",
            result_dp3: "none",
            result_dp4: "none",
            result_dp5: "none",
            result_dp6: "none",
            result_dp7: "none",
            result_dp8: "none",

            LRdp : "0"

        }

    }

    cal = (data) => {

        let after_Afreeca_win = 0;
        let after_Afreeca_point = 0;
        let after_Bacchus_win = 0;
        let after_Bacchus_point = 0;
        let after_Hansol_win = 0;
        let after_Hansol_point = 0;
        let after_Hanwool_win = 0;
        let after_Hanwool_point = 0;
        let after_Descente_win = 0;
        let after_Descente_point = 0;
        let after_Scorecenter_win = 0;
        let after_Scorecenter_point = 0;


        let homename, awayname, homescore, awayscore;
        data.forEach((matchinfo, index) => {

            this.setState({ counter: this.state.counter + Number(1) })
            index = matchinfo.id;
            homename = matchinfo.Home;
            awayname = matchinfo.Away;
            homescore = Number(matchinfo.Home_score);
            awayscore = Number(matchinfo.Away_score);

            // 홈이 이겼을때
            if (homescore > awayscore) {
                if (homename === "Afreeca") {
                    after_Afreeca_point += Number(homescore);
                    after_Afreeca_win += 1;
                    if (awayname === "Bacchus") {
                        after_Bacchus_point += Number(awayscore);
                    }
                    else if (awayname === "Hansol") {
                        after_Hansol_point += Number(awayscore);
                    } else if (awayname === "Hanwool") {
                        after_Hanwool_point += Number(awayscore);
                    } else if (awayname === "Descente") {
                        after_Descente_point += Number(awayscore);
                    } else if (awayname === "Scorecenter") {
                        after_Scorecenter_point += Number(awayscore);
                    }
                }

                else if (homename === "Bacchus") {
                    after_Bacchus_win += 1;
                    after_Bacchus_point += Number(homescore);
                    if (awayname === "Afreeca") {
                        after_Afreeca_point += Number(awayscore);
                    }
                    else if (awayname === "Hansol") {
                        after_Hansol_point += Number(awayscore);
                    } else if (awayname === "Hanwool") {
                        after_Hanwool_point += Number(awayscore);
                    } else if (awayname === "Descente") {
                        after_Descente_point += Number(awayscore);
                    } else if (awayname === "Scorecenter") {
                        after_Scorecenter_point += Number(awayscore);
                    }
                }

                else if (homename === "Hansol") {
                    after_Hansol_win += 1;
                    after_Hansol_point += Number(homescore);
                    if (awayname === "Afreeca") {
                        after_Afreeca_point += Number(awayscore);
                    }
                    else if (awayname === "Bacchus") {
                        after_Bacchus_point += Number(awayscore);
                    } else if (awayname === "Hanwool") {
                        after_Hanwool_point += Number(awayscore);
                    } else if (awayname === "Descente") {
                        after_Descente_point += Number(awayscore);
                    } else if (awayname === "Scorecenter") {
                        after_Scorecenter_point += Number(awayscore);
                    }
                }

                else if (homename === "Hanwool") {
                    after_Hanwool_win += 1;
                    after_Hanwool_point += Number(homescore);
                    if (awayname === "Afreeca") {
                        after_Afreeca_point += Number(awayscore);
                    }
                    else if (awayname === "Hansol") {
                        after_Hansol_point += Number(awayscore);
                    } else if (awayname === "Bacchus") {
                        after_Bacchus_point += Number(awayscore);
                    } else if (awayname === "Descente") {
                        after_Descente_point += Number(awayscore);
                    } else if (awayname === "Scorecenter") {
                        after_Scorecenter_point += Number(awayscore);
                    }
                }

                else if (homename === "Descente") {
                    after_Descente_win += 1;
                    after_Descente_point += Number(homescore);
                    if (awayname === "Afreeca") {
                        after_Afreeca_point += Number(awayscore);
                    }
                    else if (awayname === "Hansol") {
                        after_Hansol_point += Number(awayscore);
                    } else if (awayname === "Hanwool") {
                        after_Hanwool_point += Number(awayscore);
                    } else if (awayname === "Bacchus") {
                        after_Bacchus_point += Number(awayscore);
                    } else if (awayname === "Scorecenter") {
                        after_Scorecenter_point += Number(awayscore);
                    }
                }

                else if (homename === "Scorecenter") {
                    after_Scorecenter_win += 1;
                    after_Scorecenter_point += Number(homescore);
                    if (awayname === "Afreeca") {
                        after_Afreeca_point += Number(awayscore);
                    }
                    else if (awayname === "Hansol") {
                        after_Hansol_point += Number(awayscore);
                    } else if (awayname === "Hanwool") {
                        after_Hanwool_point += Number(awayscore);
                    } else if (awayname === "Bacchus") {
                        after_Bacchus_point += Number(awayscore);
                    } else if (awayname === "Scorecenter") {
                        after_Scorecenter_point += Number(awayscore);
                    }
                }


            }


            // 어웨이가 이겼을때
            else if (homescore < awayscore) {
                if (awayname === "Afreeca") {
                    after_Afreeca_win += 1;
                    after_Afreeca_point += Number(awayscore);
                    if (homename === "Bacchus") {
                        after_Bacchus_point += Number(homescore);
                    }
                    else if (homename === "Hansol") {
                        after_Hansol_point += Number(homescore);
                    } else if (homename === "Hanwool") {
                        after_Hanwool_point += Number(homescore);
                    } else if (homename === "Descente") {
                        after_Descente_point += Number(homescore);
                    } else if (homename === "Scorecenter") {
                        after_Scorecenter_point += Number(homescore);
                    }
                }


                else if (awayname === "Bacchus") {
                    after_Bacchus_win += 1;
                    after_Bacchus_point += Number(awayscore);
                    if (homename === "Afreeca") {
                        after_Afreeca_point += Number(homescore);
                    }
                    else if (homename === "Hansol") {
                        after_Hansol_point += Number(homescore);
                    } else if (homename === "Hanwool") {
                        after_Hanwool_point += Number(homescore);
                    } else if (homename === "Descente") {
                        after_Descente_point += Number(homescore);
                    } else if (homename === "Scorecenter") {
                        after_Scorecenter_point += Number(homescore);
                    }
                }

                else if (awayname === "Hansol") {
                    after_Hansol_win += 1;
                    after_Hansol_point += Number(awayscore);
                    if (homename === "Bacchus") {
                        after_Bacchus_point += Number(homescore);
                    }
                    else if (homename === "Afreeca") {
                        after_Afreeca_point += Number(homescore);
                    } else if (homename === "Hanwool") {
                        after_Hanwool_point += Number(homescore);
                    } else if (homename === "Descente") {
                        after_Descente_point += Number(homescore);
                    } else if (homename === "Scorecenter") {
                        after_Scorecenter_point += Number(homescore);
                    }
                }

                else if (awayname === "Hanwool") {
                    after_Hanwool_win += 1;
                    after_Hanwool_point += Number(awayscore);
                    if (homename === "Bacchus") {
                        after_Bacchus_point += Number(homescore);
                    }
                    else if (homename === "Hansol") {
                        after_Hansol_point += Number(homescore);
                    } else if (homename === "Afreeca") {
                        after_Afreeca_point += Number(homescore);
                    } else if (homename === "Descente") {
                        after_Descente_point += Number(homescore);
                    } else if (homename === "Scorecenter") {
                        after_Scorecenter_point += Number(homescore);
                    }
                }

                else if (awayname === "Descente") {
                    after_Descente_win += 1;
                    after_Descente_point += Number(awayscore);
                    if (homename === "Bacchus") {
                        after_Bacchus_point += Number(homescore);
                    }
                    else if (homename === "Hansol") {
                        after_Hansol_point += Number(homescore);
                    } else if (homename === "Hanwool") {
                        after_Hanwool_point += Number(homescore);
                    } else if (homename === "Afreeca") {
                        after_Afreeca_point += Number(homescore);
                    } else if (homename === "Scorecenter") {
                        after_Scorecenter_point += Number(homescore);
                    }
                }

                else if (awayname === "Scorecenter") {
                    after_Scorecenter_win += 1;
                    after_Scorecenter_point += Number(awayscore);
                    if (homename === "Bacchus") {
                        after_Bacchus_point += Number(homescore);
                    }
                    else if (homename === "Hansol") {
                        after_Hansol_point += Number(homescore);
                    } else if (homename === "Hanwool") {
                        after_Hanwool_point += Number(homescore);
                    } else if (homename === "Descente") {
                        after_Descente_point += Number(homescore);
                    } else if (homename === "Afreeca") {
                        after_Afreeca_point += Number(homescore);
                    }
                }






            }

        })  //map 끝나는 지점
        this.setState({
            Afreeca_win: after_Afreeca_win,
            Afreeca_point: after_Afreeca_point,

            Bacchus_win: after_Bacchus_win,
            Bacchus_point: after_Bacchus_point,

            Hansol_win: after_Hansol_win,
            Hansol_point: after_Hansol_point,

            Hanwool_win: after_Hanwool_win,
            Hanwool_point: after_Hanwool_point,

            Descente_win: after_Descente_win,
            Descente_point: after_Descente_point,

            Scorecenter_win: after_Scorecenter_win,
            Scorecenter_point: after_Scorecenter_point,
        })
    }




    render() {


        var match_count = 1;     
        var c1 = 2;
        const gamelist1 = this.state.MR1.map(data =>{
            if(c1 % 2 === 0){
                c1++;
                return (
                <div className ="Rbox" style={{marginLeft:'15%'}}>
                    <span>제{match_count++}경기</span>
                    <div className="Rbox1">
                        {data.Home} <br/> {data.Home_score}
                    </div>
                    <p>vs</p>
                    <div className="Rbox1">
                        {data.Away} <br/> {data.Away_score}
                    </div>
                </div>
            )
            }
            else{
                c1++;
                return (
                    <div className ="Rbox" style={{marginLeft:'50%'}}>
                        <div className="Rbox1">
                            {data.Home} <br/> {data.Home_score}
                        </div>
                        <p>vs</p>
                        <div className="Rbox1">
                            {data.Away} <br/> {data.Away_score}
                        </div>
                        <span>제{match_count++}경기</span>
                    </div>
                )
            }
        }
        );
       // match_count = 1;
        const gamelist2 = this.state.MR2.map(data =>
            <div className ="Rbox">
                <div className="Rbox1">
                    {data.Home} <br/> {data.Home_score}
                </div>
                <p>vs</p>
                <div className="Rbox1">
                    {data.Away} <br/> {data.Away_score}
                </div>
            </div>
            );
       // match_count = 1;
        const gamelist3 = this.state.MR3.map(data =>
            <div className ="Rbox">
                <div className="Rbox1">
                    {data.Home} <br/> {data.Home_score}
                </div>
                <p>vs</p>
                <div className="Rbox1">
                    {data.Away} <br/> {data.Away_score}
                </div>
            </div>    
        );
        //match_count = 1;
        const gamelist4 = this.state.MR4.map(data =>
            <div className ="Rbox">
                <div className="Rbox1">
                    {data.Home} <br/> {data.Home_score}
                </div>
                <p>vs</p>
                <div className="Rbox1">
                    {data.Away} <br/> {data.Away_score}
                </div>
            </div>    
        );
        //match_count = 1;
        const gamelist5 = this.state.MR5.map(data =>
            <div className ="Rbox">
                <div className="Rbox1">
                    {data.Home} <br/> {data.Home_score}
                </div>
                <p>vs</p>
                <div className="Rbox1">
                    {data.Away} <br/> {data.Away_score}
                </div>
            </div>
        );
        //match_count = 1;
        const gamelist6 = this.state.MR6.map(data =>
            <div className ="Rbox">
                <div className="Rbox1">
                    {data.Home} <br/> {data.Home_score}
                </div>
                <p>vs</p>
                <div className="Rbox1">
                    {data.Away} <br/> {data.Away_score}
                </div>
            </div>    
        );
        //match_count = 1;
        const gamelist7 = this.state.MR7.map(data =>
            <div className ="Rbox">
                <div className="Rbox1">
                    {data.Home} <br/> {data.Home_score}
                </div>
                <p>vs</p>
                <div className="Rbox1">
                    {data.Away} <br/> {data.Away_score}
                </div>
            </div>
        );


        return (
            <div className="Result_Container" style={{ width:'100%', textAlign: 'center' }}>

                {/* 라운드별 클릭할 수 있는 Navibar같은 것 */}
                <div className="Roundlist" style={{ display: 'flex', width:'100%' }}>

                    <div style={{ marginRight: '50px', width:'10%' }}>
                        <h1>1Round</h1>
                        <CheckCircleOutlined style={{ width: '20px', height: '20px', marginRight: '20px' }} onClick={function () {
                            this.setState({
                                result_dp1: "block",
                                result_dp2: "none",
                                result_dp3: "none",
                                result_dp4: "none",
                                result_dp5: "none",
                                result_dp6: "none",
                                result_dp7: "none",
                                result_dp8: "none"
                            });
                            this.cal(this.state.MR1);
                        }.bind(this)} />
                        <StopOutlined style={{ width: '20px', height: '20px' }} onClick={function () {
                            this.setState({
                                result_dp1: "none"
                            });
                        }.bind(this)} />
                    </div>

                    <div style={{ marginRight: '50px', width:'10%' }}>
                        <h1>2Round</h1>
                        <CheckCircleOutlined style={{ width: '20px', height: '20px', marginRight: '20px' }} onClick={function () {
                            this.setState({
                                result_dp1: "none",
                                result_dp2: "block",
                                result_dp3: "none",
                                result_dp4: "none",
                                result_dp5: "none",
                                result_dp6: "none",
                                result_dp7: "none",
                                result_dp8: "none"
                            });
                            this.cal(this.state.MR2);
                        }.bind(this)} />
                        <StopOutlined style={{ width: '20px', height: '20px' }} onClick={function () {
                            this.setState({
                                result_dp2: "none"
                            });
                        }.bind(this)} />
                    </div>


                    <div style={{ marginRight: '50px', width:'10%' }}>
                        <h1>3Round</h1>
                        <CheckCircleOutlined style={{ width: '20px', height: '20px', marginRight: '20px' }} onClick={function () {
                            this.setState({
                                result_dp1: "none",
                                result_dp2: "none",
                                result_dp3: "block",
                                result_dp4: "none",
                                result_dp5: "none",
                                result_dp6: "none",
                                result_dp7: "none",
                                result_dp8: "none"
                            });
                            this.cal(this.state.MR3);
                        }.bind(this)} />
                        <StopOutlined style={{ width: '20px', height: '20px' }} onClick={function () {
                            this.setState({
                                result_dp3: "none"
                            });
                        }.bind(this)} />
                    </div>


                    <div style={{ marginRight: '50px', width:'10%' }}>
                        <h1>4Round</h1>
                        <CheckCircleOutlined style={{ width: '20px', height: '20px', marginRight: '20px' }} onClick={function () {
                            this.setState({
                                result_dp1: "none",
                                result_dp2: "none",
                                result_dp3: "none",
                                result_dp4: "block",
                                result_dp5: "none",
                                result_dp6: "none",
                                result_dp7: "none",
                                result_dp8: "none"
                            });
                            this.cal(this.state.MR4);
                        }.bind(this)} />
                        <StopOutlined style={{ width: '20px', height: '20px' }} onClick={function () {
                            this.setState({
                                result_dp4: "none"
                            });
                        }.bind(this)} />
                    </div>

                    <div style={{ marginRight: '50px', width:'10%' }}>
                        <h1>5Round</h1>
                        <CheckCircleOutlined style={{ width: '20px', height: '20px', marginRight: '20px' }} onClick={function () {
                            this.setState({
                                result_dp1: "none",
                                result_dp2: "none",
                                result_dp3: "none",
                                result_dp4: "none",
                                result_dp5: "block",
                                result_dp6: "none",
                                result_dp7: "none",
                                result_dp8: "none"
                            });
                            this.cal(this.state.MR5);
                        }.bind(this)} />
                        <StopOutlined style={{ width: '20px', height: '20px' }} onClick={function () {
                            this.setState({
                                result_dp5: "none"
                            });
                        }.bind(this)} />
                    </div>

                    <div style={{ marginRight: '50px', width:'10%' }}>
                        <h1>6Round</h1>
                        <CheckCircleOutlined style={{ width: '20px', height: '20px', marginRight: '20px' }} onClick={function () {
                            this.setState({
                                result_dp1: "none",
                                result_dp2: "none",
                                result_dp3: "none",
                                result_dp4: "none",
                                result_dp5: "none",
                                result_dp6: "block",
                                result_dp7: "none",
                                result_dp8: "none"
                            });
                            this.cal(this.state.MR6);
                        }.bind(this)} />
                        <StopOutlined style={{ width: '20px', height: '20px' }} onClick={function () {
                            this.setState({
                                result_dp6: "none"
                            });
                        }.bind(this)} />
                    </div>


                    <div style={{marginRight:'50px', width:'10%'}}>
                        <h1>7Round</h1>
                        <CheckCircleOutlined style={{ width: '20px', height: '20px', marginRight: '20px' }} onClick={function () {
                            this.setState({
                                result_dp1: "none",
                                result_dp2: "none",
                                result_dp3: "none",
                                result_dp4: "none",
                                result_dp5: "none",
                                result_dp6: "none",
                                result_dp7: "block",
                                result_dp8: "none"
                            });
                            this.cal(this.state.MR7);
                        }.bind(this)} />
                        <StopOutlined style={{ width: '20px', height: '20px' }} onClick={function () {
                            this.setState({
                                result_dp7: "none",
                            });
                        }.bind(this)} />
                    </div>

                    <div style={{width:'10%'}}>
                        <h1>PLAYOFFS</h1>
                        <CheckCircleOutlined style={{width: '20px', height: '20px', marginRight: '20px' }} onClick={function () {
                            this.setState({
                                result_dp1: "none",
                                result_dp2: "none",
                                result_dp3: "none",
                                result_dp4: "none",
                                result_dp5: "none",
                                result_dp6: "none",
                                result_dp7: "none",
                                result_dp8: "block"
                            });
                            this.cal(this.state.MR7);
                        }.bind(this)} />
                        <StopOutlined style={{ width: '20px', height: '20px' }} onClick={function () {
                            this.setState({
                                result_dp8: "none",
                            });
                        }.bind(this)} />
                    </div>
                </div>




                {/* 1라운드에 대한 결과 테이블 */}
                <div >
                    <div className="site-card-wrapper " style={{ display: `${this.state.result_dp1}` }}>
                        <div>
                            {gamelist1}
                        </div>
                        <Row style={{marginLeft:'auto', marginRight:'auto'}} gutter={16}>
                            <Col span={8}>
                                <Card className="T_box af" title={<Title level={2}>아프리카</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Afreeca_win}승 <br />
                                        총 득점: {this.state.Afreeca_point}점
                                    </span>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card className="T_box bc"  title={<Title level={2}>박카스</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Bacchus_win}승 <br />
                                        총 득점: {this.state.Bacchus_point}점
                                    </span>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card className="T_box hw" title={<Title level={2}>한울건설</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Hanwool_win}승 <br />
                                        총 득점: {this.state.Hanwool_point}점
                                    </span>
                                </Card>
                            </Col>
                        </Row><br/><br/>
                    </div>
                    <div className="site-card-wrapper" style={{ display: `${this.state.result_dp1}` }}>
                        <Row style={{marginLeft:'auto', marginRight:'auto'}} gutter={16}>
                            <Col span={8}>
                                <Card className="T_box hs" title={<Title level={2}>한솔레미콘</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Hansol_win}승 <br />
                                        총 득점: {this.state.Hansol_point}점
                                </span>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card className="T_box de" title={<Title level={2}>데상트</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Descente_win}승 <br />
                                        총 득점: {this.state.Descente_point}점
                                </span>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card className="T_box sc" title={<Title level={2}>스코어센터</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Scorecenter_win}승 <br />
                                        총 득점: {this.state.Scorecenter_point}점
                                </span>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>


                {/* 2라운드에 대한 결과 테이블 */}
                <div>
                    <div className="site-card-wrapper " style={{ display: `${this.state.result_dp2}` }}>
                        <div>
                            {gamelist2}
                        </div>
                        <Row style={{marginLeft:'auto', marginRight:'auto'}} gutter={16}>
                            <Col span={8}>
                                <Card className="T_box af" title={<Title level={2}>아프리카</Title>} bordered={false} style={{
                                    backgroundImage: { afreeca }
                                }}>
                                    <span>
                                        총 승리: {this.state.Afreeca_win}승 <br />
                                총 득점: {this.state.Afreeca_point}점
                                </span>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card className="T_box bc" title={<Title level={2}>박카스</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Bacchus_win}승 <br />
                                총 득점: {this.state.Bacchus_point}점
                                </span>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card className="T_box hw" title={<Title level={2}>한울 건설</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Hanwool_win}승 <br />
                                총 득점: {this.state.Hanwool_point}점
                                </span>
                                </Card>
                            </Col>
                        </Row><br/><br/>
                    </div> 
                    <div className="site-card-wrapper" style={{ display: `${this.state.result_dp2}` }}>
                        <Row style={{marginLeft:'auto', marginRight:'auto'}} gutter={16}>
                            <Col span={8}>
                                <Card className="T_box hs" title={<Title level={2}>한솔</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Hansol_win}승 <br />
                                총 득점: {this.state.Hansol_point}점
                                </span>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card className="T_box de" title={<Title level={2}>데상트</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Descente_win}승 <br />
                                총 득점: {this.state.Descente_point}점
                                </span>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card className="T_box sc" title={<Title level={2}>스코어센터</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Scorecenter_win}승 <br />
                                총 득점: {this.state.Scorecenter_point}점
                                </span>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>


                {/* 3라운드에 대한 결과 테이블 */}
                <div>
                    <div className="site-card-wrapper " style={{ display: `${this.state.result_dp3}` }}>
                        <div>
                            {gamelist3}
                        </div>
                        <Row style={{marginLeft:'auto', marginRight:'auto'}} gutter={16}>
                            <Col span={8}>
                                <Card className="T_box af" title={<Title level={2}>아프리카</Title>} bordered={false} style={{
                                    backgroundImage: { afreeca }
                                }}>
                                    <span>
                                        총 승리: {this.state.Afreeca_win}승 <br />
                                총 득점: {this.state.Afreeca_point}점
                                </span>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card className="T_box bc" title={<Title level={2}>박카스</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Bacchus_win}승 <br />
                                총 득점: {this.state.Bacchus_point}점
                                </span>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card className="T_box hw" title={<Title level={2}>한울 건설</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Hanwool_win}승 <br />
                                총 득점: {this.state.Hanwool_point}점
                                </span>
                                </Card>
                            </Col>
                        </Row><br/><br/>
                    </div>
                    <div className="site-card-wrapper" style={{ display: `${this.state.result_dp3}` }}>
                        <Row style={{marginLeft:'auto', marginRight:'auto'}} gutter={16}>
                            <Col span={8}>
                                <Card className="T_box hs" title={<Title level={2}>한솔레미콘</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Hansol_win}승 <br />
                                총 득점: {this.state.Hansol_point}점
                                </span>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card className="T_box de" title={<Title level={2}>데상트</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Descente_win}승 <br />
                                총 득점: {this.state.Descente_point}점
                                </span>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card className="T_box sc" title={<Title level={2}>스코어센터</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Scorecenter_win}승 <br />
                                총 득점: {this.state.Scorecenter_point}점
                                </span>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>


                {/* 4라운드에 대한 결과 테이블 */}
                <div>
                    <div className="site-card-wrapper " style={{ display: `${this.state.result_dp4}` }}>
                        <div>
                            {gamelist4}
                        </div>
                        <Row style={{marginLeft:'auto', marginRight:'auto'}} gutter={16}>
                            <Col span={8}>
                                <Card className="T_box af" title={<Title level={2}>아프리카</Title>} bordered={false} style={{
                                    backgroundImage: { afreeca }
                                }}>
                                    <span>
                                        총 승리: {this.state.Afreeca_win}승 <br />
                                총 득점: {this.state.Afreeca_point}점
                                </span>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card className="T_box bc" title={<Title level={2}>박카스</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Bacchus_win}승 <br />
                                총 득점: {this.state.Bacchus_point}점
                                </span>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card className="T_box hw" title={<Title level={2}>한울 건설</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Hanwool_win}승 <br />
                                총 득점: {this.state.Hanwool_point}점
                                </span>
                                </Card>
                            </Col>
                        </Row><br/><br/>
                    </div>
                    <div className="site-card-wrapper" style={{ display: `${this.state.result_dp4}` }}>
                        <Row style={{marginLeft:'auto', marginRight:'auto'}} gutter={16}>
                            <Col span={8}>
                                <Card className="T_box hs" title={<Title level={2}>한솔레미콘</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Hansol_win}승 <br />
                                총 득점: {this.state.Hansol_point}점
                                </span>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card className="T_box de" title={<Title level={2}>데상트</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Descente_win}승 <br />
                                총 득점: {this.state.Descente_point}점
                                </span>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card className="T_box sc" title={<Title level={2}>스코어센터</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Scorecenter_win}승 <br />
                                총 득점: {this.state.Scorecenter_point}점
                                </span>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>


                {/* 5라운드에 대한 결과 테이블 */}
                <div>
                    <div className="site-card-wrapper " style={{ display: `${this.state.result_dp5}` }}>
                        <div>
                            {gamelist5}
                        </div>
                        <Row style={{marginLeft:'auto', marginRight:'auto'}} gutter={16}>
                            <Col span={8}>
                                <Card className="T_box af" title={<Title level={2}>아프리카</Title>} bordered={false} style={{
                                    backgroundImage: { afreeca }
                                }}>
                                    <span>
                                        총 승리: {this.state.Afreeca_win}승 <br />
                                총 득점: {this.state.Afreeca_point}점
                                </span>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card className="T_box bc" title={<Title level={2}>박카스</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Bacchus_win}승 <br />
                                총 득점: {this.state.Bacchus_point}점
                                </span>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card className="T_box hw" title={<Title level={2}>한울 건설</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Hanwool_win}승 <br />
                                총 득점: {this.state.Hanwool_point}점
                                </span>
                                </Card>
                            </Col>
                        </Row><br/><br/>
                    </div>
                    <div className="site-card-wrapper" style={{ display: `${this.state.result_dp5}` }}>
                        <Row style={{marginLeft:'auto', marginRight:'auto'}} gutter={16}>
                            <Col span={8}>
                                <Card className="T_box hs" title={<Title level={2}>한솔레미콘</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Hansol_win}승 <br />
                                총 득점: {this.state.Hansol_point}점
                                </span>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card className="T_box de" title={<Title level={2}>데상트</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Descente_win}승 <br />
                                총 득점: {this.state.Descente_point}점
                                </span>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card className="T_box sc" title={<Title level={2}>스코어센터</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Scorecenter_win}승 <br />
                                총 득점: {this.state.Scorecenter_point}점
                                </span>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>


                {/* 6라운드에 대한 결과 테이블 */}
                <div>
                    <div className="site-card-wrapper " style={{ display: `${this.state.result_dp6}` }}>
                        <div>
                            {gamelist6}
                        </div>
                        <Row style={{marginLeft:'auto', marginRight:'auto'}} gutter={16}>
                            <Col span={8}>
                                <Card className="T_box af" title={<Title level={2}>아프리카</Title>} bordered={false} style={{
                                    backgroundImage: { afreeca }
                                }}>
                                    <span>
                                        총 승리: {this.state.Afreeca_win}승 <br />
                                총 득점: {this.state.Afreeca_point}점
                                </span>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card className="T_box bc" title={<Title level={2}>박카스</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Bacchus_win}승 <br />
                                총 득점: {this.state.Bacchus_point}점
                                </span>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card className="T_box hw" title={<Title level={2}>한울 건설</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Hanwool_win}승 <br />
                                총 득점: {this.state.Hanwool_point}점
                                </span>
                                </Card>
                            </Col>
                        </Row><br/><br/>
                    </div>
                    <div className="site-card-wrapper" style={{ display: `${this.state.result_dp6}` }}>
                        <Row style={{marginLeft:'auto', marginRight:'auto'}} gutter={16}>
                            <Col span={8}>
                                <Card className="T_box hs" title={<Title level={2}>한솔레미콘</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Hansol_win}승 <br />
                                총 득점: {this.state.Hansol_point}점
                                </span>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card className="T_box de" title={<Title level={2}>데상트</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Descente_win}승 <br />
                                총 득점: {this.state.Descente_point}점
                                </span>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card className="T_box sc" title={<Title level={2}>스코어센터</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Scorecenter_win}승 <br />
                                총 득점: {this.state.Scorecenter_point}점
                                </span>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
                
                
                {/* 7라운드에 대한 결과 테이블 */}
                <div >
                    <div className="site-card-wrapper " style={{ display: `${this.state.result_dp7}` }}>
                        <div>
                            {gamelist7}
                        </div>
                        <Row style={{marginLeft:'auto', marginRight:'auto'}} gutter={16}>
                            <Col span={8}>
                                <Card className="T_box af" title={<Title level={2}>아프리카</Title>} bordered={false} style={{
                                    backgroundImage: { afreeca }
                                }}>
                                    <span>
                                        총 승리: {this.state.Afreeca_win}승 <br />
                                총 득점: {this.state.Afreeca_point}점
                                </span>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card className="T_box bc" title={<Title level={2}>박카스</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Bacchus_win}승 <br />
                                총 득점: {this.state.Bacchus_point}점
                                </span>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card className="T_box hw" title={<Title level={2}>한울 건설</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Hanwool_win}승 <br />
                                총 득점: {this.state.Hanwool_point}점
                                </span>
                                </Card>
                            </Col>
                        </Row><br/><br/>
                    </div>
                    <div className="site-card-wrapper" style={{ display: `${this.state.result_dp7}` }}>
                        <Row style={{marginLeft:'auto', marginRight:'auto'}} gutter={16}>
                            <Col span={8}>
                                <Card className="T_box hs" title={<Title level={2}>한솔레미콘</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Hansol_win}승 <br />
                                총 득점: {this.state.Hansol_point}점
                                </span>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card className="T_box de" title={<Title level={2}>데상트</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Descente_win}승 <br />
                                총 득점: {this.state.Descente_point}점
                                </span>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card className="T_box sc" title={<Title level={2}>스코어센터</Title>} bordered={false}>
                                    <span>
                                        총 승리: {this.state.Scorecenter_win}승 <br />
                                총 득점: {this.state.Scorecenter_point}점
                                </span>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>



                {/* PlayOff */}
                <div style={{display: `${this.state.result_dp8}` }}>
                    {/* 6강전 라인 */}
                    <div>
                        <Row gutter={24}>
                            <Col span={4}>
                                <Card title="Afreeca Freecs" bordered={false}>
                                    부전승
                                </Card>
                            </Col>
                            <Col span={4}>
                                <Card title="BACCHUS" bordered={false}>
                                    20
                                </Card>
                            </Col>
                            <Col span={4}>
                                <Card title="Hanwool CONST" bordered={false}>
                                    16
                                </Card>
                            </Col>
                            <Col span={4}>
                                <Card title="Descente Bumpers" bordered={false}>
                                    21
                                </Card>
                            </Col>
                            <Col span={4}>
                                <Card title="Score Center" bordered={false}>
                                    9
                                </Card>
                            </Col>
                            <Col span={4}>
                                <Card title="Hansol Remicon" bordered={false}>
                                    부전승
                                </Card>
                            </Col>
                        </Row>
                    </div>
                <br/>
                {/* 4강전 라인 */}
                <div>
                        <Row gutter={24}>
                            <Col span={6}>
                                <Card title="Afreeca Freecs" bordered={false}>
                                    21
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card title="BACCHUS" bordered={false}>
                                    18
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card title="Descente Bumpers" bordered={false}>
                                    17
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card title="Hansol Remicon" bordered={false}>
                                    21
                                </Card>
                            </Col>
                        </Row>
                </div>
                <br/>
                {/* 2강전 라인 */}
                <div>
                        <Row gutter={24}>
                            <Col span={12}>
                                <Card title="Afreeca Freecs" bordered={false}>
                                    19
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card title="Hansol Remicon" bordered={false}>
                                    21
                                </Card>
                            </Col>
                        </Row>
                </div>
                <br/>
                {/* 우승자 라인 */}
                <div>
                        <Row gutter={24}>
                            <Col span={24}>
                                <Card title="Hansol Remicon" bordered={false}>
                                    우승
                                </Card>
                            </Col>
                        </Row>
                </div>

                </div>
            </div>
        )
    }
}


export default Result;