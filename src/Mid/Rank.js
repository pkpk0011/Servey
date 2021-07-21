import './Rank.css';
import shareMethod from '../Img/shareMethod.png';
import KakaoShareButton from '../KakaoShareButton';
import copyLink from '../Img/copyLink.png';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useEffect } from 'react';

function Rank (props) {

    console.log(props.location.state);

    const nickname = props.match.params.nickname;
    const number = props.match.params.img;

    const rankValue = props.location.state[0];
    const clientLength = props.location.state[1];

    const linkAlert = () => {
        alert("클립보드에 복사되었습니다.")
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const goResult = () => {
        props.history.push(`/result/${nickname}/${number}`, "good");
    }

    return (
        <div className="Rank_area">
        {rankValue ? 
        <>
            <div className="title_total">
                <div className="go_result">
                <button className="backresult_btn" onClick={goResult}>
                    <i className="fas fa-chevron-left" />
                </button>
                </div>
            <div className = "realTimeTitle">
                <div className = "realTitle">
                    실시간 순위
                </div>
                <div className = "realTitleBottom" />
            </div>
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
                                {parseInt(rankValue[0].value/clientLength*100)}%
                            </span>
                        </div>
                        <div className="ranklevel">
                            <span className="spanranklevel">
                                {rankValue[0].level}
                            </span>
                        </div>
                    </div>
                    <div className="realImg">
                    <img src={require(`../Img/${rankValue[0].type}.png`).default} className = "rank_Img" alt="rank_Img" />
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
                                {parseInt(rankValue[1].value/clientLength*100)}%
                            </span>
                        </div>
                        <div className="ranklevel">
                            <span className="spanranklevel">
                                {rankValue[1].level}
                            </span>
                        </div>
                    </div>
                    <div className="realImg">
                    <img src={require(`../Img/${rankValue[1].type}.png`).default} className = "rank_Img" alt="rank_Img" />
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
                                {parseInt(rankValue[2].value/clientLength*100)}%
                            </span>
                        </div>
                        <div className="ranklevel">
                            <span className="spanranklevel">
                                {rankValue[2].level}
                            </span>
                        </div>
                    </div>
                    <div className="realImg">
                    <img src={require(`../Img/${rankValue[2].type}.png`).default} className = "rank_Img" alt="rank_Img" />
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
                                {parseInt(rankValue[3].value/clientLength*100)}%
                            </span>
                        </div>
                        <div className="ranklevel">
                            <span className="spanranklevel">
                                {rankValue[3].level}
                            </span>
                        </div>
                    </div>
                    <div className="realImg">
                    <img src={require(`../Img/${rankValue[3].type}.png`).default} className = "rank_Img" alt="rank_Img" />
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
                                {parseInt(rankValue[4].value/clientLength*100)}%
                            </span>
                        </div>
                        <div className="ranklevel">
                            <span className="spanranklevel">
                                {rankValue[4].level}
                            </span>
                        </div>
                    </div>
                    <div className="realImg">
                    <img src={require(`../Img/${rankValue[4].type}.png`).default} className = "rank_Img" alt="rank_Img" />
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
                                {parseInt(rankValue[5].value/clientLength*100)}%
                            </span>
                        </div>
                        <div className="ranklevel">
                            <span className="spanranklevel">
                                {rankValue[5].level}
                            </span>
                        </div>
                    </div>
                    <div className="realImg">
                    <img src={require(`../Img/${rankValue[5].type}.png`).default} className = "rank_Img" alt="rank_Img" />
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
                                {parseInt(rankValue[6].value/clientLength*100)}%
                            </span>
                        </div>
                        <div className="ranklevel">
                            <span className="spanranklevel">
                                {rankValue[6].level}
                            </span>
                        </div>
                    </div>
                    <div className="realImg">
                    <img src={require(`../Img/${rankValue[6].type}.png`).default} className = "rank_Img" alt="rank_Img" />
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
            :
            <div className="title_total">
                <div className="go_result">
                <button className="backresult_btn" onClick={goResult}>
                    <i className="fas fa-chevron-left" />
                </button>
                </div>
            <div className = "realTimeTitle">
                <div className = "realTitle">
                    실시간 순위
                </div>
                <div className = "realTitleBottom" />
            </div>
            </div>
        }
        </div>  
    ) 
}

export default Rank;