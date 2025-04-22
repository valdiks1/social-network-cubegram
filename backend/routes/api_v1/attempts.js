import express from 'express';
import { getAttemptsByCubeType } from '../../models/attempts.js';

var router = express.Router();

router.get('/:type', (req,res) => {
    const {type} = req.params;
    if(req.session && req.session.userId){
        getAttemptsByCubeType(req.session.userId, type).then(result => {
            res.status(200).json(result.rows);
        }).catch(e => {
            console.log(e);
            res.status(500).end();
        })
    }else{
        res.status(500).end();
    }
})

export default router;