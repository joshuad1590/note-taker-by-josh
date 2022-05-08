const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');



app.use(express.static('./Develop/public'));
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

app.get('/api/notes', (req, res) => {
    const notes = require('./Develop/db/db.json');
    res.json(notes);
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

app.post('/api/notes', (req, res) => {
    const notes = fs.readFileSync('./Develop/db/db.json', "utf-8");
    var notesArray = JSON.parse(notes);
    notesArray.push(req.body);
    fs.writeFileSync('./Develop/db/db.json', JSON.stringify(notesArray));
    res.json(notesArray);
});

app.listen(PORT, () => {
    console.log(`API server listening on ${PORT}!`);
});