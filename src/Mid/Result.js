import './Result.css';

function Result (props) {

    const result = props.location.state;
    console.log(props)
    return (
        <div className="Result_area">
            <div className="container">
            result : {result}

            <a href="./">
                <button type="button">다시 풀기</button>
            </a>
            </div>
        </div>
    )
}

export default Result;