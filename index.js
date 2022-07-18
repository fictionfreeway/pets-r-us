const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req,res)  => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
})

app.get('/grooming', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/grooming.html'));
})

app.listen(PORT, () => {
    console.log('Application started and listening on port ' + PORT);
})