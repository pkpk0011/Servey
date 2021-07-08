import React, { useState } from 'react';
import './Home.css';
import KakaoShareButton from '../KakaoShareButton';
import homeImg from '../Img/homeImg.png';
import Link from '../Img/Link.png';
import { CopyToClipboard } from 'react-copy-to-clipboard';


function Home (props) {
    const [client, setClient] = useState("");
     function onChange(e){
         setClient(e.target.value);
    }
    
    function pushNickname () {
        props.history.push('/test', client);
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
            
                    <button type="button" onClick = {pushNickname} className="btn_start">
                        START
                    </button>
            </div>
            <div className="client_text">
                참여자 수
            </div>
            <div className="div_participant">
                <span className="span_participant">
                    1,100,200
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
                        <CopyToClipboard text={"https://hscandoit.co.kr" + props.match.url}>
                        <button id="copy_url" className="btn_copyurl" style={{backgroundImage: {Link}}}>
                            <img className="copyurl" src={Link} alt="Link-share-icon" />
                        </button>
                        </CopyToClipboard>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;