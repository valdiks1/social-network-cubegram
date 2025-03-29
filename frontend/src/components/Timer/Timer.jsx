import './Timer.css';
import { useState, useEffect } from "react";
import { randomScrambleForEvent } from "cubing/scramble";

const Timer = ({ type }) => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isHolding, setIsHolding] = useState(false);
    const [ready, setReady] = useState('');
    const [scramble, setScramble] = useState('');
    const [changeScramble, setChangeScramble] = useState(0);
    const [plus2, setPlus2] = useState(false);
    const [dnf, setDnf] = useState(false);
    
    let timerInterval;

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.code === "Space") {
                event.preventDefault();
                if (!isRunning && !isHolding) {
                    setIsHolding(true);
                    setReady('ready');
                    setPlus2(false);
                    setDnf(false);
                }
            }
        };

        const handleKeyUp = (event) => {
            if (event.code === "Space") {
                event.preventDefault();
                if (isHolding) {
                    setTime(0);
                    setIsRunning(true);
                    setReady('');
                } else if (isRunning) {
                    setIsRunning(false);
                    setChangeScramble(changeScramble+1);
                }
                setIsHolding(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown, { passive: false });
        window.addEventListener("keyup", handleKeyUp, { passive: false });
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [isRunning, isHolding]);

    useEffect(() => {
        if (isRunning) {
            timerInterval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else {
            clearInterval(timerInterval);
        }
        return () => clearInterval(timerInterval);
    }, [isRunning]);

    const formatTime = (milliseconds) => {
        const minutes = Math.floor(milliseconds / 60000);
        const seconds = Math.floor((milliseconds % 60000) / 1000);
        const ms = Math.floor((milliseconds % 1000) / 10);
        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${ms.toString().padStart(2, "0")}`;
    };

    const getScramble = async () => {
        let puzzle;
        switch (type) {
            case '2x2x2':
                puzzle = '222';
                break;
            case '3x3x3':
                puzzle = '333';
                break;
            case '4x4x4':
                puzzle = '444';
                break;
            case '5x5x5':
                puzzle = '555';
                break;
        }
        const scramble = await randomScrambleForEvent(puzzle);
        return scramble.toString();
    }


    useEffect(() => {
        setScramble(getScramble());
    },[type,changeScramble]);

    return (
        <div className="timer">
            <h2>Timer({type})</h2>
            <p className="scramble">
                {scramble}
            </p>

            <div className="time">
                <p className={ready}>{dnf ? 'DNF' : (formatTime(time) + (plus2 ? '+' : ''))}</p>
            </div>

            <div className="btn-group">
                <button className={plus2 ? 'activeFlag' : ''} onClick={() => setPlus2(!plus2)}>+2</button>
                |
                <button className={dnf ? 'activeFlag' : ''} onClick={() => setDnf(!dnf)}>DNF</button>
            </div>
        </div>
    )
}

export default Timer;