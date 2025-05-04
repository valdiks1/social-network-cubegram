import express from 'express';
import { getAttemptsByCubeType } from '../../models/attempts.js';
import { average } from '../../utils/attemptsHelper.js';

var router = express.Router();

router.get('/:type', (req,res) => {
    const {type} = req.params;
    if(req.session && req.session.userId){
        getAttemptsByCubeType(req.session.userId, type).then(result => {
            const finalResult = {
                allAttempts: result.rows,
                count: result.rows.length,
                avg: average(result.rows),
                avg5: average(result.rows, 5),
                avg10: average(result.rows, 10),
                avg25: average(result.rows, 25),
                avg50: average(result.rows, 50)
            }
            res.status(200).json(finalResult);
        }).catch(e => {
            console.log(e);
            res.status(500).end();
        })
    }else{
        res.status(500).end();
    }
})

export default router;