import React, { useState } from 'react';
import './Home.css';

function Home (props) {
    const [nickname, setNickname] = useState("");
    function onChange(e){
        setNickname(e.target.value);
    }

function onClick () {
    setNickname(nickname);
    props.history.push('/test',nickname);
}

    return (
        <div className="home_area">
            <span>
                나는 부자가 될 수 있을까?
            </span>
            <span>
                투자성향으로 알아보는,
            </span>
            <span>
                나는 어떤 동물일까?
            </span>
            <div>
                <input type="text" value={nickname} className="nickname" onChange={onChange} placeholder="닉네임" />
            </div>
            <div>
                <a href="/test" className="a_start">
                    <button type="button" onClick = {onClick} className="btn_start">
                        START
                    </button>
                </a>
            </div>
            <div className="div_participant">
                <span className="span_participant">
                    참여자수
                </span>
            </div>
        </div>
    )
}

export default Home;