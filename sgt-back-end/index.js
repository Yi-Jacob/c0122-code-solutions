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
app.get('/api/grades', (req, res, next) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

// app.post('/api/grades', (req, res, next) => {
//   const sql = `
//   insert into "grades" ("name", "course", "score")
//   values
//   `
// });

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on Port 3000!');
});

app.use(expressJson);
