import express from 'express';
import {getPuzzleId} from '../../models/puzzles.js';
import {addAttempt, updateAttempt} from '../../models/timer.js';

var router = express.Router();

router.post('/', async  (req,res) => {
    const {id, time, type } = req.body;

    try {
        const result = await getPuzzleId(type);
        const id_p = result.rows[0].id;

        if (req.session && req.session.userId) {
            const now = new Date();

            await addAttempt(id, time, id_p, req.session.userId, now);
            res.status(200).end();
        } else {
            res.status(200).end();
        }

    } catch (e) {
        console.log(e);
        res.status(500).end();
    }

})

router.put('/', (req,res) => {
    if(req.session && req.session.userId){
        const {id, flags} = req.body;
        let flag = 'none';
        if(flags.dnf){
            flag = 'DNF';
        }else if(flags.plus2){
            flag = '+2';
        }

        console.log(flag);

        updateAttempt(id,flag).then(r => res.status(200).end()).catch(e => {
            console.log(e);
            res.status(500).end();
        })
    }else{
        res.status(500).end();
    }
    
})

export default router;