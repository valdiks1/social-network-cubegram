import './TypeOfCube.css';

const CubeBtn = ({text, img, onClick}) => {

    return(
        <div className="cube-btn" onClick={onClick}>
            <h3>{text}</h3>
            <div className="img"><img src={img}/></div>
            
        </div>
    )
}

export default CubeBtn;