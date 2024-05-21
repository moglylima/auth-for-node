import express from 'express';
import routes from './routes/routes.js';
import dataConnection from './config/dataConnection.js';

const connectionDB = await dataConnection();

connectionDB.on('error', console.error.bind(console, 'connection error:'));

connectionDB.once('open', () => {
    console.log('Connected to database successfully!');
})

const app = express();
routes(app);

export default app;


