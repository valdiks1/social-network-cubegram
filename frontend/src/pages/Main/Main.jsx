import { useEffect } from 'react';
import { useState } from 'react';
import SessionGraph from '../../components/SessionGraph/SessionGraph';
import SessionInfo from '../../components/SessionInfo/SessionInfo';
import SessionResults from '../../components/SessionResults/SessionResults';
import Timer from '../../components/Timer/Timer';
import TypeOfCube from '../../components/TypeOfCube/TypeOfCube';
import { getAttemptsByCubeType } from '../../services/resultsService';
import './Main.css';

const Main = () => {

    const [typeOfCube, setTypeOfCube] = useState("3x3x3");
    const [attempts, setAttempts] = useState({allAttempts: []});

    const getAttempts = () => {
        getAttemptsByCubeType(typeOfCube).then(r => {
            setAttempts(r);
        }).catch(e => console.log(e));
    }

    useEffect(() => {
        getAttempts();
    }, [typeOfCube]);

    return(
        <div className="main-container">
            <TypeOfCube setType={setTypeOfCube} />
            <section className="timerAndResults">
                <Timer getMainAttempts={() => getAttempts()} type={typeOfCube} />
                <SessionResults attempts={attempts.allAttempts} />
            </section>
            <section className="graphAndInfo">
                <SessionGraph />
                <SessionInfo attempts={attempts} />
            </section>
        </div>
    );
}

export default Main;