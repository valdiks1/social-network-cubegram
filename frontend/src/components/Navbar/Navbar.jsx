import { Link, NavLink } from "react-router";
import SearchI from "../../assets/Search.svg";
import "./Navbar.css";

const Navbar = () => {

    return(
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
                        <button className="login-btn">Log in</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar