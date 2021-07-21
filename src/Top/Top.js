import './Top.css';
import POINTMONSTER from '../Img/POINTMONSTER.png';

function Top() {

    return (
        <div className="header">
            <h1>
                <a href="/">
                    <img src={POINTMONSTER} className="logo" alt="profile" />
                </a>
            </h1>
        </div>
    )
}

export default Top;