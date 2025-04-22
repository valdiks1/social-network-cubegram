import './Timer.css';
import { useState, useEffect, useRef } from "react";
import { randomScrambleForEvent } from "cubing/scramble";
import { addAttempt, updateAttempt } from '../../services/timerService';
import { formatTime } from '../../utils/time';

const Timer = ({ type, getMainAttempts }) => {
    const [time, setTime] = useState(0);
    const timeRef = useRef(0);
    const attemptIdRef = useRef(null);
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
                    timeRef.current = 0;
                    setTime(0);
                    setIsRunning(true);
                    setReady('');
                } else if (isRunning) {
                    const finalTime = timeRef.current;

                    attemptIdRef.current = crypto.randomUUID();

                    addAttempt(attemptIdRef.current, finalTime,type).then(() => {
                        getMainAttempts();
                    })
                    
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
                timeRef.current += 10;
                setTime(timeRef.current);
            }, 10);
        } else {
            clearInterval(timerInterval);
        }
        return () => clearInterval(timerInterval);
    }, [isRunning]);

    

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
    }, [type, changeScramble]);

    function handlePlus2(){
        const newPlus2 = !plus2;
        setPlus2(newPlus2);
        if(attemptIdRef.current){
            updateAttempt(attemptIdRef.current, {plus2: newPlus2, dnf: dnf}).then(() => {
                getMainAttempts();
            }).catch(e => console.log(e));
        }
        
    }

    function handleDnf() {
        const newDnf = !dnf;
        setDnf(newDnf);
        if(attemptIdRef.current){
            updateAttempt(attemptIdRef.current, {plus2: plus2, dnf: newDnf}).then(() => {
                getMainAttempts();
            }).catch(e => console.log(e));
        }
        
    }

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
                <button className={plus2 ? 'activeFlag' : ''} onClick={handlePlus2}>+2</button>
                |
                <button className={dnf ? 'activeFlag' : ''} onClick={handleDnf}>DNF</button>
            </div>
        </div>
    )
}

export default Timer;