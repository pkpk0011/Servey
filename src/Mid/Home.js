import React, { useState, useEffect } from 'react';
import './Home.css';
import KakaoShareButton from '../KakaoShareButton';
import homeImg from '../Img/homeImg.png';
import copyLink from '../Img/copyLink.png';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home (props) {
    const [client, setClient] = useState("");
    const [clientTotal, setClientTotal] = useState();
     function onChange(e){
         setClient(e.target.value);
    }

    useEffect(() => {
        axios.get('https://backend-survey.herokuapp.com/total', {
            }).then(function (res) {
                setClientTotal(res.data.clientTotal);
            }).catch(function (error) {
                console.log(error);
            })
    }, [])
    
    const linkAlert = () => {
        alert("클립보드에 복사되었습니다.")
    }

    const mustNickname = () => {
        alert("닉네임을 입력해주세요!")
    }

    return (
        <div className="home_area">
                <span className="title1">
                투자고수<br />
                테스트
                </span>
                <span className="title2">
                나는 어떤 동물일까?
                </span>
            <div className="img_area">
                <img src={homeImg} className="homeImg" alt="home" />
            </div>
            <div>
                <input type="text" value={client} className="nickname" onChange={onChange} placeholder="[참여 닉네임]" />
            </div>
            <div>
                {client ? 
                <Link to={`/test${client}`}>
                    <button type="button" className="btn_start">
                        START
                    </button>
                </Link>
                :
                <button type="button" onClick={mustNickname} className="btn_start">
                    START
                </button>
                }
            </div>
            <div className="client_text">
                참여자 수
            </div>
            <div className="div_participant">
                <span className="span_participant">
                    {clientTotal}
                </span>
            </div>
            <div className="div_share">
                <span className="share">
                    공유하기
                </span>
                <div className="sharebtn_box">
                    <div className="kakaobtn">
                        <KakaoShareButton />
                    </div>
                    <div className="urlbtn">
                        <CopyToClipboard text={"https://hscandoit.co.kr"}>
                        <button id="copy_url" className="btn_copyurl" style={{backgroundImage: {copyLink}}} onClick={linkAlert}>
                            <img className="copyurl" src={copyLink} alt="Link-share-icon" />
                        </button>
                        </CopyToClipboard>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;