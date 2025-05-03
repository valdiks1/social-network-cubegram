import { useEffect } from 'react';
import RecordsComponent from '../../components/RecordsComponent/RecordsComponent';
import RecordsFilther from '../../components/RecordsFilther/RecordsFilther';
import { getRecords } from '../../services/recordsService';
import './Records.css';

const Records = () => {

    useEffect(() => {
        getRecords().then().catch(e => console.log(e));
    },[])

    return(
        <main>
            <RecordsFilther />
            <RecordsComponent />
        </main>
    )
}

export default Records;