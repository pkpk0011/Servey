import { useState, useEffect } from 'react';
import './Result.css';
import levelcrow from '../Img/levelcrow.png';
import leveldungbeetle from '../Img/leveldungbeetle.png';
import levelmeerkat from '../Img/levelmeerkat.png';
import levelparesseux from '../Img/levelparesseux.png';
import levelpuppy from '../Img/levelpuppy.png';
import levelsquirrel from '../Img/levelsquirrel.png';
import levelsunfish from '../Img/levelsunfish.png';
import loading1 from '../Img/loading1.png';
import loading2 from '../Img/loading2.png';
import loading3 from '../Img/loading3.png';
import loading4 from '../Img/loading4.png';
import loading5 from '../Img/loading5.png';
import loading6 from '../Img/loading6.png';
import loading7 from '../Img/loading7.png';
import loading8 from '../Img/loading8.png';
import loading9 from '../Img/loading9.png';
import crow_text from '../Img/crow_text.png';
import dungbeetle_text from '../Img/dungbeetle_text.png';
import meerkat_text from '../Img/meerkat_text.png';
import paresseux_text from '../Img/paresseux_text.png';
import puppy_text from '../Img/puppy_text.png';
import squirrel_text from '../Img/squirrel_text.png';
import sunfish_text from '../Img/sunfish_text.png';
import shareMethod from '../Img/shareMethod.png';
import KakaoShareButton from '../KakaoShareButton';
import copyLink from '../Img/copyLink.png';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import axios from 'axios';

function Result (props) {
    
    const [loadingImg, setLoadingImg] = useState(0);
    
    const [loading, setLoading] = useState(props.location.state);

    const [rankPage, setRankPage] = useState();

    const [topType, setTopType] = useState();
    
    const [totalLength, setTotalLength] = useState();
    
    let result = props.location.state;
    
    const result_array = [
        result.crow,
        result.dungbeetle,
        result.meerkat,
        result.paresseux,
        result.puppy,
        result.squirrel,
        result.sunfish,
    ]
    
    const result_name = [
        "crow",
        "dungbeetle",
        "meerkat",
        "paresseux",
        "puppy",
        "squirrel",
        "sunfish",
    ]
    
    const result_sentence = [
        crow_text,
        dungbeetle_text,
        meerkat_text,
        paresseux_text,
        puppy_text,
        squirrel_text,
        sunfish_text
    ]
    
    const resultImg = [
        { name: "crow", value: result.crow }, 
        { name: "dungbeetle", value: result.dungbeetle },
        { name: "meerkat", value: result.meerkat },
        { name: "paresseux", value: result.paresseux },
        { name: "puppy", value: result.puppy },
        { name: "squirrel", value: result.squirrel },
        { name: "sunfish", value: result.sunfish }
    ];
    
    var sortingField = "value";
    
    const ImgName = resultImg.sort(function(a, b) { // 내림차순
        return b[sortingField] - a[sortingField];
    });
    
    const Img_array = [levelcrow, leveldungbeetle, levelmeerkat, levelparesseux, levelpuppy, levelsquirrel, levelsunfish];
    
    let usernickname = props.location.state.nickname;
    let resultname = result_name[result_array.indexOf(ImgName[0].value)];
    let usertype = result_name[result_array.indexOf(ImgName[0].value)];

    useEffect(() => {
        setLoadingImg(state => state+1);
        axios.post('https://backend-survey.herokuapp.com/create', {
            user_nickname: usernickname,
            user_result: resultname
        }).then(function () {
            }).catch(function (error) {
                console.log(error);
            })
            
            setTimeout(() => {
                axios.post('https://backend-survey.herokuapp.com/update', {
                    type: usertype
                }).then(function () {
                }).catch(function (error) {
                    console.log(error);
                })
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
        setTimeout(() => {
            setLoading();
        }, 5600);
    }, [resultname, usernickname, usertype]);
    
    // console.log(result_array.indexOf(ImgName[0].value));

    const linkAlert = () => {
        alert("클립보드에 복사되었습니다.")
    }
    
    const totalRank = () => {
        // props.history.push("/rank", [topType, totalLength]);
        setRankPage(props);
    }

    const backresult = () => {
        setRankPage();
    }

    return (
        <div className="Result_area">
            {loading ? (
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
            ) : rankPage ? (
                <>
                <div className = "realTimeTitle">
                <span className = "realTitle">
                    실시간 순위
                </span>
                <button type="button" onClick={backresult}>
                    x
                </button>
            </div>
                
                <div className="realTimeRank">
                    <div className="realRanking">
                        <span className="spanRanking">
                            1위
                        </span>
                    </div>
                    <div className="realPer">
                        <div className="percent">
                            <span className="spanPer">
                                {parseInt(topType[0].value/totalLength*100)}%
                            </span>
                        </div>
                        <div>
                            <span>
                                유형 명칭
                            </span>
                        </div>
                    </div>
                    <div className="realImg">
                    <img src={require(`../Img/${topType[0].type}.png`).default} className = "rank_Img" alt="rank_Img" />
                    </div>
                </div>
                <div className="realTimeRank">
                    <div className="realRanking">
                        <span className="spanRanking">
                            2위
                        </span>
                    </div>
                    <div className="realPer">
                        <div className="percent">
                            <span className="spanPer">
                                {parseInt(topType[1].value/totalLength*100)}%
                            </span>
                        </div>
                        <div>
                            <span>
                                유형 명칭
                            </span>
                        </div>
                    </div>
                    <div className="realImg">
                    <img src={require(`../Img/${topType[1].type}.png`).default} className = "rank_Img" alt="rank_Img" />
                    </div>
                </div>
                <div className="realTimeRank">
                    <div className="realRanking">
                        <span className="spanRanking">
                            3위
                        </span>
                    </div>
                    <div className="realPer">
                        <div className="percent">
                            <span className="spanPer">
                                {parseInt(topType[2].value/totalLength*100)}%
                            </span>
                        </div>
                        <div>
                            <span>
                                유형 명칭
                            </span>
                        </div>
                    </div>
                    <div className="realImg">
                    <img src={require(`../Img/${topType[2].type}.png`).default} className = "rank_Img" alt="rank_Img" />
                    </div>
                </div>
                <div className="realTimeRank">
                    <div className="realRanking">
                        <span className="spanRanking">
                            4위
                        </span>
                    </div>
                    <div className="realPer">
                        <div className="percent">
                            <span className="spanPer">
                                {parseInt(topType[3].value/totalLength*100)}%
                            </span>
                        </div>
                        <div>
                            <span>
                                유형 명칭
                            </span>
                        </div>
                    </div>
                    <div className="realImg">
                    <img src={require(`../Img/${topType[3].type}.png`).default} className = "rank_Img" alt="rank_Img" />
                    </div>
                </div>
                <div className="realTimeRank">
                    <div className="realRanking">
                        <span className="spanRanking">
                            5위
                        </span>
                    </div>
                    <div className="realPer">
                        <div className="percent">
                            <span className="spanPer">
                                {parseInt(topType[4].value/totalLength*100)}%
                            </span>
                        </div>
                        <div>
                            <span>
                                유형 명칭
                            </span>
                        </div>
                    </div>
                    <div className="realImg">
                    <img src={require(`../Img/${topType[4].type}.png`).default} className = "rank_Img" alt="rank_Img" />
                    </div>
                </div>
                <div className="realTimeRank">
                    <div className="realRanking">
                        <span className="spanRanking">
                            6위
                        </span>
                    </div>
                    <div className="realPer">
                        <div className="percent">
                            <span className="spanPer">
                                {parseInt(topType[5].value/totalLength*100)}%
                            </span>
                        </div>
                        <div>
                            <span>
                                유형 명칭
                            </span>
                        </div>
                    </div>
                    <div className="realImg">
                    <img src={require(`../Img/${topType[5].type}.png`).default} className = "rank_Img" alt="rank_Img" />
                    </div>
                </div>
                <div className="realTimeRank">
                    <div className="realRanking">
                        <span className="spanRanking">
                            7위
                        </span>
                    </div>
                    <div className="realPer">
                        <div className="percent">
                            <span className="spanPer">
                                {parseInt(topType[6].value/totalLength*100)}%
                            </span>
                        </div>
                        <div>
                            <span>
                                유형 명칭
                            </span>
                        </div>
                    </div>
                    <div className="realImg">
                    <img src={require(`../Img/${topType[6].type}.png`).default} className = "rank_Img" alt="rank_Img" />
                    </div>
                </div>

                <div className="result_share">
                <span className="result_share_title">
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

            <div className="pointshare">
                    <img src = {shareMethod} className="shareMethod" alt = "shareMethod" />
                </div>

            </div>
            </>
            ) : (
                <>
            <div className="result">
                <span className="result_box_title">투자고수 테스트</span>
                <div className="result_box">
                    <span className="nickname_title">
                        {result.nickname} 님은
                    </span>
                    <img src= {Img_array[result_array.indexOf(ImgName[0].value)]} className="result_img" alt="result_img" />
                    <div className="type_per">
                        나와 같은 유형 38%
                    </div>
                    <div className="sentence">
                        <img src = {result_sentence[result_array.indexOf(ImgName[0].value)]} className="sentence_img" alt="sentence_img" />
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
                        <CopyToClipboard text={"https://hscandoit.co.kr"}>
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
                        <img src={require(`../Img/level${topType[0].type}.png`).default} className = "img_most_type" alt="most_type" />
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
            ) }  
        </div>  
    ) 
}

export default Result;