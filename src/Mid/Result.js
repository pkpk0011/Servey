import { useState, useEffect } from 'react';
import './Result.css';
import crow from '../Img/crow.png';
import dungbeetle from '../Img/dungbeetle.jpg';
import meerkat from '../Img/meerkat.png';
import paresseux from '../Img/paresseux.png';
import puppy from '../Img/puppy.jpg';
import squirrel from '../Img/squirrel.png';
import sunfish from '../Img/sunfish.png';
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