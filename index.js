require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'GET Request success',
        author: process.env.AUTHOR
    })
})

app.post('/', (req, res) => {
    const {body} = req;
    res.json({
        message: 'POST Request success',
        data: body,
        author: process.env.AUTHOR
    })
})

app.put('/', (req, res) => {
    res.json({
        message: 'PUT Request success',
        author: process.env.AUTHOR
    })
})

app.delete('/', (req, res) => {
    res.json({
        message: 'DELETE Request success',
        author: process.env.AUTHOR
    })
})

app.get('/html', (req, res) => {
    res.send('Hello World...')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`running on PORT: ${PORT}`)
})