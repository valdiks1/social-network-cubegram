import { formatTime } from '../../utils/time';
import './SessionResults.css';

const SessionResults = ({attempts}) => {
    let final = [];

    const times = attempts.map(a => {
        if(a.flags == '+2'){
            return (Number(a.time) + 2000)
        }else{
            return Number(a.time)
        }
    });

    const minTime = Math.min(...times);
    const maxTime = Math.max(...times);

    const minId = times.indexOf(minTime);
    const maxId = times.indexOf(maxTime);

    attempts.forEach((attempt, i) => {
        let flag = '';
        if (i === minId) flag = 'best';
        else if (i === maxId) flag = 'worst';

        final.push({
            id: i,
            time: formatTime(attempt.flags == '+2' ? (+attempt.time + 2000) : attempt.time),
            timeFlag: attempt.flags,
            flag
        });
    });
    
    return(
        <div className="session-results">
            <h2>Session results</h2>
            <div className="results">
                {final.map(({ id, time, flag, timeFlag }) => (
                    <div key={id} className={flag}>{timeFlag === '+2' ? (time + '+') : timeFlag === 'DNF' ? 'DNF' : time}{id !== (final.length - 1) ? ',' : ''}</div>
                ))}
                
                
            </div>
        </div>
    )
}

export default SessionResults;