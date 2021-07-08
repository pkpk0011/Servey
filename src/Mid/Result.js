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
import KakaoShareButton from '../KakaoShareButton';
import { useState, useEffect } from 'react';

function Result (props) {
    
    const [loadingImg, setLoadingImg] = useState();

    const loadingImg1 = <img src = {loading1} alt ="loading" />;
    const loadingImg2 = <img src = {loading2} alt ="loading" />;
    const loadingImg3 = <img src = {loading3} alt ="loading" />;
    const loadingImg4 = <img src = {loading4} alt ="loading" />;

    const [loading, setLoading] = useState(props.location.state);

    useEffect(() => {
        setLoadingImg(loadingImg1);
        setTimeout(() => {
            setLoadingImg(loadingImg2);
        }, 1000);
        setTimeout(() => {
            setLoadingImg(loadingImg3);
        }, 2000);
        setTimeout(() => {
            setLoadingImg(loadingImg4);
        }, 3000);
        setTimeout(() => {
            setLoading();
        }, 4000);
    }, [])
    
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

    return (
        <div className="Result_area">
            {loading ? (
            <div className="loading">
                {
                    loadingImg
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
                <span className="share">
                    내 결과 공유하기
                </span>
                <div className="sharebox">
                    <KakaoShareButton />
                </div>
            </div>
            <div className="result_btn_box">
                <button type="button" className="rank">전체 순위 보러가기</button>
                <a href="./">
                    <button type="button" className="return_button">다시 풀기</button>
                </a>
            </div>
            </div>
            </>
            ) }  
        </div>  
    ) 
}

export default Result;