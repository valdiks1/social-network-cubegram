import { Link, NavLink } from "react-router";
import SearchI from "../../assets/Search.svg";
import LogInModal from "../LogInModal/LogInModal";
import "./Navbar.css";
import {useState} from 'react';

const Navbar = (props) => {

    const [modalState, setModalState] = useState(false);

    return(<>
        <header>
            <nav>
                <div className="navbar-inner">
                    <div className="logo">
                        <Link to='/' className="logoLink" href="">Cubegram</Link>
                    </div>
                    <ul className="nav-links">
                        <li><NavLink to='/' className="nav-link" href="">Main</NavLink></li>
                        <li><NavLink to='/records'className="nav-link" href="">Records</NavLink></li>
                        <li><NavLink to='/rooms' className="nav-link" href="">Rooms</NavLink></li>
                    </ul>
                    <div className="right">
                        <a href=""><img className="searchI" src={SearchI}/></a>
                        <button onClick={() => setModalState(true)} className="login-btn">Log in</button>
                    </div>
                </div>
            </nav>
        </header>
        <LogInModal authStatus={props.authStatus} setAuthStatus={props.setAuthStatus} call={modalState} onDestroy={() => setModalState(false)} />
        </>
    )
}

export default Navbar