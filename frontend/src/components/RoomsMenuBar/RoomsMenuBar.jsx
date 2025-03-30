import {NavLink} from 'react-router';
import './RoomsMenuBar.css';

const RoomsMenuBar = () => {
    return(
        <div className="rooms-menu-bar">
            <div className="rooms-menu-bar-inner">
                <ul>
                    <li>
                        <NavLink to='allrooms' className='rooms-menu-bar-link'>All rooms</NavLink>
                    </li>
                    <li>
                        <NavLink to='myrooms' className='rooms-menu-bar-link'>My rooms</NavLink>
                    </li>
                    <li>
                        <NavLink to='openrooms' className='rooms-menu-bar-link'>Open rooms</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default RoomsMenuBar;