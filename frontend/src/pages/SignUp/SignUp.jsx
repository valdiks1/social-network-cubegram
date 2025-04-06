import './SignUp.css';
import Select from "react-select";
import countries from "world-countries";
import {useState} from 'react';

const SignUp = () => {

    const countryOptions = countries.map((country) => ({
        value: country.cca2,
        label: country.name.common,
      }));

    const [selectedCountry, setSelectedCountry] = useState(null);

    return (
        <main className='signup'>
            <section>
                <div className="signup-card">
                    <h1>Signing up</h1>
                    <form className='signup-form'>
                        <div className="signup-form-item">
                            <label htmlFor="name">Name and Surname</label>
                            <input id='name' type="text" />
                        </div>
                        <div className="signup-form-item">
                            <label htmlFor="login">Login</label>
                            <input id='login' type="text" />
                        </div>
                        <div className="signup-form-item">
                            <label htmlFor="email">E-mail</label>
                            <input id='email' type="email" />
                        </div>
                        <div className="signup-form-item">
                            <label htmlFor="password">Password</label>
                            <input id='password' type="password" />
                        </div>
                        <div className="signup-form-item">
                            <label htmlFor="re-enter-password">Re-enter Password</label>
                            <input id='re-enter-password' type="password" />
                        </div>
                        <div className="signup-form-item">
                            <label>Country</label>
                            <Select
                                options={countryOptions}
                                value={selectedCountry}
                                onChange={setSelectedCountry}
                                placeholder="Country"
                            />
                        </div>
                        <div className="signup-form-item">
                            <p>Sex</p>
                            <input type="radio" name='sex' id='male' />
                            <label className='sex' htmlFor="male">Male</label>
                            <input id='female' name='sex' type="radio" />
                            <label className='sex' htmlFor="female">Female</label>
                        </div>
                        <div className="signup-form-item">
                            <label htmlFor="date">Date of birth</label><br />
                            <input type="date" id='date' />
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