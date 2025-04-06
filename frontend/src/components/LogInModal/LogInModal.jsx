import './LogInModal.css';
import cross from "../../assets/images/cross.svg";
import {Link} from 'react-router';

const LogInModal = ({ call, onDestroy }) => {
    if (!call) {
        return null;
    }

    const closeWnd = (e) => {
        if (e.target.className === 'login-modal') {
            onDestroy();
        }
    }

    return (
        <div onClick={closeWnd} className='login-modal'>
            <div className='login-modal-content'>
                <div className="login-modal-header">
                    <h2>Log In</h2>
                    <div onClick={onDestroy} className="close"><img src={cross} alt="close" /></div>
                </div>
                <div className="login-modal-body">
                    <form>
                        <div className="form-item">
                            <label htmlFor="email">E-mail</label>
                            <input placeholder='E-mail' id='email' type="email" />
                        </div>
                        <div className="form-item">
                            <label htmlFor="pass">Password</label>
                            <input placeholder='Password' type="password" id='pass' />
                        </div>
                    </form>
                </div>
                <div className="login-modal-footer">
                    <Link className='signup'>Sign Up</Link>
                    <button className='login' type='submit'>Log In</button>
                </div>

            </div>
        </div>
    );
}

export default LogInModal