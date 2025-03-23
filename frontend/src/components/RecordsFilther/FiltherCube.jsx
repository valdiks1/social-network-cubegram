import './RecordsFilther.css';

const FiltherCube = ({all, text, img}) => {
    
    return(
        <div className={`filther-btn-cube ${all ? 'all' : ''}`}>
            {all ? <p className='all'>All types of cubes</p> : <div className='filther-btn-cube-inner'>
                <div className="img"><img src={img}/></div>
                <p className='text'>{text}</p>
                </div>}
        </div>
    )
}

export default FiltherCube;