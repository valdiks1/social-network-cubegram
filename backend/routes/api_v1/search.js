import express from 'express';
import { getUsersByName } from '../../models/users.js';

var router = express.Router();

router.get("/:name", (req,res) => {
    const name = req.params.name;
    getUsersByName(name).then(result => {
        if(result.rows.length === 0){
            res.status(404).end();
        }
        res.status(200).json(result.rows);
    }).catch(e => {
        console.log(e);
        res.status(500);
    })
})

export default router;