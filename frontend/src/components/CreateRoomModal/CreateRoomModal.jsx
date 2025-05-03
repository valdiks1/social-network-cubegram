import './CreateRoomModal.css';
import cross from "../../assets/images/cross.svg";

const CreateRoomModal = ({ call, onDestroy }) => {
    if (!call) {
        return null;
    }

    const closeWnd = (e) => {
        if (e.target.className === 'create-room-modal') {
            onDestroy();
        }
    }

    return (
        <div onClick={closeWnd} className="create-room-modal">
            <div className="create-room-modal-content">
                <div className="header">
                    <img
                        onClick={onDestroy}
                        src={cross}
                        alt="cross"
                        role="button"
                        tabIndex={0}
                    />
                </div>
                <form>
                    <div className="body">
                        <div className="form-item">
                            <label htmlFor="room-name">Room name:</label>
                            <input type="text" id='room-name' placeholder='Room name' />
                        </div>
                        <div className="form-item">
                            <label htmlFor="type-of-cube-room">Type of cube:</label>
                            <ul className="type-of-cube-list">
                                <li>
                                    <input type="radio" name='type-cube' id='222' />
                                    <label htmlFor="222">2x2x2</label>
                                </li>
                                <li>
                                    <input type="radio" name='type-cube' id='333' />
                                    <label htmlFor="333">3x3x3</label>
                                </li>
                                <li>
                                    <input type="radio" name='type-cube' id='444' />
                                    <label htmlFor="444">4x4x4</label>
                                </li>
                                <li>
                                    <input type="radio" name='type-cube' id='555' />
                                    <label htmlFor="555">5x5x5</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer">
                        <button onClick={onDestroy}>Cancel</button>
                        <button type='submit'>Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateRoomModal;