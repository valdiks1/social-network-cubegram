import { useState } from 'react';
import Timer from '../../components/Timer/Timer';
import TypeOfCube from '../../components/TypeOfCube/TypeOfCube';
import './Main.css';

const Main = () => {

    const [typeOfCube, setTypeOfCube] = useState(3);
    return(
        <div className="main-container">
            <TypeOfCube setType={setTypeOfCube} />
            <section className="timerAndResults">
                <Timer />
            </section>
        </div>
    );
}

export default Main;