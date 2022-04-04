const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname, 'public');
console.log(__dirname);
console.log(publicPath);

const staticWare = express.static(publicPath);
app.use(staticWare);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on PORT 3000');
});
