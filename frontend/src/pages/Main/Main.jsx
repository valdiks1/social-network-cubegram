import { useState } from 'react';
import TypeOfCube from '../../components/TypeOfCube/TypeOfCube';
import './Main.css';

const Main = () => {

    const [typeOfCube, setTypeOfCube] = useState(3);
    return(
        <div className="main-container">
            <TypeOfCube setType={setTypeOfCube} />
            {typeOfCube}
        </div>
    );
}

export default Main;