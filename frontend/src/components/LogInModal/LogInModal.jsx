import './LogInModal.css';
import cross from "../../assets/images/cross.svg";
import {Link} from 'react-router';
import { useState } from 'react';
import {login} from '../../services/authService';
import { useNavigate } from 'react-router';

const LogInModal = ({ call, onDestroy, setAuthStatus, authStatus }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    if (!call) {
        return null;
    }

    const closeWnd = (e) => {
        if (e.target.className === 'login-modal') {
            onDestroy();
        }
    }

    

    const handleSubmit = () => {
        login(email, pass)
            .then(() => {
                setAuthStatus(true);
                onDestroy();
                navigate('/myprofile');
            })
            .catch((error) => {
                console.log(error.message);
                setErrorMessage(error.message);
            });
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
                            <label htmlFor="email">E-mail or login</label>
                            <input value={email} onChange={e => setEmail(e.target.value)} required placeholder='E-mail or login' id='email' type="email" />
                        </div>
                        <div className="form-item">
                            <label htmlFor="pass">Password</label>
                            <input value={pass} onChange={e => setPass(e.target.value)} required placeholder='Password' type="password" id='pass' />
                        </div>
                        <p className='error-message'>{errorMessage}</p>
                    </form>
                </div>
                <div className="login-modal-footer">
                    <Link to='/signup' className='signup'>Sign Up</Link>
                    <button onClick={handleSubmit} className='login' type='button'>Log In</button>
                </div>

            </div>
        </div>
    );
}

export default LogInModal