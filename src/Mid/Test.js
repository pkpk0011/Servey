// import { useState, useEffect } from 'react';
// import axios from "axios";
import './Test.css';

function Test (props) {

    // const [Page, setPage] = useState(0);
    // const [Value, setValue] = useState(30);
    // const [quiz_list, setQuiz_list] = useState([]);

    // const oneButton = () => {
    //     if (Page === 10) {
    //         props.history.push('/result',Value+1);
    //     }
    //     else {
    //         setPage(Page+1);
    //         setValue(Value+1);
    //     }
    // }
    // const twoButton = () => {
    //     if (Page === 10) {
    //         props.history.push('/result',Value+2);
    //     }
    //     else {
    //         setPage(Page+1);
    //         setValue(Value+2);
    //     }
    // }
    // const threeButton = () => {
    //     if (Page === 10) {
    //         props.history.push('/result',Value-1);
    //     }
    //     else {
    //         setPage(Page+1);
    //         setValue(Value-1);
    //     }
    // }
    // const fourButton = () => {
    //     if (Page === 10) {
    //         props.history.push('/result',Value-2);
    //     }
    //     else {
    //         setPage(Page+1);
    //         setValue(Value-2);
    //     }
    // }

    // useEffect(() => {
    //     axios.post('http://localhost:3001/quiz', {
    //     }).then(function(res){
    //         setQuiz_list(res.data.quiz_list)
    //     }).catch(function(error){
    //         console.log(error);
    //     })
    // }, [])

    // switch (Page) {
    //     case Page : return (
    //         <div className="Test_area">
    //             <div className="content_box">
    //                 <h3>
    //                     <span>Q{Page + 1}. {props.location.state}</span>
    //                     <span>{quiz_list[Page]?.QUIZNAME}</span>
    //                 </h3>
    //             </div>
    //             <div className="btn_box">
    //                 <button className = "one_btn" onClick={oneButton}>{quiz_list[Page]?.ONEQUIZ}</button>
    //                 <button className = "two_btn" onClick={twoButton}>{quiz_list[Page]?.TWOQUIZ}</button>
    //                 <button className = "three_btn" onClick={threeButton}>{quiz_list[Page]?.THREEQUIZ}</button>
    //                 <button className = "four_btn"onClick={fourButton}>{quiz_list[Page]?.FOURQUIZ}</button>
    //             </div>
    //             <div className = "statusBar">
    //                 <div className = "done" style={{width:`${100 / quiz_list.length * (Page+1)}%`}} />
    //             </div>
    //         </div>
    //     );
    //     default : return (
    //         <div>none</div>
    //     )
    // }

    return (
        <div className="Test_area">
            <div className="content_box">
                <h3>
                    <span>sdfsadf</span>
                    <span>asdfasdf</span>
                </h3>
            </div>
            <div className="btn_box">
                
            </div>
            <div className = "statusBar">
           
            </div>
        </div>
    );
    
}

export default Test;