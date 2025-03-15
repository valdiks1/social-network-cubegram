import './Timer.css';

const Timer = ({type}) => {
    return(
        <div className="timer">
            <h2>Timer({type})</h2>
            <p className="scramble">
            D2 F2 L2 D2 U' F2 L2 F2 L2 F2 D2 L R2 F' R U L' B' D' F' L'
            </p>

            <div className="time">
                <p>00:00</p>
            </div>

            <div className="btn-group">
                <button>+2</button>
                |
                <button>DNF</button>
            </div>
        </div>
    )
}

export default Timer;