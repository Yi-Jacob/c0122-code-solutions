const express = require('express');
const app = express();
const pg = require('pg');
const expressJson = express.json();

app.use(expressJson);

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

// Feature 1
app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

// Feature 2
app.post('/api/grades', (req, res, next) => {
  const newName = req.body.name;
  const newCourse = req.body.course;
  const newScore = req.body.score;
  const sql = `
  insert into "grades" ("name", "course", "score")
  values ($1, $2, $3)
  returning *
  `;
  const grade = [newName, newCourse, newScore];
  if ((!newName) || (!newCourse) || (!newScore)) {
    res.status(400).json({
      error: 'Please include all 3 fields'
    });
    return;
  } else if (newScore < 0 || newScore > 100) {
    res.status(400).json({
      error: 'Please use an integer between 0 and 100'
    });
    return;
  }
  db.query(sql, grade)
    .then(result => {
      const newGrade = result.rows[0];
      res.status(201).json(newGrade);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

// Feature 3
app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  const name = req.body.name;
  const course = req.body.course;
  const score = parseInt(req.body.score);
  const sql = `
    UPDATE "grades"
    SET "name" = $1,
        "course" = $2,
        "score" = $3
    WHERE "gradeId" = ${gradeId}
    RETURNING *
    `;
  const values = [name, course, score];

  if (!name || !course || !score) {
    res.status(400).json({ error: 'Please include all 3 fields' });
    return;
  } else if (score < 0 || score > 100) {
    res.status(400).json({ error: 'Please use an integer between 0 and 100' });
    return;
  }

  db.query(sql, values)
    .then(result => {
      const updatedGrade = result.rows[0];
      if (!updatedGrade) {
        res.status(404).json({ error: `gradeId ${gradeId} does not exist in grades table!` });
      } else {
        res.status(200).json(updatedGrade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on Port 3000!');
});

app.use(expressJson);
