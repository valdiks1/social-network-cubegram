import express from 'express';
import { getUser } from '../../models/myProfile.js';

var router = express.Router();

router.get('/:id', (req, res) => {
    const {id} = req.params;
    getUser(id).then((result) => {
        if(result.rows.length === 0){
            res.status(404).end();
        }else{
            console.log(result.rows);
            res.status(200).json(result.rows[0]);
        }
        
    }).catch(e => {
        console.log(e);
        res.status(500).end();
    })
})

export default router;