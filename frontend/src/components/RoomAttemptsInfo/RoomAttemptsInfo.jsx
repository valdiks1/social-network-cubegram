import { useEffect } from 'react';
import { useState } from 'react';
import { formatTime } from '../../utils/time';
import './RoomAttemptsInfo.css';

const RoomAttemptsInfo = ({ usersData }) => {
    const [helperList, setHelperList] = useState([]);

    useEffect(() => {
        let maxLength = usersData.length ? Math.max(...usersData.map(user => user.attempts.length)) : 0;
    
        let newHelperList = [];
    
        for (let i = 0; i < maxLength; i++) {
            let list = usersData.map(user => user.attempts[i] ?? null); // null если попытки нет
            newHelperList.push(list);
        }
    
        setHelperList(newHelperList.reverse());
    }, [usersData]);
    
    return (
        <div className="room-attempts-info">
            <table>
                <thead>
                    <tr>
                        <td>Attempt</td>
                        {usersData.map((user, id) => <td key={id}>{user.username}</td>)}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>

                        </td>
                        {usersData.map((user, id) => <td key={id}>
                            <p>Avg.: {formatTime(user.info.avg)}</p>
                            <p>Best: {formatTime(user.info.best)}</p>
                            <p>Worst: {formatTime(user.info.worst)}</p>
                            <p>Avg. 5: {formatTime(user.info.avg5)}</p>
                            <p>Avg. 10: {formatTime(user.info.avg10)}</p>
                            <p>Avg. 25: {formatTime(user.info.avg25)}</p>
                            <p>Avg. 50: {formatTime(user.info.avg50)}</p>
                        </td>)}
                    </tr>
                    
                    {helperList.map((attempts, i) => <tr key={i} className='attempt'><td>{helperList.length-i}</td>
                        {attempts.map((attempt, j) => <td key={j}>{attempt ? formatTime(attempt) : '—'}</td>)}
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default RoomAttemptsInfo;