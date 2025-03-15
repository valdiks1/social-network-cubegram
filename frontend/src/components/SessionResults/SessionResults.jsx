import './SessionResults.css';

const SessionResults = () => {
    return(
        <div className="session-results">
            <h2>Session results</h2>
            <p>
                <span>15.75</span>
                <span className='worst'>19.49</span>
                <span className='best'>10.75</span>
                <span>14.91</span>
                <span>13.97</span>
            </p>
        </div>
    )
}

export default SessionResults;