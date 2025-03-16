import { useState } from 'react';
import SessionGraph from '../../components/SessionGraph/SessionGraph';
import SessionInfo from '../../components/SessionInfo/SessionInfo';
import SessionResults from '../../components/SessionResults/SessionResults';
import Timer from '../../components/Timer/Timer';
import TypeOfCube from '../../components/TypeOfCube/TypeOfCube';
import './Main.css';

const Main = () => {

    const [typeOfCube, setTypeOfCube] = useState("3x3x3");
    return(
        <div className="main-container">
            <TypeOfCube setType={setTypeOfCube} />
            <section className="timerAndResults">
                <Timer type={typeOfCube} />
                <SessionResults />
            </section>
            <section className="graphAndInfo">
                <SessionGraph />
                <SessionInfo />
            </section>
        </div>
    );
}

export default Main;