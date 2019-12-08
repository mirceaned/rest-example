import express from 'express';
import db from './db';

const app = express();

app.get('/api/v1/users', (req, res) => {
    res.status(200).send({
        success: 'true',
        todos: db
    })
});

app.listen(5000, () => {
    console.log(`server running Server is running on http://localhost:5000`)
});