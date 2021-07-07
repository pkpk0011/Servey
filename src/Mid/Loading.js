import './Loading.css';

function Loading (props) {

    const loading = () => {
        setTimeout(props.history.push('/result'), 5000);
    }
    
    return (
            <div className="loading_box">
            </div>
    )
}

export default Loading;