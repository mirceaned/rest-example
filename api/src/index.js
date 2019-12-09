import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const users =  [
    {
        id: 1,
        name: "Alice",
        birthDate: "2010-01-01"
    }, {
        id: 2,
        title: "Bob",
        birthDate: "2005-12-12"
    }, {
        id: 3,
        title: "Mike",
        birthDate: "2000-12-12"
    }
];

app.get('/api/v1/users', (req, res) => {
    res.status(200).send({
        success: 'true',
        todos: users
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
        id: users.length + 1,
        name: req.body.name,
        birthDate: req.body.birthDate
    };
    users.push(user);
    return res.status(201).send({
        success: 'true',
        message: 'user added successfully',
        user
    });
});

app.listen(5000, () => {
    console.log(`REST server running on http://localhost:5000`)
});