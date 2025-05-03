import express from 'express';
import getRecords from '../../models/records.js';

var router = express.Router();

router.get('/', (req, res) => {
    getRecords().then(r => {
        const records = r.rows;

        let [cube2, cube3, cube4, cube5] = [[], [], [], []];
        records.map(row => {
            switch (row.name) {
                case "2x2x2":
                    cube2.push(row);
                    break;
                case "3x3x3":
                    cube3.push(row);
                    break;
                case "4x4x4":
                    cube4.push(row);
                    break;
                case "5x5x5":
                    cube5.push(row);
                    break;
            }
        })

        const result = {
            cube2, cube3, cube4, cube5
        }

        res.status(200).json(result);
    }).catch(e => {
        console.log(e);
        res.status(500).end();
    })


})

export default router;