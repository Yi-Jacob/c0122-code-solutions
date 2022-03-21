const express = require('express');
const fs = require('fs');
const app = express();
const dataFile = require('./data.json');
const notes = dataFile.notes;
const updatedFile = dataFile;
const newNotes = updatedFile.notes;
let nextId = updatedFile.nextId;
const expressJson = express.json();

app.use(express.json());

// Clients can GET a list of notes.
app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const key in notes) {
    notesArray.push(notes[key]);
  }
  res.status(200).json(notesArray);
});

// Clients can GET a single note by id.
app.get('/api/notes/:id', (req, res) => {
  const requestNote = req.params;
  const id = requestNote.id;
  if (id < 0) {
    res.status(400).json({ Error: 'Please use a positive integer' });
  } else if (notes[id] !== undefined) {
    res.status(200).json(notes[id]);
  } else {
    res.status(404).json({ Error: `Cannot find the ID:${id}` });
  }
});

// Clients can POST a new note.
app.post('/api/notes', (req, res) => {
  const newContent = req.body;
  const id = nextId;
  if (newContent.content === undefined) {
    res.status(400).json({ error: 'No content provided!' });
  } else {
    newNotes[id] = newContent;
    newContent.id = id;
    dataFile.nextId++;
    nextId++;
    const updatedNotes = JSON.stringify(updatedFile, null, 2);
    fs.writeFile('data.json', updatedNotes, err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured.' });
      } else {
        res.status(201).json(newContent);
      }
    });
  }
});

// Clients can DELETE a note by id.
app.delete('/api/notes/:id', (req, res) => {

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on Port 3000');
});

app.use(expressJson);
