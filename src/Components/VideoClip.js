import React, { Component } from 'react';
import '../CSS/VideoClip.css';
import { Pagination } from 'antd';


class VideoClip extends Component {
    constructor(props){
        super(props);
        /* 페이지의 current에 따라 영상들을 state에서 가져와 쓴다. */
        this.state = {
            text1 : "1라운드",
            round : "round1",
            one : "https://www.youtube.com/embed/V0lsDlYYcsE",
            two : "https://www.youtube.com/embed/GzhSOKBZK1M",
            three : "https://www.youtube.com/embed/-Sf7MRa-7gc",
            four : "https://www.youtube.com/embed/D4QSWZrtV-E",
            five : "https://www.youtube.com/embed/wCgOdChqRfw",
            six : "https://www.youtube.com/embed/nmmWnS4L0Nw"        
        }
        
    }
    onChange = page => {
      console.log(page);
      if(page === 1){
          this.setState({
            text1 : "1라운드",
            one : "https://www.youtube.com/embed/V0lsDlYYcsE",
            two : "https://www.youtube.com/embed/GzhSOKBZK1M",
            three : "https://www.youtube.com/embed/-Sf7MRa-7gc",
            four : "https://www.youtube.com/embed/D4QSWZrtV-E",
            five : "https://www.youtube.com/embed/wCgOdChqRfw",
            six : "https://www.youtube.com/embed/nmmWnS4L0Nw"
          })
      }else if(page === 2){
        this.setState({
            text1 : "2라운드",
            one : "https://www.youtube.com/embed/l4rqlF78Mmk", 
            two : "https://www.youtube.com/embed/sPos9I8M3fU" ,
            three : "https://www.youtube.com/embed/64creyP62vQ",
            four : "https://www.youtube.com/embed/ecRlbLcWjHA" ,
            five : "https://www.youtube.com/embed/_y4hrMLmTbA",
            six : "https://www.youtube.com/embed/OZ4PA4ztSPY"
          })
      }else if(page === 3){
        this.setState({
            text1 : "3라운드",
            one : "https://www.youtube.com/embed/txeJk8Bzn_I",
            two : "https://www.youtube.com/embed/JKSAwJWaQWI",
            three : "https://www.youtube.com/embed/4dvaoOzME0I",
            four : "https://www.youtube.com/embed/9tD12xtV8Mc",
            five : "https://www.youtube.com/embed/IrSQ6ynlyxc" ,
            six : "https://www.youtube.com/embed/8aFz2JQz-EE"
          })
      }
      else if(page === 4){
        this.setState({
            text1 : "4라운드",
            one :"https://www.youtube.com/embed/3PnkiiqXf0k",
            two : "https://www.youtube.com/embed/DRyrcCXeK8E",
            three :"https://www.youtube.com/embed/8tgVNpS3dkY",
            four : "https://www.youtube.com/embed/HGlPFB6daSc",
            five :"https://www.youtube.com/embed/11XgMXfEmzA",
            six :"https://www.youtube.com/embed/YBzKYc44Rfg"
          })
      } else if(page === 5){
        this.setState({
            text1 : "5라운드",
            one :"https://www.youtube.com/embed/H-Y6niFSZWI",
            two : "https://www.youtube.com/embed/Y7FmvHK2C4U",
            three :"https://www.youtube.com/embed/RDBf37JYWuY",
            four : "https://www.youtube.com/embed/lNk2lPZL3qw",
            five :"https://www.youtube.com/embed/r8gPcJi8vI0",
            six : "https://www.youtube.com/embed/7EsVv5prWtU"
          })
      } else if(page === 6){
        this.setState({
            text1 : "6라운드",
            one :"https://www.youtube.com/embed/7EsVv5prWtU",
            two : "https://www.youtube.com/embed/247ld_zxar8",
            three :"https://www.youtube.com/embed/J2A0Z_gYnXs",
            four : "https://www.youtube.com/embed/TGjDc6JWOu4",
            five :"https://www.youtube.com/embed/sIBI6oL4LBw",
            six :"https://www.youtube.com/embed/ha9P_oChAPU"
          })
      } else if(page === 7){
        this.setState({
            text1 : "7라운드",
            one :"https://www.youtube.com/embed/-pbGPvikelU",
            two : "https://www.youtube.com/embed/UzSQpzF52FE",
            three :"https://www.youtube.com/embed/r58Q1viLbnI",
            four : "https://www.youtube.com/embed/yqS1RF4aNnU",
            five :"https://www.youtube.com/embed/zCgubamMXkA",
            six :"https://www.youtube.com/embed/FkHEbbm3HwU"
          })
      } else if(page === 8){
        this.setState({
            text1 : "PlayOFFs",
            one :"https://www.youtube.com/embed/VfF_wphN1Z4",
            two :"https://www.youtube.com/embed/zEfeVrcChPg" ,
            three :"https://www.youtube.com/embed/kilZag2SjOs",
            four : "https://www.youtube.com/embed/vhd8ENk2is4" ,
            five :"https://www.youtube.com/embed/DPewgawsPGA",
            six :"https://www.youtube.com/embed/kLu2FO9n4vE"
          })
      } 
    };
    render() {
        return (
            <div className="VideoClip_Container">
                <div style={{marginLeft:'auto', marginRight:'auto', width:'max-content', marginTop:'30px', marginBottom:'30px'}}>
                    <Pagination defaultCurrent={1} showSizeChanger={false} total={80} onChange={this.onChange}/>
                </div>

                {/* 1라운드 영상 페이지 */}
                <div style={{width:'100%', display:this.state.dp1}}>
                    <h1>{this.state.text1}</h1>
                    <div className="Video_Row">
                        <div className="Video_box">
                            <iframe title="match1" className="video"src={this.state.one} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <p>1경기</p>
                        </div>

                        <div className="Video_box">
                            <iframe title="match2" className="video" src={this.state.two} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <p>2경기</p>
                        </div>

                        <div className="Video_box">
                            <iframe title="match3" className="video" src={this.state.three} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <p>3경기</p>
                        </div>
                    </div>
                    <div className="Video_Row">
                        <div className="Video_box">
                            <iframe title="match4" className="video" src={this.state.four} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <p>4경기</p>
                        </div>

                        <div className="Video_box">
                            <iframe title="match5" className="video" src={this.state.five} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <p>5경기</p>
                        </div>

                        <div className="Video_box">
                        <iframe title="match6" className="video" src={this.state.six} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <p>6경기</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


export default VideoClip;