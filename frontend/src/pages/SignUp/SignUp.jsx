import './SignUp.css';
import Select from "react-select";
import countries from "world-countries";
import { useState } from 'react';
import { useNavigate } from 'react-router';

const SignUp = () => {

    const navigate = useNavigate();

    const countryOptions = countries.map((country) => ({
        value: country.cca2,
        label: country.name.common,
    }));

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [name, setName] = useState('');
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reEnterPassword, setReEnterPassword] = useState('');
    const [sex, setSex] = useState('');
    const [date, setDate] = useState('');

    const [passwordsError, setPasswordsError] = useState('');

    function handleName(e) {
        setName(e.target.value);
    }

    function handleLogin(e) {
        setLogin(e.target.value);
    }

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handlePassword(e) {
        let pass = e.target.value;
        setPassword(pass);
        if(pass != reEnterPassword){
            setPasswordsError('Passwords do not match.');
        }else{
            setPasswordsError('')
        }
        
    }

    function handleReEnterPassword(e) {
        let rePass = e.target.value;
        setReEnterPassword(rePass);
        if(password != rePass){
            setPasswordsError('Passwords do not match.');
        }else{
            setPasswordsError('');
        }
    }

    function handleSex(e) {
        setSex(e.target.value);
    }

    function handleDate(e) {
        setDate(e.target.value);
    }

    const signup = async function (user) {
        return fetch("api/v1/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(user)
        }).then((response) => {
            if (!response.ok) {
                throw new Error("Error adding new user");
            }
            navigate('/');
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(password === reEnterPassword){
            const newUser = {
                name: name,
                login: login,
                email: email,
                password: password,
                sex: sex,
                country: selectedCountry.label,
                dateOfBirth: date
            }
            signup(newUser).then(() => {
                
            }).catch(e => console.log(e));
        }else{
            setPasswordsError('Passwords do not match.');
        }
        

    }

    return (
        <main className='signup'>
            <section>
                <div className="signup-card">
                    <h1>Signing up</h1>
                    <form onSubmit={e => handleSubmit(e)} className='signup-form'>
                        <div className="signup-form-item">
                            <label htmlFor="name">Name and Surname</label>
                            <input minLength={2} maxLength={100} required value={name} onChange={e => handleName(e)} id='name' type="text" />
                        </div>
                        <div className="signup-form-item">
                            <label htmlFor="login">Login</label>
                            <input minLength={5} maxLength={100} value={login} onChange={e => handleLogin(e)} required id='login' type="text" />
                        </div>
                        <div className="signup-form-item">
                            <label htmlFor="email">E-mail</label>
                            <input maxLength={100} value={email} onChange={e => handleEmail(e)} required id='email' type="email" />
                        </div>
                        <div className="signup-form-item">
                            <label htmlFor="password">Password</label>
                            <input maxLength={100} minLength={8} value={password} onChange={e => handlePassword(e)} required id='password' type="password" />
                        </div>
                        <div className="signup-form-item">
                            <label htmlFor="re-enter-password">Re-enter Password</label>
                            <input maxLength={100} minLength={8} value={reEnterPassword} onChange={e => handleReEnterPassword(e)} required id='re-enter-password' type="password" />
                            <p className='error-message'>{passwordsError}</p>
                        </div>
                        <div className="signup-form-item">
                            <label>Country</label>
                            <Select
                                options={countryOptions}
                                value={selectedCountry}
                                onChange={setSelectedCountry}
                                placeholder="Country"
                                required
                            />
                        </div>
                        <div className="signup-form-item">
                            <p>Sex</p>
                            <input
                                type="radio"
                                required
                                name='sex'
                                value='male'
                                checked={sex === 'male'}
                                onChange={e => handleSex(e)}
                                id='male' />
                            <label className='sex' htmlFor="male">Male</label>
                            <input
                                id='female'
                                onChange={e => handleSex(e)}
                                required
                                value='female'
                                checked={sex === 'female'}
                                name='sex'
                                type="radio" />
                            <label className='sex' htmlFor="female">Female</label>
                        </div>
                        <div className="signup-form-item">
                            <label htmlFor="date">Date of birth</label><br />
                            <input max="2022-08-25" min="1850-01-01" value={date} onChange={e => handleDate(e)} required type="date" id='date' />
                        </div>
                        <div className="signup-form-footer">
                            <button type='submit' className="signup">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </section>

        </main>
    )
}

export default SignUp;