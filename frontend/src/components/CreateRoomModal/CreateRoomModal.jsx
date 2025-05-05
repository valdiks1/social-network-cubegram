import './CreateRoomModal.css';
import cross from "../../assets/images/cross.svg";
import { useState } from 'react';
import { createRoom } from '../../services/roomsService';

const CreateRoomModal = ({ call, onDestroy }) => {
    const [name, setName] = useState('');
    const [typeOfCube, setTypeOfCube] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleTypeOfCube = (e) => {
        setTypeOfCube(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createRoom(name, typeOfCube).then(() => onDestroy()).catch(e => console.log(e));
    }

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
                <form onSubmit={handleSubmit}>
                    <div className="body">
                        <div className="form-item">
                            <label htmlFor="room-name">Room name:</label>
                            <input 
                                value={name} 
                                onChange={handleName} 
                                type="text" 
                                id='room-name' 
                                placeholder='Room name'
                                required />
                        </div>
                        <div className="form-item">
                            <label htmlFor="type-of-cube-room">Type of cube:</label>
                            <ul className="type-of-cube-list">
                                <li>
                                    <input 
                                        value="2x2x2" 
                                        type="radio" 
                                        name='type-cube' 
                                        id='222'
                                        checked={typeOfCube === '2x2x2'}
                                        onChange={handleTypeOfCube} />
                                    <label htmlFor="222">2x2x2</label>
                                </li>
                                <li>
                                    <input 
                                        value="3x3x3" 
                                        type="radio" 
                                        name='type-cube' 
                                        id='333'
                                        checked={typeOfCube === '3x3x3'}
                                        onChange={handleTypeOfCube} />
                                    <label htmlFor="333">3x3x3</label>
                                </li>
                                <li>
                                    <input 
                                        value="4x4x4" 
                                        type="radio" 
                                        name='type-cube' 
                                        id='444'
                                        checked={typeOfCube === '4x4x4'}
                                        onChange={handleTypeOfCube} />
                                    <label htmlFor="444">4x4x4</label>
                                </li>
                                <li>
                                    <input 
                                        value="5x5x5" 
                                        type="radio" 
                                        name='type-cube' 
                                        id='555' 
                                        checked={typeOfCube === '5x5x5'}
                                        onChange={handleTypeOfCube}/>
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