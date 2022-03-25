const express = require('express');
const app = express();
const expressJson = express.json();

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const object in grades) {
    gradesArray.push(grades[object]);
  }
  res.json(gradesArray);
});

app.use(expressJson);

app.post('/api/grades', (req, res) => {
  const data = req.body;
  // eslint-disable-next-line no-console
  console.log('Name: ', data.name);
  // eslint-disable-next-line no-console
  console.log('Course: ', data.course);
  // eslint-disable-next-line no-console
  console.log('Score: ', data.score);

  data.id = nextId;
  grades[nextId] = data;
  nextId++;
  res.status('201');
  res.send(data);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
