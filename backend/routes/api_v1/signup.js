import express from 'express';
import pool from '../../config/db.js';
import { hashPassword } from '../../utils/authHelper.js';

var router = express.Router();

router.post('/', async (req, res) => {
    const {name, login, email, password, sex, country, dateOfBirth} = req.body;
    try {
        const hashedPassword = await hashPassword(password);

        await pool.query(
            "INSERT INTO users(name, login, email, password, country, sex, date_of_birth) VALUES($1,$2,$3,$4,$5,$6,$7)",
            [name, login, email, hashedPassword, country, sex, dateOfBirth]
        );

        res.status(200).send('User created successfully');
    } catch (e) {
        console.error(e);
        res.status(500).send('Server error');
    }

    
})

export default router;