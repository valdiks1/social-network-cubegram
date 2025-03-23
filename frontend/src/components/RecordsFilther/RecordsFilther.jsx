import FiltherCube from './FiltherCube';
import './RecordsFilther.css';
import cube2 from '../../assets/images/2cube.svg';
import cube3 from '../../assets/images/3cube.svg';
import cube4 from '../../assets/images/4cube.svg';
import cube5 from '../../assets/images/5cube.svg';
import Select from "react-select";
import countries from "world-countries";
import { useState } from 'react';

const RecordsFilther = () => {

    const countryOptions = countries.map((country) => ({
        value: country.cca2,
        label: country.name.common,
      }));

    const [selectedCountry, setSelectedCountry] = useState(null);

    return(
        <section className="records-filther">
            <div className="records-filther-inner">
                <h2>Choose type of cube</h2>
                <div className="types-cube">
                    <FiltherCube all={true}/>
                    <FiltherCube img={cube2} text={"2x2x2"}/>
                    <FiltherCube img={cube3} text={"3x3x3"}/>
                    <FiltherCube img={cube4} text={"4x4x4"}/>
                    <FiltherCube img={cube5} text={"5x5x5"}/>
                </div>

                <p className='country-text'>Country</p>
                <Select
                    options={countryOptions}
                    value={selectedCountry}
                    onChange={setSelectedCountry}
                    placeholder="Country"
                />

                <div className="sex">
                    <p>Sex</p>
                    <input type="radio" name="sex" id="all" />
                    <label htmlFor="all">All</label>
                    <input type="radio" name="sex" id="male" />
                    <label htmlFor="male">Male</label>
                    <input type="radio" name="sex" id="female" />
                    <label htmlFor="female">Female</label>
                </div>
            </div>
                
        </section>
    );
}

export default RecordsFilther;