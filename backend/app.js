import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import session from 'express-session';
import connectPgSimple  from "connect-pg-simple";
const PgSession = connectPgSimple(session);
import pool from './config/db.js';
import { config } from './config/config.js';

import authRouter from './routes/api_v1/auth.js';

import dotenv from 'dotenv';
dotenv.config();

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

if (process.env.STATUS === 'production') {
    // trust proxy needed for secure cookie to work on render.com
    // because render.com uses a reverse proxy to handle HTTPS requests
    // and forwards the requests to the backend server over HTTP
    app.set('trust proxy', 1);
    }

    app.use(
        session({
            store: new PgSession({
                pool, 
                tableName: "session", 
            }),        
            secret: process.env.SESSION_SECRET,
            resave: false,
            saveUninitialized: false,
            name: config.session.cookieName,
            cookie: {
                secure: process.env.STATUS === 'production',
                httpOnly: true,
                sameSite: process.env.STATUS === 'production'?'none':'lax',
                maxAge: 1000 * 60 * 60 * 24 }            
                 
        })    
    ); 

app.use('/api/v1/auth', authRouter);

export default app;
