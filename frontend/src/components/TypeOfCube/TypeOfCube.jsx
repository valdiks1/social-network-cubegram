import CubeBtn from './CubeBtn';
import cube2 from '../../assets/images/2cube.png';
import cube3 from '../../assets/images/3cube.png';
import cube4 from '../../assets/images/4cube.png';
import cube5 from '../../assets/images/5cube.png';
import './TypeOfCube.css';

const TypeOfCube = ({setType}) => {
    return(
        <div className="type-cube">
            <h2>Type of cube</h2>
            <div className="inner-type-cube">
                <CubeBtn onClick={() => setType("2x2x2")} text={"2x2x2"} img={cube2} />
                <CubeBtn onClick={() => setType("3x3x3")} text={"3x3x3"} img={cube3} />
                <CubeBtn onClick={() => setType("4x4x4")} text={"4x4x4"} img={cube4} />
                <CubeBtn onClick={() => setType("5x5x5")} text={"5x5x5"} img={cube5} />
            </div>
            
        </div>
    )
}

export default TypeOfCube;