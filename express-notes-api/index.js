const express = require('express');
// const fs = require('fs');
const app = express();

const dataJSon = require('./data.json');
const notes = dataJSon.notes;

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

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on Port 3000');
});
