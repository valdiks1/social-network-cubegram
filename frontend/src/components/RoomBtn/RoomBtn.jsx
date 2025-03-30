import './RoomBtn.css';

const RoomBtn = ({img,name,type}) => {
    return(
        <div className="room-btn margin-room">
            <div className="room-btn-inner">
                <div className="img">
                    <img src={img} />
                </div>
                <p>{type}</p>
                <p>{name}</p>
            </div>
        </div>
    )
}

export default RoomBtn;