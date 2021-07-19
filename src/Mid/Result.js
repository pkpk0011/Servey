import { useState, useEffect } from 'react';
import './Result.css';
import loading1 from '../Img/loading1.png';
import loading2 from '../Img/loading2.png';
import loading3 from '../Img/loading3.png';
import loading4 from '../Img/loading4.png';
import loading5 from '../Img/loading5.png';
import loading6 from '../Img/loading6.png';
import loading7 from '../Img/loading7.png';
import loading8 from '../Img/loading8.png';
import loading9 from '../Img/loading9.png';
import shareMethod from '../Img/shareMethod.png';
import KakaoShareButton from '../KakaoShareButton';
import copyLink from '../Img/copyLink.png';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import axios from 'axios';

function Result (props) {

    console.log(props);

    const nickname = props.match.params.nickname;
    
    const [loadingImg, setLoadingImg] = useState(0);

    const [clientResult, setClientResult] = useState();
    
    const [topType, setTopType] = useState();
    
    const [totalLength, setTotalLength] = useState();

    useEffect(() => {
        setLoadingImg(state => state+1);
        axios.post('https://backend-survey.herokuapp.com/clientresult', {
            user_nickname: nickname
        }).then(function(res){
            setClientResult(res.data.clientresult);
            
        }).catch(function (error) {
            console.log(error);
        });
            setTimeout(() => {
                setLoadingImg(state => state+1);
            }, 300);
            setTimeout(() => {
            axios.get('https://backend-survey.herokuapp.com/orderby', {
            }).then(function(res) {
                setTopType(res.data.topType);
            }).catch(function (error){
                console.log(error);
            })
            setLoadingImg(state => state+1);
        }, 700);
        setTimeout(() => {
            axios.get('https://backend-survey.herokuapp.com/total', {
            }).then(function (res) {
                setTotalLength(res.data.clientTotal);
            }).catch(function (error) {
                console.log(error);
            })
            setLoadingImg(state => state+1);
        }, 1200);
        setTimeout(() => {
            setLoadingImg(state => state+1);
        }, 1800);
        setTimeout(() => {
            setLoadingImg(state => state+1);
        }, 2500);
        setTimeout(() => {
            setLoadingImg(state => state+1);
        }, 3200);
        setTimeout(() => {
            setLoadingImg(state => state+1);
        }, 4000);
        setTimeout(() => {
            setLoadingImg(state => state+1);
        }, 4800);
    }, [nickname]);
    console.log(clientResult);
    console.log(topType);
    
    // console.log(result_array.indexOf(ImgName[0].value));

    const linkAlert = () => {
        alert("클립보드에 복사되었습니다.")
    }
    
    const totalRank = () => {
        props.history.push(`/rank${nickname}`, [topType, totalLength]);
    }

    return (
        <div className="Result_area">
            {topType ? (
                <>
                <div className="result">
                    <span className="result_box_title">투자고수 테스트</span>
                    <div className="result_box">
                        <span className="nickname_title">
                            {nickname} 님은
                        </span>
                        <img src= {`${clientResult[0].img}`} className="result_img" alt="result_img" />
                        <div className="type_per">
                            나와 같은 유형 38%
                        </div>
                        <div className="sentence">
                            <img src = {`${clientResult[0].img_sentence}`} className="sentence_img" alt="sentence_img" />
                        </div>
                    </div>
                </div>
                <div className="container">
                <div className="result_share">
                    <span className="result_share_title">
                        내 결과 공유하기
                    </span>
                    <div className="sharebtn_box">
                        <div className="kakaobtn">
                            <KakaoShareButton />
                        </div>
                        <div className="urlbtn">
                            <CopyToClipboard text={`https://hscandoit.co.kr${props.match.url}`}>
                            <button id="copy_url" className="btn_copyurl" style={{backgroundImage: {copyLink}}} onClick={linkAlert}>
                                <img className="copyurl" src={copyLink} alt="Link-share-icon" />
                            </button>
                            </CopyToClipboard>
                        </div>
                    </div>
                </div>
                <div className="result__box">
                    <div className="most_type">
                        <span className="span_most_type">
                            가장 많은 유형은?
                        </span>
                        <div className="div_most_type">
                            <img src={`${topType[0].img}`} className = "img_most_type" alt="most_type" />
                        </div>
                    </div>
                    <div>
                        <button type="button" className="rank" onClick={totalRank}>전체 순위 보러가기</button>
                    </div>
                    <div>
                        <a href="./">
                            <button type="button" className="return_button">다시 테스트하기</button>
                        </a>
                    </div>
                </div>
                    <div className="pointshare">
                        <img src = {shareMethod} className="shareMethod" alt = "shareMethod" />
                    </div>
                </div>
                </>
            ) : (
            <div className="loading">
            {
                loadingImg === 1 ? <img src={loading1} alt ="loading" />
                : 
                loadingImg === 2 ? <img src={loading2} alt ="loading" />
                :
                loadingImg === 3 ? <img src={loading3} alt ="loading" />
                :
                loadingImg === 4 ? <img src={loading4} alt ="loading" />
                :
                loadingImg === 5 ? <img src={loading5} alt ="loading" />
                :
                loadingImg === 6 ? <img src={loading6} alt ="loading" />
                :
                loadingImg === 7 ? <img src={loading7} alt ="loading" />
                :   
                loadingImg === 8 ? <img src={loading8} alt ="loading" />
                :
                <img src={loading9} alt ="loading" />
            }
            </div>
            ) }  
        </div>  
    ) 
}

export default Result;