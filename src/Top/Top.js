import './Top.css';
import POINTMONSTER from '../Img/POINTMONSTER.png';
import { Link } from 'react-router-dom';

function Top() {

    return (
        <div className="header">
            <h1>
                <Link to="/">
                    <img src={POINTMONSTER} className="logo" alt="profile" />
                </Link>
            </h1>
        </div>
    )
}

export default Top