import React, { useState } from 'react';
import './Test.css';

function Test (props) {

    const [Page, setPage] = useState(1);

    const [clientResult, setClientResult] = useState({
        nickname: props.location.state,
        meerkat: 0,
        sunfish: 0,
        crow: 0,
        dungbeetle: 0,
        paresseux: 0,
        squirrel: 0,
        puppy: 0
        });

    const [back1, setBack1] = useState();
    const [back2, setBack2] = useState();
    const [back3, setBack3] = useState();
    const [back4, setBack4] = useState();
    const [back5, setBack5] = useState();
    const [back6, setBack6] = useState();
    const [back7, setBack7] = useState();
    const [back8, setBack8] = useState();
    const [back9, setBack9] = useState();
    const [back10, setBack10] = useState();

    const oneButton = () => {
        if (Page === 1) {
            setPage(Page+1);
            setClientResult({ ...clientResult, meerkat: clientResult.meerkat+3 });
            setBack1(clientResult);
        }
        else if (Page === 2) {
            setPage(Page+1);
            setClientResult({ ...clientResult, dungbeetle: clientResult.dungbeetle+3 });
            setBack2(clientResult);
        }
        else if (Page === 3) {
            setPage(Page+1);
            setClientResult({ ...clientResult, crow: clientResult.crow+3 });
            setBack3(clientResult);
        }
        else if (Page === 4) {
            setPage(Page+1);
            setClientResult({ ...clientResult, meerkat: clientResult.meerkat+3 });
            setBack4(clientResult);
        }
        else if (Page === 5) {
            setPage(Page+1);
            setClientResult({ ...clientResult, crow: clientResult.crow+3 });
            setBack5(clientResult);
        }
        else if (Page === 6) {
            setPage(Page+1);
            setClientResult({ ...clientResult, meerkat: clientResult.meerkat+3 });
            setBack6(clientResult);
        }
        else if (Page === 7) {
            setPage(Page+1);
            setClientResult({ ...clientResult, puppy: clientResult.puppy+3 });
            setBack7(clientResult);
        }
        else if (Page === 8) {
            setPage(Page+1);
            setClientResult({ ...clientResult, crow: clientResult.crow+3 });
            setBack8(clientResult);
        }
        else if (Page === 9) {
            setPage(Page+1);
            setClientResult({ ...clientResult, puppy: clientResult.puppy+3 });
            setBack9(clientResult);
        }
        else if (Page === 10) {
            setPage(Page+1);
            setClientResult({ ...clientResult, puppy: clientResult.puppy+3, dungbeetle: clientResult.dungbeetle+3 });
            setBack10(clientResult);
        }
        else {
            props.history.push("/result", { ...clientResult, meerkat: clientResult.meerkat+3 });
        }
    }
    const twoButton = () => {
        if (Page === 1) {
            setPage(Page+1);
            setClientResult({ ...clientResult, dungbeetle: clientResult.dungbeetle+3, squirrel: clientResult.squirrel+3 });
            setBack1(clientResult);
        }
        else if (Page === 2) {
            setPage(Page+1);
            setClientResult({ ...clientResult, puppy: clientResult.puppy+3 });
            setBack2(clientResult);
        }
        else if (Page === 3) {
            setPage(Page+1);
            setClientResult({ ...clientResult, sunfish: clientResult.sunfish+3 });
            setBack3(clientResult);
        }
        else if (Page === 4) {
            setPage(Page+1);
            setClientResult({ ...clientResult, dungbeetle: clientResult.dungbeetle+3 });
            setBack4(clientResult);
        }
        else if (Page === 5) {
            setPage(Page+1);
            setClientResult({ ...clientResult, squirrel: clientResult.squirrel+3 });
            setBack5(clientResult);
        }
        else if (Page === 6) {
            setPage(Page+1);
            setClientResult({ ...clientResult, puppy: clientResult.puppy+3 });
            setBack6(clientResult);
        }
        else if (Page === 7) {
            setPage(Page+1);
            setClientResult({ ...clientResult, squirrel: clientResult.squirrel+3 });
            setBack7(clientResult);
        }
        else if (Page === 8) {
            setPage(Page+1);
            setClientResult({ ...clientResult, puppy: clientResult.puppy+3 });
            setBack8(clientResult);
        }
        else if (Page === 9) {
            setPage(Page+1);
            setClientResult({ ...clientResult, crow: clientResult.crow+3 });
            setBack9(clientResult);
        }
        else if (Page === 10) {
            setPage(Page+1);
            setClientResult({ ...clientResult, crow: clientResult.crow+3 });
            setBack10(clientResult);
        }
        else {
            props.history.push("/result", { ...clientResult, dungbeetle: clientResult.dungbeetle+3 });
        }
    }
    const threeButton = () => {
        if (Page === 1) {
            setPage(Page+1);
            setClientResult({ ...clientResult, sunfish: clientResult.sunfish+3 });
            setBack1(clientResult);
        }
        else if (Page === 2) {
            setPage(Page+1);
            setClientResult({ ...clientResult, meerkat: clientResult.meerkat+3 });
            setBack2(clientResult);
        }
        else if (Page === 3) {
            setPage(Page+1);
            setClientResult({ ...clientResult, puppy: clientResult.puppy+3 });
            setBack3(clientResult);
        }
        else if (Page === 4) {
            setPage(Page+1);
            setClientResult({ ...clientResult, squirrel: clientResult.squirrel+3 });
            setBack4(clientResult);
        }
        else if (Page === 5) {
            setPage(Page+1);
            setClientResult({ ...clientResult, dungbeetle: clientResult.dungbeetle+3 });
            setBack5(clientResult);
        }
        else if (Page === 6) {
            setPage(Page+1);
            setClientResult({ ...clientResult, crow: clientResult.crow+3 });
            setBack6(clientResult);
        }
        else if (Page === 7) {
            setPage(Page+1);
            setClientResult({ ...clientResult, dungbeetle: clientResult.dungbeetle+3 });
            setBack7(clientResult);
        }
        else if (Page === 8) {
            setPage(Page+1);
            setClientResult({ ...clientResult, dungbeetle: clientResult.dungbeetle+3 });
            setBack8(clientResult);
        }
        else if (Page === 9) {
            setPage(Page+1);
            setClientResult({ ...clientResult, meerkat: clientResult.meerkat+3 });
            setBack9(clientResult);
        }
        else if (Page === 10) {
            setPage(Page+1);
            setClientResult({ ...clientResult, squirrel: clientResult.squirrel+3 });
            setBack10(clientResult);
        }
        else {
            props.history.push("/result", { ...clientResult, crow: clientResult.crow+3 });
        }
    }
    const fourButton = () => {
        if (Page === 1) {
            setPage(Page+1);
            setClientResult({ ...clientResult, dungbeetle: clientResult.dungbeetle+3, crow: clientResult.crow+3 });
            setBack1(clientResult);
        }
        else if (Page === 2) {
            setPage(Page+1);
            setClientResult({ ...clientResult, crow: clientResult.crow+3 });
            setBack2(clientResult);
        }
        else if (Page === 3) {
            setPage(Page+1);
            setClientResult({ ...clientResult, paresseux: clientResult.paresseux+10 });
            setBack3(clientResult);
        }
        else if (Page === 4) {
            setPage(Page+1);
            setClientResult({ ...clientResult, sunfish: clientResult.sunfish+3 });
            setBack4(clientResult);
        }
        else if (Page === 5) {
            setPage(Page+1);
            setClientResult({ ...clientResult, paresseux: clientResult.paresseux+10 });
            setBack5(clientResult);
        }
        else if (Page === 6) {
            setPage(Page+1);
            setClientResult({ ...clientResult, dungbeetle: clientResult.dungbeetle+3 });
            setBack6(clientResult);
        }
        else if (Page === 7) {
            setPage(Page+1);
            setClientResult({ ...clientResult, sunfish: clientResult.sunfish+3 });
            setBack7(clientResult);
        }
        else if (Page === 8) {
            setPage(Page+1);
            setClientResult({ ...clientResult, sunfish: clientResult.sunfish+3, meerkat: clientResult.meerkat+3 });
            setBack8(clientResult);
        }
        else if (Page === 9) {
            setPage(Page+1);
            setClientResult({ ...clientResult, sunfish: clientResult.sunfish+3 });
            setBack9(clientResult);
        }
        else if (Page === 10) {
            setPage(Page+1);
            setClientResult({ ...clientResult, meerkat: clientResult.meerkat+3 });
            setBack10(clientResult);
        }
        else {
            props.history.push("/result", { ...clientResult, sunfish: clientResult.sunfish+3 });
        }
    }

    const PageBack = () => {
        setPage(Page-1);
        if (Page === 2) {
            setClientResult(back1);
        }
        else if (Page === 3) {
            setPage(Page-1);
            setClientResult(back2);
        }
        else if (Page === 4) {
            setPage(Page-1);
            setClientResult(back3);
        }
        else if (Page === 5) {
            setPage(Page-1);
            setClientResult(back4);
        }
        else if (Page === 6) {
            setPage(Page-1);
            setClientResult(back5);
        }
        else if (Page === 7) {
            setPage(Page-1);
            setClientResult(back6);
        }
        else if (Page === 8) {
            setPage(Page-1);
            setClientResult(back7);
        }
        else if (Page === 9) {
            setPage(Page-1);
            setClientResult(back8);
        }
        else if (Page === 10) {
            setPage(Page-1);
            setClientResult(back9);
        }
        else {
            setPage(Page-1);
            setClientResult(back10);
        }
    }

    switch (Page) {
        case 1 : return (
            <div className="Test_area">
                <div className="test_title">
                    투자고수 테스트
                </div>
                    <div className="status">
                    <div className="back">
                        
                    </div>
                        <div className = "statusBar">
                            <div className = "done" style={{width:`${100 / 11 * (Page)}%`}} />
                        </div>
                        <div className="statusBar_Num">
                            {Page} / 11
                        </div>
                    </div>
                <div className="content_box">
                        <div className="subject">
                            <span className="subject1">남들 다 한다는 주식...</span>
                            
                            <span className="subject2">나도 드디어...!</span>
                        </div>
                    <div className="btn_box">
                        <button className = "one_btn" onClick={oneButton}>하이리스크 하이리턴! 영끌이다!!!</button>
                        <button className = "two_btn" onClick={twoButton}>적금보단 주식이지! 여유자금 투자!</button>
                        <button className = "three_btn" onClick={threeButton}>일단 어떤지 살짝 맛만 보자</button>
                        <button className = "four_btn"onClick={fourButton}>투자 전에 분석부터 완벽히 끝내야지</button>
                    </div>
                </div>
            </div>
        );
        case 2 : return (
            <div className="Test_area">
                <div className="test_title">
                    투자고수 테스트
                </div>
                <div className="status">
                    <div className="back">
                        <button className="back_btn" onClick={PageBack}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                    </div>
                    <div className = "statusBar">
                        <div className = "done" style={{width:`${100 / 11 * (Page)}%`}} />
                    </div>
                    <div className="statusBar_Num">
                        {Page} / 11
                    </div>
                </div>
                <div className="content_box">
                        <div className="subject">
                            <span className="subject1">드디어 샀당 첫 주식!</span>
                            <span className="subject2">1주당 가격은?</span>
                        </div>
                    <div className="btn_box">
                        <button className = "one_btn" onClick={oneButton}>과자 냠냠</button>
                        <button className = "two_btn" onClick={twoButton}>피자 한판</button>
                        <button className = "three_btn" onClick={threeButton}>에어팟이 몇 개?!</button>
                        <button className = "four_btn"onClick={fourButton}>이 정도면 차를...?</button>
                    </div>
                </div>
            </div>
        );
        case 3 : return (
            <div className="Test_area">
                <div className="test_title">
                    투자고수 테스트
                </div>
                <div className="status">
                    <div className="back">
                        <button className="back_btn" onClick={PageBack}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                    </div>
                    <div className = "statusBar">
                        <div className = "done" style={{width:`${100 / 11 * (Page)}%`}} />
                    </div>
                    <div className="statusBar_Num">
                        {Page} / 11
                    </div>
                </div>
                <div className="content_box">
                        <div className="subject">
                            <span className="subject1">내가 산 주식이</span>
                            <span className="subject2">브레이크 없이 급락한다!!!</span>
                        </div>
                    <div className="btn_box">
                        <button className = "one_btn" onClick={oneButton}>지금이 바닥이다! 더 사야지!</button>
                        <button className = "two_btn" onClick={twoButton}>안돼...더 내려가기 전에 당장 팔아야지!</button>
                        <button className = "three_btn" onClick={threeButton}>잠깐의 폭풍우겠지...금방 회복 되겠지...? 존버는 승리한다!</button>
                        <button className = "four_btn"onClick={fourButton}>zzz...(꿀잠 자는 중)</button>
                    </div>
                </div>
            </div>
        );
        case 4 : return (
            <div className="Test_area">
                <div className="test_title">
                    투자고수 테스트
                </div>
                <div className="status">
                <div className="back">
                        <button className="back_btn" onClick={PageBack}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                    </div>
                    <div className = "statusBar">
                        <div className = "done" style={{width:`${100 / 11 * (Page)}%`}} />
                    </div>
                    <div className="statusBar_Num">
                        {Page} / 11
                    </div>
                </div>
                <div className="content_box">
                        <div className="subject">
                            <span className="subject1">대화가 하고 싶어졌다...</span>
                            <span className="subject2"></span>
                        </div>
                    <div className="btn_box">
                        <button className = "one_btn" onClick={oneButton}>와...아니...지금 주식봄</button>
                        <button className = "two_btn" onClick={twoButton}>대화할 여력도 없다... 휴대폰을 꺼내서 확인한다...이런</button>
                        <button className = "three_btn" onClick={threeButton}>무념무상. 하지만 귀는 열려있다</button>
                        <button className = "four_btn"onClick={fourButton}>이제 주식 말고 다른 얘기...</button>
                    </div>
                </div>
            </div>
        );
        case 5 : return (
            <div className="Test_area">
                <div className="test_title">
                    투자고수 테스트
                </div>
                <div className="status">
                <div className="back">
                        <button className="back_btn" onClick={PageBack}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                    </div>
                    <div className = "statusBar">
                        <div className = "done" style={{width:`${100 / 11 * (Page)}%`}} />
                    </div>
                    <div className="statusBar_Num">
                        {Page} / 11
                    </div>
                </div>
                <div className="content_box">
                        <div className="subject">
                            <span className="subject1">초심자의 행운인가!!!</span>
                            <span className="subject2">다시 빨간색으로 변했다!</span>
                        </div>
                    <div className="btn_box">
                        <button className = "one_btn" onClick={oneButton}>이제 급등하겠지?! 벼락부자 되는 거겠지?! 더 투자한다!</button>
                        <button className = "two_btn" onClick={twoButton}>불안하지만 조금 더 오르길 기다려본다</button>
                        <button className = "three_btn" onClick={threeButton}>주식이랑 안 맞는듯...손절한다!</button>
                        <button className = "four_btn"onClick={fourButton}>zzz....(여전히 꿀잠 중)</button>
                    </div>
                </div>
            </div>
        );
        case 6 : return (
            <div className="Test_area">
                <div className="test_title">
                    투자고수 테스트
                </div>
                <div className="status">
                <div className="back">
                        <button className="back_btn" onClick={PageBack}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                    </div>
                    <div className = "statusBar">
                        <div className = "done" style={{width:`${100 / 11 * (Page)}%`}} />
                    </div>
                    <div className="statusBar_Num">
                        {Page} / 11
                    </div>
                </div>
                <div className="content_box">
                        <div className="subject">
                            <span className="subject1">친구가 갑자기 종목을 추천한다!</span>
                            <span className="subject2">나의 반응은?</span>
                        </div>
                    <div className="btn_box">
                        <button className = "one_btn" onClick={oneButton}>뭐? 그게 떡상 각이라고? 당장 산다</button>
                        <button className = "two_btn" onClick={twoButton}>흠...그래? (흘려 듣는다)</button>
                        <button className = "three_btn" onClick={threeButton}>투자할만한 곳인지 꼼꼼하게 찾아본다</button>
                        <button className = "four_btn"onClick={fourButton}>이미 다른 계획으로 쓸 돈이 없다</button>
                    </div>
                </div>
            </div>
        );
        case 7 : return (
            <div className="Test_area">
                <div className="test_title">
                    투자고수 테스트
                </div>
                <div className="status">
                <div className="back">
                        <button className="back_btn" onClick={PageBack}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                    </div>
                    <div className = "statusBar">
                        <div className = "done" style={{width:`${100 / 11 * (Page)}%`}} />
                    </div>
                    <div className="statusBar_Num">
                        {Page} / 11
                    </div>
                </div>
                <div className="content_box">
                        <div className="subject">
                            <span className="subject1">갑자기 투자할 돈이 더 생겼다!</span>
                            <span className="subject2">어디에 투자하는게 좋을까?</span>
                        </div>
                    <div className="btn_box">
                        <button className = "one_btn" onClick={oneButton}>뚝심있게 원래 투자한 곳에 몰빵한다!</button>
                        <button className = "two_btn" onClick={twoButton}>분산투자가 답이지!</button>
                        <button className = "three_btn" onClick={threeButton}>마음 고생이 너무 심했다 저축하자</button>
                        <button className = "four_btn"onClick={fourButton}>그냥 욜로족 하고싶어...</button>
                    </div>
                </div>
            </div>
        );
        case 8 : return (
            <div className="Test_area">
                <div className="test_title">
                    투자고수 테스트
                </div>
                <div className="status">
                <div className="back">
                        <button className="back_btn" onClick={PageBack}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                    </div>
                    <div className = "statusBar">
                        <div className = "done" style={{width:`${100 / 11 * (Page)}%`}} />
                    </div>
                    <div className="statusBar_Num">
                        {Page} / 11
                    </div>
                </div>
                <div className="content_box">
                        <div className="subject">
                            <span className="subject1">내가 산 주식은 지금....</span>
                            <span className="subject2"></span>
                        </div>
                    <div className="btn_box">
                        <button className = "one_btn" onClick={oneButton}>무야호~!~! 다 빨간색!</button>
                        <button className = "two_btn" onClick={twoButton}>만족스러운 수익률</button>
                        <button className = "three_btn" onClick={threeButton}>본전은 찾고 있는데..</button>
                        <button className = "four_btn"onClick={fourButton}>파랗다...</button>
                    </div>
                </div>
            </div>
        );
        case 9 : return (
            <div className="Test_area">
                <div className="test_title">
                    투자고수 테스트
                </div>
                <div className="status">
                <div className="back">
                        <button className="back_btn" onClick={PageBack}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                    </div>
                    <div className = "statusBar">
                        <div className = "done" style={{width:`${100 / 11 * (Page)}%`}} />
                    </div>
                    <div className="statusBar_Num">
                        {Page} / 11
                    </div>
                </div>
                <div className="content_box">
                        <div className="subject">
                            <span className="subject1">수익률이 얼마일 때</span>
                            <span className="subject2">파는게 좋을까?</span>
                        </div>
                    <div className="btn_box">
                        <button className = "one_btn" onClick={oneButton}>50% 이상!</button>
                        <button className = "two_btn" onClick={twoButton}>20% 이상!</button>
                        <button className = "three_btn" onClick={threeButton}>5% 이상!</button>
                        <button className = "four_btn"onClick={fourButton}>조금만 올라도 바로 팔아야지!</button>
                    </div>
                </div>
            </div>
        );
        case 10 : return (
            <div className="Test_area">
                <div className="test_title">
                    투자고수 테스트
                </div>
                <div className="status">
                <div className="back">
                        <button className="back_btn" onClick={PageBack}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                    </div>
                    <div className = "statusBar">
                        <div className = "done" style={{width:`${100 / 11 * (Page)}%`}} />
                    </div>
                    <div className="statusBar_Num">
                        {Page} / 11
                    </div>
                </div>
                <div className="content_box">
                        <div className="subject">
                            <span className="subject1">투자 기간은</span>
                            <span className="subject2">얼마를 생각해야 할까?</span>
                        </div>
                    <div className="btn_box">
                        <button className = "one_btn" onClick={oneButton}>연금처럼 평생 가야지</button>
                        <button className = "two_btn" onClick={twoButton}>5년은 묵혀야지!</button>
                        <button className = "three_btn" onClick={threeButton}>1년?</button>
                        <button className = "four_btn"onClick={fourButton}>인생 짧다..오르면 바로 사고 팔고!</button>
                    </div>
                </div>
            </div>
        );
        case 11 : return (
            <div className="Test_area">
                <div className="test_title">
                    투자고수 테스트
                </div>
                <div className="status">
                <div className="back">
                        <button className="back_btn" onClick={PageBack}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                    </div>
                    <div className = "statusBar">
                        <div className = "done" style={{width:`${100 / 11 * (Page)}%`}} />
                    </div>
                    <div className="statusBar_Num">
                        {Page} / 11
                    </div>
                </div>
                <div className="content_box">
                        <div className="subject">
                            <span className="subject1">아 요즘 코인도 많이 하던데...</span>
                            <span className="subject2">한번 해볼까?</span>
                        </div>
                    <div className="btn_box">
                        <button className = "one_btn" onClick={oneButton}>부자가 되려면 위험은 감수해야지!</button>
                        <button className = "two_btn" onClick={twoButton}>벌만큼 벌었다! 과유불급</button>
                        <button className = "three_btn" onClick={threeButton}>이미 하고 있다</button>
                        <button className = "four_btn"onClick={fourButton}>코인은 너무 위험한듯! 패스!</button>
                    </div>
                </div>
            </div>
        );
        
        default : return (
            <div>none</div>
        )
    }
    
}

export default Test;