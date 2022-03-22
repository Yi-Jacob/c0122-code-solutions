const express = require('express');
const app = express();

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', (req, res) => {
  // eslint-disable-next-line no-console
  console.log('require:', req.method);
  const gradesArray = [];
  for (const object in grades) {
    gradesArray.push(grades[object]);
  }
  res.json(gradesArray);
});

app.delete('/api/grades/:id', (req, res) => {
  // eslint-disable-next-line no-console
  console.log(grades[req.params.id]);
  delete grades[req.params.id];
  res.sendStatus('204');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000!');
});