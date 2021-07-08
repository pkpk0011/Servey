import { useState, useEffect } from 'react';
import './Result.css';
import crow from '../Img/crow.png';
import dungbeetle from '../Img/leveldungbeetle.png';
import meerkat from '../Img/levelmeerkat.png';
import paresseux from '../Img/levelparesseux.png';
import puppy from '../Img/levelpuppy.png';
import squirrel from '../Img/levelsquirrel.png';
import sunfish from '../Img/levelsunfish.png';
import loading1 from '../Img/loading1.png';
import loading2 from '../Img/loading2.png';
import loading3 from '../Img/loading3.png';
import loading4 from '../Img/loading4.png';
import rankexam from '../Img/rankexam.png';
import shareMethod from '../Img/shareMethod.png';
import KakaoShareButton from '../KakaoShareButton';
import Link from '../Img/Link.png';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function Result (props) {
    
    const [loadingImg, setLoadingImg] = useState(0);

    const [loading, setLoading] = useState(props.location.state);

    useEffect(() => {
        setLoadingImg(state => state+1);
        setTimeout(() => {
            setLoadingImg(state => state+1);
        }, 1000);
        setTimeout(() => {
            setLoadingImg(state => state+1);
        }, 2000);
        setTimeout(() => {
            setLoadingImg(state => state+1);
        }, 3000);
        setTimeout(() => {
            setLoading();
        }, 4000);
    }, []);
    
    console.log(props)
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

    const result_sentence = [
        <span className="result_sentence">까마귀가 반짝이는 것을 골라내듯<br />알짜배기 종목만 쏙쏙 찾아내는 능력을 지녔다<br />부러운 능력이다.</span>,
        <span className="result_sentence">티끌모아 큰 O을 꿈꾸며<br />상대적으로 안정적인 투자를 실현한다</span>,
        <span className="result_sentence">뭐? 이번엔 그게 떡상이라고?!<br />팔랑귀를 지녔다.<br />하지만 이미 주변 친구도 미어캣형일 가능성이 높다.<br />조금 신중해질 필요가 있다</span>,
        <span className="result_sentence">어떤 생각을 하고 있는지 알 수 없다.<br />투자에 성공을 하든 실패를 하든 평정심을 잃지 않는다.<br />사실 투자에 관심이 있는지도 알 수 없…</span>,
        <span className="result_sentence">오를 것이란 기대와 망하지 않을 것이란 믿음.<br />어느쪽이든 희망차다.<br />관망하는 경향이 있기 때문에<br />자연스레 이어진 장기투자가 좋은 결과로 이어지기도</span>,
        <span className="result_sentence">겨우내 먹이를 비축하듯<br />이것저것 사모으는 경향이 있다.<br />분산투자는 칭찬할만 하다</span>,
        <span className="result_sentence">각종 스트레스로 인해 단명할 위험이 높다.<br />안전한 은행과 함께하자</span>
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
    
    const Img_array = [crow, dungbeetle, meerkat, paresseux, puppy, squirrel, sunfish];
    
    // console.log(result_array.indexOf(ImgName[0].value));

    const linkAlert = () => {
        alert("클립보드에 복사되었습니다.")
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
                    <img src={loading4} alt ="loading" />
            }
            </div>
            ) : (
                <>
            <div className="result">
                <span className="result_box_title">투자고수 테스트</span>
                <div className="result_box">
                    <span className="nickname_title">
                        {result.nickname} 님은
                    </span>
                    <img src= {Img_array[result_array.indexOf(ImgName[0].value)]} className="result_img" alt="result_img" />
                    <div>
                        나와 같은 유형 38%
                    </div>
                    <div className="sentence">
                        {result_sentence[result_array.indexOf(ImgName[0].value)]}
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
                        <button id="copy_url" className="btn_copyurl" style={{backgroundImage: {Link}}} onClick={linkAlert}>
                            <img className="copyurl" src={Link} alt="Link-share-icon" />
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
                        <img src={rankexam} className = "img_most_type" alt="most_type" />
                    </div>
                </div>
                <div>
                    <button type="button" className="rank">전체 순위 보러가기</button>
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