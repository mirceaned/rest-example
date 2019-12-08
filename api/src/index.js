import express from 'express';
import db from './db';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/v1/users', (req, res) => {
    res.status(200).send({
        success: 'true',
        todos: db
    })
});

app.post('/api/v1/users', (req, res) => {
    if(!req.body.name) {
        return res.status(400).send({
            success: 'false',
            message: 'name is required'
        });
    }
    const user = {
        id: db.length + 1,
        name: req.body.name,
        birthDate: req.body.birthDate
    };
    db.push(user);
    return res.status(201).send({
        success: 'true',
        message: 'user added successfully',
        user
    });
});

app.listen(5000, () => {
    console.log(`REST server running on http://localhost:5000`)
});