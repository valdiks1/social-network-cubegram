import { useState } from 'react';
import { useEffect } from 'react';
import RecordsComponent from '../../components/RecordsComponent/RecordsComponent';
import RecordsFilther from '../../components/RecordsFilther/RecordsFilther';
import { getRecords } from '../../services/recordsService';
import './Records.css';

const Records = () => {
    const [records, setRecords] = useState({cube2: [], cube3: [], cube4: [], cube5: []});

    useEffect(() => {
        getRecords().then(r => setRecords(r)).catch(e => console.log(e));
    },[])

    return(
        <main>
            <RecordsFilther />
            <RecordsComponent records={records}/>
        </main>
    )
}

export default Records;